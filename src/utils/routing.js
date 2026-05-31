const ROUTE_ROOTS = new Set(["why-ebee", "savings-calculator", "products", "solutions"]);

export function getBasePath(pathname = window.location.pathname) {
  const segments = pathname.split("/").filter(Boolean);

  if (segments.length === 0) {
    return "";
  }

  if (ROUTE_ROOTS.has(segments[0])) {
    return "";
  }

  return `/${segments[0]}`;
}

export function getNormalizedPathname(pathname = window.location.pathname) {
  const basePath = getBasePath(pathname);
  const withoutBase = basePath && pathname.startsWith(basePath) ? pathname.slice(basePath.length) : pathname;
  return withoutBase.replace(/\/+$/, "") || "/";
}

export function withBase(href) {
  if (!href || /^(mailto:|tel:|https?:)/i.test(href)) {
    return href;
  }

  const basePath = getBasePath();

  if (href === "/") {
    return `${basePath || ""}/`;
  }

  if (href.startsWith("#")) {
    return `${basePath || ""}/${href}`;
  }

  if (href.startsWith("/")) {
    return `${basePath}${href}`;
  }

  return href;
}
