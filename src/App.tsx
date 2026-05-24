import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Resources from "./pages/Resources";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/blog/BlogDetail";
import AboutUs from "./pages/AboutUs";
import { SolutionsPage } from "./pages/Solutions";
import { SoftwarePlatform } from "./pages/SoftwarePlatform";

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
      <Route path="/solutions" element={<SolutionsPage />} />
      <Route path="/software-platform" element={<SoftwarePlatform />} />
    </Routes>
  );
}
