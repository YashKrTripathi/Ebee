import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import type { MouseEvent } from "react";
import { ArrowUpRight, Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";


const navItems = [
  { 
    label: "Home", 
    href: "/",
    options: [
      { label: "Hero", href: "/#hero" },
      { label: "Why ebee", href: "/#why-ebee" },
      { label: "Signature Journey", href: "/#journey" },
      { label: "Live Stats", href: "/#live-stats" }
    ]
  },
  { 
    label: "Products", 
    href: "/#products",
    options: [
      { label: "Smart Node", href: "/#smart-node" },
      { label: "Centralized DB", href: "/#centralized-db" },
      { label: "Power Cables", href: "/#cables" }
    ]
  },
  { 
    label: "Solutions", 
    href: "/solutions",
    options: [
      { label: "Overview", href: "/solutions/overview" },
      { label: "Projects", href: "/solutions/projects" },
      { 
        label: "Roles", 
        href: "#",
        options: [
          { label: "For RWAs", href: "/solutions/rwa" },
          { label: "For Developers", href: "/solutions/developers" },
          { label: "For EV Users", href: "/solutions/users" }
        ]
      }
    ]
  },
  {
    label: "Software Platform",
    href: "/software-platform",
  },
  {
    label: "Resources",
    href: "/resources",
    options: [
      { label: "Blog", href: "/blog" },
      { label: "EV Guides", href: "/resources/ev-guides" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  { label: "About Us", href: "/about-us" },
  { label: "Case Studies", href: "/#case-studies" },
];

interface NavbarProps {
  onContactClick?: () => void;
}

interface HeaderProps {
  onRequestAudit: () => void;
}

export function Navbar({ onContactClick }: NavbarProps) {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
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

  const isNavItemActive = (item: (typeof navItems)[number]) => {
    if (item.label === "Resources") {
      return (
        location.pathname.startsWith("/blog") ||
        location.pathname.startsWith("/resources") ||
        location.pathname === "/faq"
      );
    }

    return location.pathname === item.href;
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

    
  };

  return (
    <header className="sticky top-0 z-40 w-full pt-4 sm:pt-6 font-body pointer-events-none">
      <div className="mx-auto max-w-[1500px] px-4 sm:px-6">
        
        {/* DESKTOP LAYOUT (xl and up) */}
        <div className="hidden xl:flex items-center justify-between pointer-events-auto">
          {/* LEFT: Logo Text */}
          <Link to="/" aria-label="ebee home" className="group flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5">
            <span className="text-3xl font-black text-neutral-900 tracking-tighter">ebee.</span>
          </Link>

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
                <Link
                  to={item.href}
                  onClick={(event) => {
                    if (item.options) {
                      event.preventDefault();
                      setHoveredNav((current) => (current === item.label ? null : item.label));
                      moveIndicator(index);
                    } else {
                      handleNavLinkClick(event as any, item.href);
                    }
                  }}
                  className={`group flex items-center gap-1 shrink-0 whitespace-nowrap rounded-full px-4 py-2 text-[13px] font-bold outline-none transition-colors duration-300 hover:text-neutral-900 ${
                    isNavItemActive(item) ? "text-primary-600" : "text-neutral-600"
                  }`}
                >
                  <span>{item.label}</span>
                  {item.options && (
                    <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${hoveredNav === item.label ? 'rotate-180' : ''}`} />
                  )}
                </Link>

                {/* Dropdown for sub-options */}
                {item.options && (
                  <AnimatePresence>
                    {hoveredNav === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-60 rounded-2xl bg-white/90 backdrop-blur-xl shadow-xl border border-neutral-200/60 p-2 z-50 flex flex-col gap-1"
                      >
                        {item.options.map((opt) => {
                          if ((opt as any).options) {
                            return (
                              <div key={opt.label} className="flex flex-col mt-1 mb-1">
                                <div className="px-4 py-1.5 text-[10px] font-bold text-neutral-400 uppercase tracking-wider">{opt.label}</div>
                                <div className="flex flex-col gap-0.5">
                                  {(opt as any).options.map((subOpt: any) => {
                                    const isActive = false;
                                    return (
                                      <Link
                                        key={subOpt.label}
                                        to={subOpt.href}
                                        onClick={(event) => handleNavLinkClick(event as any, subOpt.href)}
                                        className={`mx-2 px-4 py-2 text-sm font-semibold rounded-xl transition-colors ${
                                          isActive
                                            ? "bg-primary-500/15 text-primary-700"
                                            : "text-neutral-600 hover:bg-primary-500/10 hover:text-primary-600"
                                        }`}
                                      >
                                        {subOpt.label}
                                      </Link>
                                    );
                                  })}
                                </div>
                              </div>
                            );
                          }

                          const isActivePlatformOption = false;

                          return (
                            <Link
                              key={opt.label}
                              to={opt.href}
                              onClick={(event) => handleNavLinkClick(event as any, opt.href)}
                              className={`px-4 py-2 text-sm font-semibold rounded-xl transition-colors ${
                                isActivePlatformOption
                                  ? "bg-primary-500/15 text-primary-700"
                                  : "text-neutral-600 hover:bg-primary-500/10 hover:text-primary-600"
                              }`}
                            >
                              {opt.label}
                            </Link>
                          );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* RIGHT: Actions */}
          <div className="flex items-center gap-3">
            <Link
              to="/login"
              className="inline-flex items-center justify-center rounded-full border border-neutral-300 bg-white/75 px-6 py-3 text-[13px] font-bold tracking-wider text-neutral-900 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:bg-white active:scale-95 uppercase"
            >
              Login
            </Link>
            <button
              type="button"
              onClick={handleContactClick}
              className="group relative overflow-hidden rounded-full bg-neutral-900 px-6 py-3 text-[13px] font-bold text-primary-500 shadow-xl shadow-neutral-900/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-neutral-900/40 active:scale-95 inline-flex items-center gap-2 uppercase"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="relative tracking-wider">Contact</span>
              <ArrowUpRight className="relative h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>

        {/* MOBILE LAYOUT CAPSULE (hidden on xl and up) */}
        <div className="relative z-50 xl:hidden flex items-center justify-between bg-white/95 backdrop-blur-xl rounded-full pl-6 pr-3 py-3 shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-neutral-200 pointer-events-auto">
          <Link to="/" aria-label="ebee home" className="flex items-center">
            <span className="text-2xl font-black text-neutral-900 tracking-tighter">ebee.</span>
          </Link>
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
                <nav className="bg-[#15171A] rounded-3xl shadow-2xl border border-white/10 flex flex-col overflow-y-auto overflow-x-hidden pointer-events-auto min-h-0 flex-1 mb-4">
                  {navItems.map((item, index) => (
                    <div
                      key={item.label}
                      className={index !== navItems.length - 1 ? "border-b border-white/5" : ""}
                    >
                      <Link
                        to={item.href}
                        onClick={(event) => {
                          if (item.options) {
                            event.preventDefault();
                          } else {
                            setIsMenuOpen(false);
                            handleNavLinkClick(event as any, item.href);
                          }
                        }}
                        className={`px-6 py-5 text-xs sm:text-sm font-bold tracking-[0.15em] hover:text-white hover:bg-white/5 transition-colors flex items-center justify-between group ${
                          isNavItemActive(item) ? "text-primary-500" : "text-white/80"
                        }`}
                      >
                        <span className="uppercase">{item.label}</span>
                        <ChevronDown className="w-4 h-4 text-white/30 -rotate-90 group-hover:text-primary-500 transition-colors" />
                      </Link>

                      {item.options && (
                        <div className="border-t border-white/5 bg-white/[0.03] px-6 py-3">
                          <div className="flex flex-col gap-1 border-l border-primary-500/40 pl-4">
                            {item.options.map((opt) => {
                              if ((opt as any).options) {
                                return (
                                  <div key={opt.label} className="flex flex-col gap-1 mt-2 mb-1">
                                    <div className="py-1 text-[10px] font-bold text-white/40 uppercase tracking-[0.2em]">{opt.label}</div>
                                    <div className="flex flex-col gap-1 pl-3 border-l border-white/10">
                                      {(opt as any).options.map((subOpt: any) => {
                                        const isActive = false;
                                        return (
                                          <Link
                                            key={subOpt.label}
                                            to={subOpt.href}
                                            onClick={(event) => {
                                              setIsMenuOpen(false);
                                              handleNavLinkClick(event as any, subOpt.href);
                                            }}
                                            className={`py-2 text-[11px] font-bold uppercase tracking-[0.14em] transition-colors ${
                                              isActive
                                                ? "text-primary-500"
                                                : "text-white/60 hover:text-primary-500"
                                            }`}
                                          >
                                            {subOpt.label}
                                          </Link>
                                        );
                                      })}
                                    </div>
                                  </div>
                                );
                              }

                              const isActivePlatformOption = false;

                              return (
                                <Link
                                  key={opt.label}
                                  to={opt.href}
                                  onClick={(event) => {
                                    setIsMenuOpen(false);
                                    handleNavLinkClick(event as any, opt.href);
                                  }}
                                  className={`py-2 text-[11px] font-bold uppercase tracking-[0.14em] transition-colors ${
                                    isActivePlatformOption
                                      ? "text-primary-500"
                                      : "text-white/60 hover:text-primary-500"
                                  }`}
                                >
                                  {opt.label}
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </nav>
                
                {/* Pushes the button to the bottom */}
                <div className="mt-auto pointer-events-auto flex flex-col gap-3">
                  <Link
                    to="/login"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex w-full items-center justify-center rounded-full border border-white/20 bg-transparent px-6 py-4 text-sm font-black tracking-[0.15em] text-white transition-all duration-300 hover:bg-white/10 active:scale-[0.98]"
                  >
                    <span className="uppercase">LOGIN</span>
                  </Link>
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

