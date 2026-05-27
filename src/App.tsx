import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Resources from "./pages/Resources";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/blog/BlogDetail";
import AboutUs from "./pages/AboutUs";
import CaseStudies from "./pages/CaseStudies";

function getCurrentPage() {
  const pathname = window.location.pathname.replace(/\/$/, "");
  const hash = window.location.hash.toLowerCase();

  if (pathname === "/about-us" || hash === "#about-us") {
    return "about-us";
  }

  if (pathname === "/case-studies" || hash === "#case-studies") {
    return "case-studies";
  }

  return "home";
}

export default function App() {
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);
  const [isSimulatorModalOpen, setIsSimulatorModalOpen] = useState(false);
  const [modalPreloadName, setModalPreloadName] = useState("");
  const [modalPreloadEmail, setModalPreloadEmail] = useState("");
  const [currentPage, setCurrentPage] = useState(getCurrentPage);

  useEffect(() => {
    const handleRouteChange = () => setCurrentPage(getCurrentPage());

    window.addEventListener("hashchange", handleRouteChange);
    window.addEventListener("popstate", handleRouteChange);

    return () => {
      window.removeEventListener("hashchange", handleRouteChange);
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, []);

  const handleOpenGeneralAudit = () => {
    setModalPreloadName("");
    setModalPreloadEmail("");
    setIsAuditModalOpen(true);
  };

  const handleWatchDemo = () => {
    const el = document.getElementById("phone-mockup-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
      el.classList.add("ring-4", "ring-primary-500/80");
      setTimeout(() => {
        el.classList.remove("ring-4", "ring-primary-500/80");
      }, 1800);
    }
  };

  if (currentPage === "about-us") {
    return <AboutUs />;
  }

  if (currentPage === "case-studies") {
    return <CaseStudies />;
  }

import { SolutionsPage } from "./pages/Solutions";
import { SoftwarePlatform } from "./pages/SoftwarePlatform";

import { Projects } from "./pages/solutions/Projects";
import { RWA } from "./pages/solutions/RWA";
import { Developers } from "./pages/solutions/Developers";
import { Users } from "./pages/solutions/Users";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/resources/ev-guides" element={<Resources />} />
      <Route path="/resources/faq" element={<Resources />} />
      <Route path="/faq" element={<Resources />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<BlogDetail />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/solutions" element={<Navigate to="/solutions/overview" replace />} />
      <Route path="/solutions/overview" element={<SolutionsPage />} />
      <Route path="/solutions/projects" element={<Projects />} />
      <Route path="/solutions/rwa" element={<RWA />} />
      <Route path="/solutions/developers" element={<Developers />} />
      <Route path="/solutions/users" element={<Users />} />
      <Route path="/software-platform" element={<SoftwarePlatform />} />
    </Routes>
  );
}
