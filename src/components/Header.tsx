import { useEffect, useRef, useState } from "react";
import type { MouseEvent } from "react";
import { ArrowUpRight, Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { 
    label: "Home", 
    href: "#",
    options: [
      { label: "Hero", href: "#hero" },
      { label: "Why ebee", href: "#why-ebee" },
      { label: "Signature Journey", href: "#journey" },
      { label: "Live Stats", href: "#live-stats" }
    ]
  },
  { 
    label: "Products", 
    href: "#products",
    options: [
      { label: "Smart Node", href: "#smart-node" },
      { label: "Centralized DB", href: "#centralized-db" },
      { label: "Power Cables", href: "#cables" }
    ]
  },
  { 
    label: "Solutions", 
    href: "#solutions",
    options: [
      { label: "For RWAs", href: "#rwas" },
      { label: "For Developers", href: "#developers" },
      { label: "For Commercial", href: "#commercial" }
    ]
  },
  {
    label: "Software Platform",
    href: "/software-platform",
    options: [
      { label: "WhatsApp Integration", href: "/software-platform#whatsapp-integration" },
      { label: "UPI Payment System", href: "/software-platform#upi-payment-system" },
      { label: "Smart Dashboard", href: "/software-platform#smart-dashboard" },
    ]
  },
  { label: "Network", href: "#network" },
  { label: "Resources", href: "#resources" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "About Us", href: "#about-us" },
];

const softwarePlatformSectionIds = [
  "whatsapp-integration",
  "upi-payment-system",
  "smart-dashboard",
];

interface NavbarProps {
  onContactClick?: () => void;
}

interface HeaderProps {
  onRequestAudit: () => void;
}

