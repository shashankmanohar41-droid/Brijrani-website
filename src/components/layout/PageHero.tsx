import { ReactNode } from "react";
import { Breadcrumbs, Crumb } from "../navigation/Breadcrumbs";

interface PageHeroProps {
  breadcrumbs: Crumb[];
  badgeText: string;
  title: string;
  titleHighlight?: string;
  description: string;
  children?: ReactNode;
}

export function PageHero({
  breadcrumbs,
  badgeText,
  title,
  titleHighlight,
  description,
  children,
}: PageHeroProps) {
  return (
    <div className="relative overflow-hidden border-b border-[#DCEBDD] bg-gradient-to-b from-[#FFFDF9] via-[#F8FDF9] to-[#EFF7F0]/40 pb-16 pt-32 sm:pb-20 sm:pt-36">
      {/* Decorative ambient background blur spots */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-96 w-96 rounded-full bg-emerald-500/10 blur-[130px]" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-80 w-80 rounded-full bg-[#F28C28]/10 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbs} />

        {/* Eyebrow badge */}
        <div className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-[#1F6B3A]/25 bg-white/90 px-4 py-1.5 text-xs font-bold tracking-wide text-[#174F2C] shadow-sm backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#1F6B3A] opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#1F6B3A]" />
          </span>
          <span>{badgeText}</span>
        </div>

        {/* Heading */}
        <h1 className="font-space text-3xl font-black leading-[1.08] tracking-tight text-[#174F2C] sm:text-4xl md:text-5xl lg:text-6xl">
          {title} {titleHighlight && <span className="text-[#F28C28]">{titleHighlight}</span>}
        </h1>

        {/* Lead description */}
        <p className="font-inter mt-5 max-w-3xl text-base font-medium leading-relaxed text-[#4F5D55] sm:text-lg sm:leading-8">
          {description}
        </p>

        {/* Optional action buttons or stats */}
        {children && <div className="mt-8 flex flex-wrap gap-4">{children}</div>}
      </div>
    </div>
  );
}
