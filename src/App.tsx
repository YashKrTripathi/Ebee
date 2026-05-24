import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NetworkChargingMap from "./pages/NetworkChargingMap";
import Resources from "./pages/Resources";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/blog/BlogDetail";
import AboutUs from "./pages/AboutUs";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/network" element={<NetworkChargingMap />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/resources/ev-guides" element={<Resources />} />
      <Route path="/resources/faq" element={<Resources />} />
      <Route path="/faq" element={<Resources />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<BlogDetail />} />
      <Route path="/about-us" element={<AboutUs />} />
    </Routes>
  );
}
