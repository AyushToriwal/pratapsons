import { useState, type ReactNode } from "react";
import { Link, NavLink } from "react-router-dom";
import { ArrowRight, Droplets, Menu, MessageCircle, Phone, Snowflake, Wrench, X } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { NAV_ITEMS, SITE_CONFIG } from "@/lib/site";

type SiteLayoutProps = { children: ReactNode };

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/90 bg-[#fbfaf7]/95 backdrop-blur-md" data-testid="site-header">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="group flex min-w-0 items-center gap-3" data-testid="brand-home-link">
          <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-teal-800 text-white shadow-sm" aria-hidden="true">
            <span className="relative"><Snowflake className="size-5" /><Droplets className="absolute -bottom-2 -right-2 size-3.5 text-amber-400" /></span>
          </span>
          <span className="min-w-0 leading-tight">
            <span className="block truncate font-heading text-sm font-extrabold tracking-tight text-slate-900 sm:text-base" data-testid="brand-name">{SITE_CONFIG.name}</span>
            <span className="hidden text-[11px] font-semibold uppercase tracking-[0.16em] text-teal-800 sm:block" data-testid="brand-region">Noida local service</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation" data-testid="desktop-navigation">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => cn("rounded-md px-3 py-2 text-sm font-semibold transition-colors hover:bg-teal-50 hover:text-teal-800", isActive ? "bg-teal-50 text-teal-800" : "text-slate-600")}
              data-testid={`nav-${item.label.toLowerCase().replaceAll(" ", "-").replaceAll("&", "and")}-link`}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex" data-testid="header-actions">
          <a href={SITE_CONFIG.phoneUri} className={buttonVariants({ variant: "outline", size: "sm" })} data-testid="header-call-button"><Phone className="size-4" /> Call Now</a>
          <a href={SITE_CONFIG.whatsappUri} className={cn(buttonVariants({ size: "sm" }), "bg-emerald-600 text-white hover:bg-emerald-700")} data-testid="header-whatsapp-button"><MessageCircle className="size-4" /> WhatsApp</a>
        </div>

        <button type="button" className="inline-flex size-10 items-center justify-center rounded-md border border-slate-200 text-slate-800 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700 lg:hidden" onClick={() => setMenuOpen((open) => !open)} aria-expanded={menuOpen} aria-label={menuOpen ? "Close navigation" : "Open navigation"} data-testid="mobile-navigation-toggle">
          {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-slate-200 bg-white px-4 py-3 lg:hidden" data-testid="mobile-navigation-menu">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1" aria-label="Mobile navigation">
            {NAV_ITEMS.map((item) => (
              <NavLink key={item.path} to={item.path} onClick={() => setMenuOpen(false)} className="rounded-md px-3 py-3 text-sm font-semibold text-slate-700 hover:bg-teal-50 hover:text-teal-800" data-testid={`mobile-nav-${item.label.toLowerCase().replaceAll(" ", "-").replaceAll("&", "and")}-link`}>{item.label}</NavLink>
            ))}
          </nav>
          <div className="mx-auto mt-3 grid max-w-7xl grid-cols-2 gap-2">
            <a href={SITE_CONFIG.phoneUri} className={cn(buttonVariants({ size: "sm" }), "bg-teal-800 text-white hover:bg-teal-900")} data-testid="mobile-menu-call-button"><Phone className="size-4" /> Call Now</a>
            <a href={SITE_CONFIG.whatsappUri} className={cn(buttonVariants({ size: "sm" }), "bg-emerald-600 text-white hover:bg-emerald-700")} data-testid="mobile-menu-whatsapp-button"><MessageCircle className="size-4" /> WhatsApp</a>
          </div>
        </div>
      )}
    </header>
  );
}

export function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-slate-200 bg-white/95 p-2 shadow-[0_-4px_16px_rgba(15,41,47,0.08)] backdrop-blur md:hidden" data-testid="mobile-action-bar">
      <a href={SITE_CONFIG.phoneUri} className="flex min-h-12 items-center justify-center gap-2 rounded-lg bg-teal-800 px-4 text-sm font-bold text-white active:bg-teal-900" data-testid="sticky-call-button"><Phone className="size-4" /> Call Now</a>
      <a href={SITE_CONFIG.whatsappUri} className="flex min-h-12 items-center justify-center gap-2 rounded-lg bg-emerald-600 px-4 text-sm font-bold text-white active:bg-emerald-700" data-testid="sticky-whatsapp-button"><MessageCircle className="size-4" /> WhatsApp</a>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-20 bg-[#0f292f] pb-24 text-slate-200 md:pb-8" data-testid="site-footer">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-xl bg-amber-500 text-[#0f292f]"><Wrench className="size-5" /></span>
            <p className="font-heading text-lg font-extrabold text-white" data-testid="footer-business-name">{SITE_CONFIG.name}</p>
          </div>
          <p className="mt-4 max-w-md text-sm leading-6 text-slate-300" data-testid="footer-description">Practical AC, water tanker, geyser and heater services for homes, societies and businesses across Noida.</p>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-amber-400" data-testid="footer-services-label">Services</p>
          <div className="mt-4 flex flex-col gap-2 text-sm">
            <Link to="/ac-services" className="text-slate-300 hover:text-white" data-testid="footer-ac-services-link">AC repair & installation</Link>
            <Link to="/water-tanker-noida" className="text-slate-300 hover:text-white" data-testid="footer-water-tanker-link">Water tanker in Noida</Link>
            <Link to="/geyser-heater-repair" className="text-slate-300 hover:text-white" data-testid="footer-heater-link">Geyser & heater repair</Link>
          </div>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-amber-400" data-testid="footer-contact-label">Contact</p>
          <div className="mt-4 space-y-3 text-sm">
            <a href={SITE_CONFIG.phoneUri} className="flex items-center gap-2 text-slate-300 hover:text-white" data-testid="footer-call-link"><Phone className="size-4" /> {SITE_CONFIG.phone}</a>
            <a href={SITE_CONFIG.whatsappUri} className="flex items-center gap-2 text-slate-300 hover:text-white" data-testid="footer-whatsapp-link"><MessageCircle className="size-4" /> {SITE_CONFIG.whatsapp}</a>
            <p className="text-slate-400" data-testid="footer-address">{SITE_CONFIG.address}</p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-slate-400" data-testid="footer-copyright">© {new Date().getFullYear()} {SITE_CONFIG.name}. Serving Noida, Uttar Pradesh.</div>
    </footer>
  );
}

