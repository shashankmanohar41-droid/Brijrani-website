import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import bodyHtml from "@/clone/body.html?raw";
import { FAQ_ANSWERS } from "@/clone/faq";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Feed Rani - Best Quality Feeds Company - Brijrani Krishi Varsha India" },
      {
        name: "description",
        content:
          "Brijrani supplies premium agricultural commodities and feed raw materials for poultry, cattle, fish and livestock nutrition across India.",
      },
      { property: "og:title", content: "Feed Rani - Best Quality Feeds Company - Brijrani" },
      {
        property: "og:description",
        content: "Premium agricultural commodities and feed raw materials, trusted nationwide.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const ON = ["bg-[#F28C28]", "text-white", "border-[#F28C28]"];
const OFF = ["bg-white/10", "text-slate-200", "border-white/15"];
const CHEVRON_ON = ["rotate-180", "text-[#F28C28]"] as const;
const ANSWER_CLASS =
  "text-[#4F5D55] leading-relaxed mt-4 text-sm sm:text-base font-inter border-t border-[#DCEBDD]/60 pt-4";

function Index() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const cleanups: Array<() => void> = [];
    const on = (t: EventTarget, ev: string, fn: EventListener, opts?: AddEventListenerOptions) => {
      t.addEventListener(ev, fn, opts);
      cleanups.push(() => t.removeEventListener(ev, fn));
    };

    // Nav scrolled state
    const navBar = el.querySelector<HTMLElement>("nav .max-w-7xl");
    const onNavScroll = () => {
      if (!navBar) return;
      const s = window.scrollY > 50;
      navBar.classList.toggle("bg-white/95", s);
      navBar.classList.toggle("bg-white/90", !s);
    };
    on(window, "scroll", onNavScroll, { passive: true });
    onNavScroll();

    // Drawer — elements are looked up at click time and events are delegated
    // from document, so it keeps working if the markup is re-rendered.
    const getAside = () => document.querySelector<HTMLElement>('aside[role="dialog"]');
    const setDrawer = (open: boolean) => {
      const aside = getAside();
      const overlay = aside?.previousElementSibling as HTMLElement | null;
      if (!aside) return;
      aside.classList.toggle("translate-x-0", open);
      aside.classList.toggle("drawer-open", open);
      aside.classList.toggle("translate-x-full", !open);
      aside.setAttribute("aria-hidden", String(!open));
      if (overlay) {
        overlay.classList.toggle("opacity-100", open);
        overlay.classList.toggle("pointer-events-auto", open);
        overlay.classList.toggle("opacity-0", !open);
        overlay.classList.toggle("pointer-events-none", !open);
      }
      const menuBtn = document.querySelector("nav button");
      menuBtn?.setAttribute("aria-expanded", String(open));
      document.body.style.overflow = open ? "hidden" : "";
    };

    let openIdx: number | null = 0;
    const onDocClick = (ev: Event) => {
      const t = ev.target as HTMLElement | null;
      if (!t || !el.contains(t)) return;

      // Open drawer: the menu button inside the top nav
      if (t.closest("nav button")) {
        ev.preventDefault();
        setDrawer(true);
        return;
      }
      const aside = getAside();
      // Overlay click closes
      if (aside && t === aside.previousElementSibling) {
        setDrawer(false);
        return;
      }
      // Inside drawer: links and close button close it
      if (aside && aside.contains(t)) {
        const hit = t.closest("a, button");
        if (hit && (hit.tagName === "A" || hit.getAttribute("aria-label")?.toLowerCase().includes("close") || hit.textContent?.toLowerCase().includes("close")))
          setDrawer(false);
        return;
      }

      // FAQ accordion
      const faqBtn = t.closest<HTMLButtonElement>("#faq button[aria-expanded]");
      if (faqBtn) {
        const btns = Array.from(el.querySelectorAll<HTMLButtonElement>("#faq button[aria-expanded]"));
        const idx = btns.indexOf(faqBtn);
        openIdx = openIdx === idx ? null : idx;
        btns.forEach((b, i) => {
          const isOpen = openIdx === i;
          b.setAttribute("aria-expanded", String(isOpen));
          b.querySelector("svg")?.classList.toggle(CHEVRON_ON[0], isOpen);
          b.querySelector("svg")?.classList.toggle(CHEVRON_ON[1], isOpen);
          const card = b.parentElement!;
          const p = card.querySelector("p");
          if (isOpen && !p) {
            const np = document.createElement("p");
            np.className = ANSWER_CLASS;
            np.textContent = FAQ_ANSWERS[i] ?? "";
            card.appendChild(np);
          } else if (!isOpen && p) p.remove();
        });
        return;
      }

      // Footer commodity badges
      const badge = t.closest<HTMLButtonElement>("#contact button.footer-badge-hover");
      if (badge) {
        const sel = !badge.classList.contains("bg-[#F28C28]");
        ON.forEach((c) => badge.classList.toggle(c, sel));
        OFF.forEach((c) => badge.classList.toggle(c, !sel));
      }
    };
    on(document, "click", onDocClick);
    on(window, "keydown", ((e: KeyboardEvent) => e.key === "Escape" && setDrawer(false)) as EventListener);
    // Close drawer when resizing to desktop is not needed; ensure closed initially
    setDrawer(false);
    cleanups.push(() => setDrawer(false));

    // Inquiry form
    const form = el.querySelector<HTMLFormElement>("#contact form");
    if (form) {
      const success = document.createElement("div");
      success.className =
        "p-8 text-center bg-emerald-900/60 rounded-2xl border border-emerald-500/40 space-y-3";
      let timer: number | undefined;
      on(form, "submit", async (e) => {
        e.preventDefault();
        const inputs = new FormData(form);
        const name = (inputs.get("name") as string) || "Enterprise Buyer";
        const email = (inputs.get("email") as string) || "info@brijrani.in";
        const phone = (inputs.get("phone") as string) || "+91 9334399829";
        const message = (inputs.get("message") as string) || "Quick inquiry from homepage";

        const { submitEnquiryRecord } = await import("@/lib/supabase");
        const res = await submitEnquiryRecord({
          fullName: name,
          email,
          phone,
          commodity: "Rice Bran / DORB / Yellow Maize",
          enquiryType: "bulk_quotation",
          message,
        });

        success.innerHTML = `<div class="text-emerald-400 font-bold text-xl">Inquiry Received Successfully!</div><div class="inline-block mt-2 font-mono text-sm font-bold text-emerald-300 bg-emerald-950/80 px-4 py-1.5 rounded-xl border border-emerald-500/40">Ref: ${res.referenceId}</div><p class="text-slate-300 text-sm mt-2">Our procurement desk will analyze your specifications and reach out via email within 24 hours.</p>`;
        form.replaceWith(success);
        timer = window.setTimeout(() => {
          success.replaceWith(form);
          form.reset();
        }, 8000);
      });
      cleanups.push(() => window.clearTimeout(timer));
    }

    // Hero parallax
    const hero = el.querySelector<HTMLElement>("#hero-image");
    let ticking = false;
    const onPar = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        if (
          hero &&
          window.innerWidth >= 1024 &&
          !window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ) {
          const t = Math.max(-10, Math.min(10, -0.015 * hero.getBoundingClientRect().top));
          hero.style.transform = `translate3d(0, ${t}px, 0)`;
        } else if (hero) hero.style.transform = "";
        ticking = false;
      });
    };
    on(window, "scroll", onPar, { passive: true });
    on(window, "resize", onPar);

    return () => {
      cleanups.forEach((c) => c());
      document.body.style.overflow = "";
    };
  }, []);

  return <div ref={root} dangerouslySetInnerHTML={{ __html: bodyHtml }} />;
}
