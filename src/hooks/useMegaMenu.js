import { useEffect, useState } from "react";

export function useMegaMenu() {
  const [activeMenu, setActiveMenu] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setActiveMenu("");
        setMobileOpen(false);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return {
    activeMenu,
    mobileOpen,
    openMenu: setActiveMenu,
    closeMenu: () => setActiveMenu(""),
    toggleMenu: (menu) => setActiveMenu((current) => (current === menu ? "" : menu)),
    toggleMobile: () => setMobileOpen((current) => !current),
  };
}