export function PageLayout({ children }: SiteLayoutProps) {
  return <div className="min-h-screen bg-[#fbfaf7] text-slate-900"><SiteHeader /><main>{children}</main><SiteFooter /><MobileActionBar /></div>;
}

export function ActionButtons({ source }: { source: string }) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row" data-testid={`${source}-action-buttons`}>
      <a href={SITE_CONFIG.phoneUri} className={cn(buttonVariants({ size: "lg" }), "bg-amber-500 text-slate-950 shadow-sm hover:bg-amber-400")} data-testid={`${source}-call-button`}><Phone className="size-5" /> Call Now</a>
      <a href={SITE_CONFIG.whatsappUri} className={cn(buttonVariants({ variant: "outline", size: "lg" }), "border-emerald-600 text-emerald-700 hover:bg-emerald-50")} data-testid={`${source}-whatsapp-button`}><MessageCircle className="size-5" /> Get service on WhatsApp</a>
    </div>
  );
}

export function SectionHeading({ eyebrow, title, text, align = "left" }: { eyebrow: string; title: string; text?: string; align?: "left" | "center" }) {
  const slug = title.toLowerCase().replaceAll(" ", "-").replaceAll("&", "and").replaceAll("?", "");
  return <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center")} data-testid={`section-heading-${slug}`}><p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-800" data-testid={`section-eyebrow-${slug}`}>{eyebrow}</p><h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl" data-testid={`section-title-${slug}`}>{title}</h2>{text && <p className="mt-4 text-base leading-7 text-slate-600" data-testid={`section-description-${slug}`}>{text}</p>}</div>;
}

export function PageIntro({ eyebrow, title, text, image, imageAlt, source }: { eyebrow: string; title: string; text: string; image: string; imageAlt: string; source: string }) {
  return <section className="border-b border-slate-200 bg-[#f1f5f3]" data-testid={`${source}-page-intro`}><div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1fr_0.8fr] md:items-center md:py-20 lg:px-8"><div><p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-800" data-testid={`${source}-intro-eyebrow`}>{eyebrow}</p><h1 className="mt-4 max-w-3xl font-heading text-4xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-5xl" data-testid={`${source}-page-h1`}>{title}</h1><p className="mt-5 max-w-2xl text-base leading-7 text-slate-600" data-testid={`${source}-intro-copy`}>{text}</p><div className="mt-7"><ActionButtons source={source} /></div></div><div className="relative"><img src={image} alt={imageAlt} width="900" height="650" loading="eager" className="aspect-[4/3] w-full rounded-2xl object-cover" data-testid={`${source}-intro-image`} /><div className="absolute -bottom-4 left-4 max-w-[230px] border border-slate-200 bg-white p-4 shadow-sm" data-testid={`${source}-intro-note`}><p className="text-sm font-bold text-slate-900">Local service for Noida</p><p className="mt-1 text-xs leading-5 text-slate-600">Call or WhatsApp with your requirement and location.</p></div></div></div></section>;
}

export function ServiceCard({ title, text, items, image, imageAlt, href, source }: { title: string; text: string; items: string[]; image: string; imageAlt: string; href: string; source: string }) {
  return <article className="group overflow-hidden border border-slate-200 bg-white" data-testid={`${source}-service-card`}><img src={image} alt={imageAlt} width="800" height="520" loading="lazy" className="aspect-[16/9] w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]" data-testid={`${source}-service-image`} /><div className="p-6"><h3 className="font-heading text-xl font-bold text-slate-950" data-testid={`${source}-service-title`}>{title}</h3><p className="mt-3 text-sm leading-6 text-slate-600" data-testid={`${source}-service-description`}>{text}</p><ul className="mt-4 grid gap-2 text-sm text-slate-700" data-testid={`${source}-service-list`}>{items.map((item) => <li key={item} className="flex items-start gap-2" data-testid={`${source}-service-item-${item.toLowerCase().replaceAll(" ", "-").replaceAll("/", "-")}`}><span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-amber-500" aria-hidden="true" />{item}</li>)}</ul><Link to={href} className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-teal-800 hover:text-teal-950" data-testid={`${source}-service-link`}>View service details <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></Link></div></article>;
}

export function FaqList({ items, source }: { items: { question: string; answer: string }[]; source: string }) {
  return <div className="divide-y divide-slate-200 border-y border-slate-200" data-testid={`${source}-faq-list`}>{items.map((item, index) => <details key={item.question} className="group py-5" data-testid={`${source}-faq-${index + 1}`}><summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left font-heading text-base font-bold text-slate-900 marker:hidden" data-testid={`${source}-faq-question-${index + 1}`}>{item.question}<span className="text-xl font-normal text-teal-800 transition-transform group-open:rotate-45" aria-hidden="true">+</span></summary><p className="max-w-3xl pt-3 text-sm leading-6 text-slate-600" data-testid={`${source}-faq-answer-${index + 1}`}>{item.answer}</p></details>)}</div>;
}