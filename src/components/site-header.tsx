import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV, RESTAURANTE } from "@/lib/odoya";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "bg-background/95 backdrop-blur border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 md:px-8">
        <a href="#topo" className="min-w-0" onClick={() => setOpen(false)}>
          <span
            className={`block truncate font-display text-2xl leading-none tracking-tight md:text-[1.7rem] ${
              scrolled || open ? "text-primary" : "text-background"
            }`}
          >
            Bistrô Odoyá
          </span>
          <span
            className={`mt-1 block text-[0.6rem] tracking-[0.3em] uppercase ${
              scrolled || open ? "text-muted-foreground" : "text-background/80"
            }`}
          >
            Maresias
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm transition-opacity hover:opacity-60 ${
                scrolled ? "text-foreground" : "text-background"
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href={RESTAURANTE.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className={`rounded-sm border px-5 py-2.5 text-sm transition-colors ${
              scrolled
                ? "border-primary bg-primary text-primary-foreground hover:bg-moss"
                : "border-background/70 text-background hover:bg-background hover:text-primary"
            }`}
          >
            Fale Conosco
          </a>
        </nav>

        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className={`inline-flex h-11 w-11 items-center justify-center rounded-sm lg:hidden ${
            scrolled || open ? "text-foreground" : "text-background"
          }`}
        >
          {open ? <Menu className="hidden" /> : null}
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden">
          <nav className="flex flex-col gap-1 border-t border-border bg-background px-5 pb-8 pt-4">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-border/60 py-4 font-display text-2xl text-foreground"
              >
                {item.label}
              </a>
            ))}
            <a
              href={RESTAURANTE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-5 inline-flex items-center justify-center rounded-sm bg-primary px-6 py-4 text-sm tracking-wide text-primary-foreground"
            >
              Fale Conosco pelo WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
