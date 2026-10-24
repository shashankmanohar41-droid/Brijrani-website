-- Brijrani Agri Product Pvt. Ltd. (Krishi Varsha)
-- Normalized Database Schema for Multi-Page Production Trading Portal
-- Migration: 20261024_init.sql

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. TRADE SUBMISSIONS (Buyer & Seller Portals)
CREATE TABLE IF NOT EXISTS public.trade_submissions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    reference_id VARCHAR(32) NOT NULL UNIQUE,
    trade_type VARCHAR(16) NOT NULL CHECK (trade_type IN ('seller', 'buyer')),
    employee_code VARCHAR(64) NOT NULL,
    party_name VARCHAR(255) NOT NULL, -- Vendor Name (Seller) or Buyer Name (Buyer)
    party_address TEXT NOT NULL,
    contact_person VARCHAR(255),
    contact_phone VARCHAR(32) NOT NULL,
    commodity_item VARCHAR(128) NOT NULL,
    trade_location TEXT NOT NULL, -- Dispatch Location (Seller) or Arrival Location (Buyer)
    location_type VARCHAR(16) NOT NULL CHECK (location_type IN ('dispatch', 'arrival')),
    payment_terms VARCHAR(255),
    weight_quantity VARCHAR(64) NOT NULL,
    trade_rate VARCHAR(64) NOT NULL, -- Offering Rate (Seller) or Asking Rate (Buyer)
    rate_type VARCHAR(16) NOT NULL CHECK (rate_type IN ('offered', 'asking')),
    remarks TEXT,
    sample_file_url TEXT,
    processing_status VARCHAR(32) DEFAULT 'pending' CHECK (processing_status IN ('pending', 'under_review', 'verified', 'closed')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. ENQUIRIES (General Enquiry & Sample Requests)
CREATE TABLE IF NOT EXISTS public.enquiries (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    reference_id VARCHAR(32) NOT NULL UNIQUE,
    full_name VARCHAR(255) NOT NULL,
    company_name VARCHAR(255),
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(32) NOT NULL,
    commodity VARCHAR(128) NOT NULL,
    quantity VARCHAR(64),
    enquiry_type VARCHAR(64) NOT NULL CHECK (enquiry_type IN ('bulk_quotation', 'sample_request', 'specification_sheet', 'general_inquiry')),
    message TEXT NOT NULL,
    processing_status VARCHAR(32) DEFAULT 'new' CHECK (processing_status IN ('new', 'contacted', 'quotation_sent', 'completed')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. SUBMISSION ATTACHMENTS
CREATE TABLE IF NOT EXISTS public.submission_attachments (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    submission_ref VARCHAR(32) NOT NULL,
    file_name VARCHAR(255) NOT NULL,
    file_path TEXT NOT NULL,
    file_size_bytes BIGINT,
    mime_type VARCHAR(128),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 4. CANONICAL PRODUCTS & SPECS
CREATE TABLE IF NOT EXISTS public.products (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    slug VARCHAR(128) NOT NULL UNIQUE,
    name VARCHAR(255) NOT NULL,
    category VARCHAR(64) NOT NULL,
    hsn_code VARCHAR(32) NOT NULL,
    listed_gst VARCHAR(64),
    physical_form VARCHAR(64),
    source_url TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.product_specs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    product_slug VARCHAR(128) NOT NULL REFERENCES public.products(slug) ON DELETE CASCADE,
    parameter VARCHAR(128) NOT NULL,
    spec_value VARCHAR(128) NOT NULL,
    source_status VARCHAR(32) DEFAULT 'verified-source',
    commercial_approval VARCHAR(32) DEFAULT 'approved',
    notes TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Row-Level Security (RLS)
ALTER TABLE public.trade_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.enquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.submission_attachments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.product_specs ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts for trade submissions & enquiries (public forms)
CREATE POLICY "Allow public submissions" ON public.trade_submissions FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public enquiries" ON public.enquiries FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public attachments" ON public.submission_attachments FOR INSERT WITH CHECK (true);

-- Allow public read access to products & specs
CREATE POLICY "Allow public read products" ON public.products FOR SELECT USING (true);
CREATE POLICY "Allow public read product_specs" ON public.product_specs FOR SELECT USING (true);
