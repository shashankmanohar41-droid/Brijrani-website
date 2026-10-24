import { QueryClient } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { routeTree } from "@/routeTree.gen";
import { PRODUCTS } from "@/data/products";
import { DIRECTORS } from "@/data/leadership";
import { BLOG_POSTS } from "@/data/blogs";

describe("App routing & Multi-Page Architecture", () => {
  const router = createRouter({
    routeTree,
    context: { queryClient: new QueryClient() },
  });

  const routesToTest = [
    "/",
    "/about",
    "/vision-mission",
    "/agriculture-network",
    "/directors/",
    "/directors/rajesh-kumar-gupta",
    "/directors/suman-gupta",
    "/directors/sumit-gupta",
    "/quality-policy",
    "/products/",
    "/products/rice-bran",
    "/products/broken-rice",
    "/products/wheat",
    "/products/maize",
    "/products/dorb",
    "/products/mustard-doc",
    "/products/soya-hipro",
    "/products/soya-doc",
    "/for-seller",
    "/for-buyer",
    "/enquiry",
    "/gallery",
    "/blogs/",
    "/blogs/use-of-rice-bran-in-poultry-diets",
    "/blogs/uses-of-de-oiled-cakes-as-manure",
    "/blogs/value-of-rice-by-product-for-feed-industry",
    "/contact",
  ];

  routesToTest.forEach((path) => {
    it(`matches a registered route for ${path}`, () => {
      const matches = router.matchRoutes(path);
      expect(matches.length).toBeGreaterThan(0);
      expect(matches.at(-1)?.routeId).not.toBe(rootRouteId);
    });
  });

  it("verifies 8 core commodities with exact parameters and HSN codes", () => {
    expect(PRODUCTS).toHaveLength(8);
    PRODUCTS.forEach((p) => {
      expect(p.slug).toBeTruthy();
      expect(p.name).toBeTruthy();
      expect(p.hsnCode).toMatch(/^[0-9]+$/);
      expect(p.specifications.length).toBeGreaterThan(0);
      expect(p.sourceUrl).toContain("brijrani.in");
    });
  });

  it("verifies 3 leadership directors with messages", () => {
    expect(DIRECTORS).toHaveLength(3);
    DIRECTORS.forEach((d) => {
      expect(d.name).toBeTruthy();
      expect(d.designation).toBeTruthy();
      expect(d.message.bodyParagraphs.length).toBeGreaterThan(0);
    });
  });

  it("verifies 3 published articles with source attribution", () => {
    expect(BLOG_POSTS).toHaveLength(3);
    BLOG_POSTS.forEach((b) => {
      expect(b.title).toBeTruthy();
      expect(b.sourceUrl).toContain("brijrani.in/blogs");
      expect(b.verifiedOutline.length).toBeGreaterThan(0);
    });
  });
});
