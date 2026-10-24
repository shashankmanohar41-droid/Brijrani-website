import { Link } from "@tanstack/react-router";

export interface Crumb {
  label: string;
  href?: string;
}

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6 flex items-center space-x-2 text-xs sm:text-sm">
      <Link
        to="/"
        className="inline-flex items-center gap-1.5 font-semibold text-slate-500 transition-colors hover:text-[#174F2C]"
      >
        <svg className="h-3.5 w-3.5 text-[#1F6B3A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
        <span>Home</span>
      </Link>
      {items.map((item, idx) => {
        const isLast = idx === items.length - 1;
        return (
          <div key={idx} className="flex items-center space-x-2">
            <svg className="h-3 w-3 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
            {isLast || !item.href ? (
              <span className="font-bold text-[#174F2C] line-clamp-1">{item.label}</span>
            ) : (
              <Link
                to={item.href}
                className="font-medium text-slate-600 transition-colors hover:text-[#D96F12]"
              >
                {item.label}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
}
