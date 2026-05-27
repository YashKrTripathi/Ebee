
import { useState } from "react";
import { Search, X } from "lucide-react";
import { motion } from "motion/react";
import { blogs as allBlogs, type BlogPost } from "../data/blogs";
interface BlogSearchProps {
  blogs: BlogPost[];
  onSearch: (results: BlogPost[]) => void;
}
export function BlogSearch({
  blogs,
  onSearch
}: BlogSearchProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [resultCount, setResultCount] = useState(blogs.length);
  const [hasSearched, setHasSearched] = useState(false);
  const runSearch = () => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) {
      setResultCount(blogs.length);
      setHasSearched(false);
      onSearch(blogs);
      return;
    }
    const filtered = blogs.filter(blog => [blog.title, blog.subtitle, blog.category, blog.author, ...blog.tags].join(" ").toLowerCase().includes(query));
    setResultCount(filtered.length);
    setHasSearched(true);
    onSearch(filtered);
  };
  const clearSearch = () => {
    setSearchQuery("");
    setResultCount(allBlogs.length);
    setHasSearched(false);
    onSearch(allBlogs);
  };
  return <form onSubmit={event => {
    event.preventDefault();
    runSearch();
  }} className="w-full">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="relative flex flex-1 items-center gap-3 border border-neutral-200 bg-white px-4 py-3 shadow-sm transition-all focus-within:border-primary-400 focus-within:ring-4 focus-within:ring-primary-500/15">
          <Search className="h-5 w-5 shrink-0 text-neutral-400" />
          <label className="sr-only" htmlFor="blog-search">
            Search blog posts
          </label>
          <input id="blog-search" type="text" value={searchQuery} onChange={event => setSearchQuery(event.target.value)} placeholder="Search ethanol, Smart DB, housing society, UPI, solar..." className="min-w-0 flex-1 border-none bg-transparent text-sm font-semibold text-neutral-900 outline-none placeholder:text-neutral-400" />

          {searchQuery && <button type="button" onClick={clearSearch} aria-label="Clear search" className="shrink-0 rounded-full p-1.5 text-neutral-500 transition-colors hover:bg-neutral-100 hover:text-neutral-900">
              <X className="h-4 w-4" />
            </button>}
        </div>

        <motion.button type="submit" whileHover={{
        scale: 1.02,
        y: -1
      }} whileTap={{
        scale: 0.98
      }} className="group relative inline-flex items-center justify-center gap-2 overflow-hidden bg-neutral-950 px-7 py-4 text-[12px] font-black uppercase tracking-wider text-primary-500 transition-all duration-300 hover:-translate-y-0.5 sm:w-auto">
          <span className="absolute inset-0 w-[200%] bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
          <span className="relative">Search</span>
          <Search className="relative h-4 w-4" />
        </motion.button>
      </div>

      {hasSearched && <motion.p initial={{
      opacity: 0,
      y: -6
    }} animate={{
      opacity: 1,
      y: 0
    }} className="mt-3 px-1 text-[12px] font-semibold text-neutral-500">
          Found {resultCount} {resultCount === 1 ? "article" : "articles"} matching "{searchQuery.trim()}"
        </motion.p>}
    </form>;
}