export function Navbar({ onContactClick }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const [activePlatformSection, setActivePlatformSection] = useState<string | null>(null);
  const [indicator, setIndicator] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const moveIndicator = (index: number) => {
    const item = itemRefs.current[index];
    if (!item) return;

    setIndicator({
      left: item.offsetLeft,
      width: item.offsetWidth,
      opacity: 1,
    });
  };

  const handleContactClick = () => {
    setIsMenuOpen(false);
    onContactClick?.();
  };

  const scrollToTarget = (id: string) => {
    const target = document.getElementById(id);
    if (!target) return;

    const headerHeight = document.querySelector("header")?.getBoundingClientRect().height ?? 0;
    const targetTop = target.getBoundingClientRect().top + window.scrollY;
    const offset = headerHeight + 28;

    window.scrollTo({
      top: Math.max(targetTop - offset, 0),
      behavior: "smooth",
    });
  };

  const handleNavLinkClick = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    setIsMenuOpen(false);
    setHoveredNav(null);

    if (!href.startsWith("/software-platform#")) return;

    const id = href.split("#")[1];
    if (!id) return;

    if (window.location.pathname === "/software-platform") {
      event.preventDefault();
      window.history.pushState(null, "", href);
      window.setTimeout(() => scrollToTarget(id), 40);
      setActivePlatformSection(id);
    }
  };

  useEffect(() => {
    if (window.location.pathname !== "/software-platform") return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target.id) {
          setActivePlatformSection(visibleEntry.target.id);
        }
      },
      {
        root: null,
        rootMargin: "-28% 0px -48% 0px",
        threshold: [0.12, 0.28, 0.45, 0.65],
      }
    );

    softwarePlatformSectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    if (window.location.hash) {
      setActivePlatformSection(window.location.hash.replace("#", ""));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full pt-4 sm:pt-6 font-body pointer-events-none">
      <div className="mx-auto max-w-[1500px] px-4 sm:px-6">
        
        {/* DESKTOP LAYOUT (xl and up) */}
        <div className="hidden xl:flex items-center justify-between pointer-events-auto">
          {/* LEFT: Logo Text */}
          <a href="#" aria-label="ebee home" className="group flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5">
            <span className="text-3xl font-black text-neutral-900 tracking-tighter">ebee.</span>
          </a>

          {/* CENTER: macOS Dock Style Navbar */}
          <nav
            aria-label="Primary navigation"
            className="relative flex items-center justify-center rounded-[32px] border border-white/40 bg-white/70 backdrop-blur-xl p-1.5 shadow-[0_8px_30px_rgb(0,0,0,0.08)] ring-1 ring-black/5"
            onMouseLeave={() => {
              setIndicator((current) => ({ ...current, opacity: 0 }));
              setHoveredNav(null);
            }}
          >
            {/* Hover Pill Animation */}
            <span
              className="pointer-events-none absolute bottom-1.5 top-1.5 rounded-full bg-white shadow-sm border border-neutral-200 transition-all duration-300 ease-out z-0"
              style={{
                left: indicator.left,
                width: indicator.width,
                opacity: indicator.opacity,
              }}
            />

            {navItems.map((item, index) => (
              <div
                key={item.label}
                ref={(element) => {
                  itemRefs.current[index] = element;
                }}
                onMouseEnter={() => {
                  moveIndicator(index);
                  setHoveredNav(item.label);
                }}
                className="relative z-10"
              >
                <a
                  href={item.href}
                  onClick={(event) => handleNavLinkClick(event, item.href)}
                  className="group flex items-center gap-1 shrink-0 whitespace-nowrap rounded-full px-4 py-2 text-[13px] font-bold text-neutral-600 outline-none transition-colors duration-300 hover:text-neutral-900"
                >
                  <span>{item.label}</span>
                  {item.options && (
                    <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${hoveredNav === item.label ? 'rotate-180' : ''}`} />
                  )}
                </a>

                {/* Dropdown for sub-options */}
                {item.options && (
                  <AnimatePresence>
                    {hoveredNav === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-48 rounded-2xl bg-white/90 backdrop-blur-xl shadow-xl border border-neutral-200/60 p-2 z-50 flex flex-col gap-1"
                      >
                        {item.options.map((opt) => {
                          const isActivePlatformOption = opt.href.endsWith(`#${activePlatformSection}`);

                          return (
                            <a
                              key={opt.label}
                              href={opt.href}
                              onClick={(event) => handleNavLinkClick(event, opt.href)}
                              className={`px-4 py-2 text-sm font-semibold rounded-xl transition-colors ${
                                isActivePlatformOption
                                  ? "bg-primary-500/15 text-primary-700"
                                  : "text-neutral-600 hover:bg-primary-500/10 hover:text-primary-600"
                              }`}
                            >
                              {opt.label}
                            </a>
                          );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* RIGHT: Contact Button */}
          <button
            type="button"
            onClick={handleContactClick}
            className="group relative overflow-hidden rounded-full bg-neutral-900 px-6 py-3 text-sm font-bold text-primary-500 shadow-xl shadow-neutral-900/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-neutral-900/40 active:scale-95 inline-flex items-center gap-2"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <span className="relative tracking-wider">Contact</span>
            <ArrowUpRight className="relative h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </button>
        </div>

        {/* MOBILE LAYOUT CAPSULE (hidden on xl and up) */}
        <div className="relative z-50 xl:hidden flex items-center justify-between bg-white/95 backdrop-blur-xl rounded-full pl-6 pr-3 py-3 shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-neutral-200 pointer-events-auto">
          <a href="#" aria-label="ebee home" className="flex items-center">
            <span className="text-2xl font-black text-neutral-900 tracking-tighter">ebee.</span>
          </a>
          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100 text-neutral-900 transition-colors active:scale-95"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              {/* Full-screen dark blurred backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 z-30 bg-neutral-950/80 backdrop-blur-xl xl:hidden"
                onClick={() => setIsMenuOpen(false)}
              />
              
              {/* Menu Content */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="fixed top-[104px] left-4 right-4 bottom-8 z-40 xl:hidden pointer-events-none flex flex-col"
              >
                {/* Links Capsule */}
                <nav className="bg-[#15171A] rounded-3xl shadow-2xl border border-white/10 flex flex-col overflow-hidden pointer-events-auto">
                  {navItems.map((item, index) => (
                    <div key={item.label} className={index !== navItems.length - 1 ? 'border-b border-white/5' : ''}>
                      <a
                        href={item.href}
                        onClick={(event) => handleNavLinkClick(event, item.href)}
                        className="px-6 py-5 text-xs sm:text-sm font-bold tracking-[0.15em] text-white/80 hover:text-white hover:bg-white/5 transition-colors flex items-center justify-between group"
                      >
                        <span className="uppercase">{item.label}</span>
                        <ChevronDown className="w-4 h-4 text-white/30 -rotate-90 group-hover:text-primary-500 transition-colors" />
                      </a>

                      {item.label === "Software Platform" && item.options && (
                        <div className="grid grid-cols-1 gap-1 px-4 pb-4">
                          {item.options.map((opt) => {
                            const isActivePlatformOption = opt.href.endsWith(`#${activePlatformSection}`);

                            return (
                              <a
                                key={opt.label}
                                href={opt.href}
                                onClick={(event) => handleNavLinkClick(event, opt.href)}
                                className={`rounded-2xl px-4 py-3 text-[11px] font-black uppercase tracking-[0.12em] transition-colors ${
                                  isActivePlatformOption
                                    ? "bg-primary-500 text-neutral-950"
                                    : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-primary-500"
                                }`}
                              >
                                {opt.label}
                              </a>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  ))}
                </nav>
                
                {/* Pushes the button to the bottom */}
                <div className="mt-auto pointer-events-auto">
                  <button
                    type="button"
                    onClick={handleContactClick}
                    className="flex w-full items-center justify-between rounded-full bg-primary-500 px-6 py-5 text-sm font-black tracking-[0.15em] text-neutral-900 shadow-xl transition-all duration-300 active:scale-[0.98]"
                  >
                    <span className="uppercase">CONTACT US</span>
                    <div className="bg-neutral-900/10 rounded-full p-1.5">
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </button>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

export function Header({ onRequestAudit }: HeaderProps) {
  return <Navbar onContactClick={onRequestAudit} />;
}
