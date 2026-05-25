import Shuffle from "../components/ui/Shuffle";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, BookOpen, CalendarDays, ChevronRight, Clock, Search, Sparkles, UserRound, Zap } from "lucide-react";
import { motion } from "motion/react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { FeasibilityModal } from "../components/FeasibilityModal";
import { BlogSearch } from "../components/BlogSearch";
import { blogs, type BlogPost } from "../data/blogs";
import DecryptedText from "../components/ui/DecryptedText";
function BlogCover({
  post
}: {
  post: BlogPost;
}) {
  const themeLabel = {
    water: "Water x Energy",
    building: "Society Infrastructure",
    solar: "Solar Transition",
    charging: "Smart DB Flow"
  }[post.coverTheme];
  return <div className="relative h-48 lg:h-56 w-full flex-shrink-0 overflow-hidden border border-white/70 bg-neutral-100">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(242,221,52,0.42),transparent_34%),radial-gradient(circle_at_78%_70%,rgba(255,255,255,0.72),transparent_34%)]" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-neutral-900/15 to-transparent" />
      <div className="absolute left-5 top-5 inline-flex items-center gap-2 border border-white/70 bg-white/80 px-3 py-1.5 text-[10px] font-black uppercase tracking-wider text-neutral-700 backdrop-blur-xl">
        <Sparkles className="h-3.5 w-3.5 text-primary-600" />
        {themeLabel}
      </div>
      <div className="absolute bottom-5 left-5 right-5">
        <div className="flex items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="h-2 w-24 rounded-full bg-white/80" />
            <div className="h-2 w-16 rounded-full bg-white/60" />
          </div>
          <div className="flex h-12 w-12 items-center justify-center bg-primary-500 text-neutral-950 shadow-lg">
            <Zap className="h-5 w-5" />
          </div>
        </div>
      </div>
    </div>;
}
function BlogCard({
  post,
  index
}: {
  key?: string;
  post: BlogPost;
  index: number;
}) {
  return <motion.article initial={{
    opacity: 0,
    y: 18
  }} whileInView={{
    opacity: 1,
    y: 0
  }} transition={{
    delay: index * 0.05
  }} viewport={{
    once: true
  }} className="group flex h-[36.25rem] md:h-[37.5rem] lg:h-[38rem] flex-col border border-neutral-200/60 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary-300 hover:shadow-xl hover:shadow-neutral-300/30">
      <BlogCover post={post} />

      <div className="flex min-w-0 flex-grow flex-col gap-4 p-2 pt-5">
        <span className="w-fit bg-neutral-100 px-3 py-1.5 text-[10px] font-black uppercase tracking-wider text-primary-600">
          {post.category}
        </span>

        <h2 className="min-h-[3.5rem] line-clamp-2 text-xl font-extrabold leading-tight text-neutral-900">
          <Link to={`/blog/${post.slug}`} className="outline-none hover:text-primary-600">
            {post.title}
          </Link>
        </h2>

        <p className="min-h-[4.75rem] line-clamp-3 text-[13px] leading-relaxed text-neutral-500">
          {post.subtitle}
        </p>

        <div className="flex min-h-[2.5rem] flex-wrap items-start gap-2">
          {post.tags.slice(0, 3).map(tag => <span key={tag} className="border border-neutral-200 bg-neutral-50 px-3 py-1 text-[10px] font-bold text-neutral-500">
              {tag}
            </span>)}
          {post.tags.length > 3 && <span className="px-1 py-1 text-[10px] font-bold text-neutral-500">
              +{post.tags.length - 3} more
            </span>}
        </div>

        <div className="flex-grow" />

        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-neutral-200 pt-4 text-[11px] font-bold text-neutral-500">
          <span className="inline-flex items-center gap-1.5">
            <UserRound className="h-3.5 w-3.5" />
            {post.author}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <CalendarDays className="h-3.5 w-3.5" />
            {post.date}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" />
            {post.readTime}
          </span>
        </div>

        <Link to={`/blog/${post.slug}`} className="group/link relative mt-auto inline-flex w-full items-center justify-center gap-2 overflow-hidden bg-neutral-950 px-5 py-3 text-[12px] font-black uppercase tracking-wider text-primary-500 transition-all duration-300 hover:-translate-y-0.5 sm:w-fit">
          <span className="absolute inset-0 w-[200%] bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/link:animate-[shimmer_1.5s_infinite]" />
          <span className="relative"><Shuffle text="Read More" shuffleDirection="right" duration={0.35} shuffleTimes={1} ease="power3.out" stagger={0.03} triggerOnHover={true} loop={false} loopDelay={0} tag="span" /></span>
          <ChevronRight className="relative h-4 w-4 stroke-[3] transition-transform group-hover/link:translate-x-1" />
        </Link>
      </div>
    </motion.article>;
}
export default function Blog() {
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);
  const [displayedBlogs, setDisplayedBlogs] = useState(blogs);
  useEffect(() => {
    const title = "EbeeCharge Blog | EV Charging, Energy Policy and Smart DB Insights";
    const description = "Read EbeeCharge insights on EV charging infrastructure, ethanol policy, housing society mandates, Smart DB systems, UPI charging, and India's electric mobility transition.";
    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", description);
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", title);
    document.querySelector('meta[property="og:description"]')?.setAttribute("content", description);
  }, []);
  return <div className="min-h-screen bg-transparent text-neutral-800 flex flex-col font-body selection:bg-primary-500 selection:text-neutral-900">
      <Header onRequestAudit={() => setIsAuditModalOpen(true)} />

      <main className="flex-1">
        <section className="relative overflow-hidden pt-14 pb-16 lg:pt-20 lg:pb-24 border-b border-neutral-300 bg-transparent">
          <div className="absolute top-0 left-0 w-full h-[640px] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(242,221,52,0.16),rgba(255,255,255,0))] pointer-events-none z-0" />
          <div className="absolute top-1/4 left-1/4 w-[540px] h-[540px] bg-primary-300/20 blur-[140px] rounded-full pointer-events-none mix-blend-multiply z-0" />
          <div className="absolute bottom-0 right-1/4 w-[620px] h-[620px] bg-primary-200/30 blur-[150px] rounded-full pointer-events-none mix-blend-multiply z-0" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
              <motion.div initial={{
              opacity: 0,
              y: 18
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.5
            }} className="lg:col-span-7 space-y-6 text-left sm:text-center lg:text-left sm:max-w-3xl sm:mx-auto lg:mx-0">
                <div className="inline-flex items-center gap-2 border border-white/60 bg-white/70 px-4 py-2 text-[11px] font-black uppercase tracking-wider text-neutral-700 shadow-sm backdrop-blur-xl">
                  <BookOpen className="h-4 w-4 text-primary-600" />
                  Blog
                </div>

                <h1 className="text-4xl sm:text-6xl lg:text-[4.5rem] font-black text-neutral-900 tracking-tight leading-[1.05] font-display drop-shadow-sm">
                  <DecryptedText text="EbeeCharge" animateOn="view" clickMode="once" revealDirection="start" speed={60} maxIterations={10} sequential={true} useOriginalCharsOnly={false} />
                  <br className="hidden sm:block" /> <DecryptedText text="Blog for" animateOn="view" clickMode="once" revealDirection="start" speed={60} maxIterations={10} sequential={true} useOriginalCharsOnly={false} />{" "}
                  <span className="text-primary-600 relative inline-block drop-shadow-sm">
                    <DecryptedText text="Smarter EV Decisions." animateOn="view" clickMode="once" revealDirection="start" speed={60} maxIterations={10} sequential={true} useOriginalCharsOnly={false} />
                  </span>
                </h1>

                <p className="text-neutral-600 text-lg sm:text-xl leading-relaxed max-w-2xl font-medium sm:mx-auto lg:mx-0">
                  Field notes on EV charging infrastructure, Smart DB systems,
                  UPI-native billing, energy policy, and the choices shaping
                  India's electric mobility transition.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-2 sm:items-center sm:justify-center lg:justify-start">
                  <motion.a href="#blog-grid" whileHover={{
                  scale: 1.02,
                  y: -2
                }} whileTap={{
                  scale: 0.98
                }} className="group relative px-8 py-5 bg-gradient-to-r from-primary-400 to-primary-500 text-neutral-950 font-black text-[14px] tracking-wider uppercase transition-all duration-300 shadow-[0_15px_35px_-10px_rgba(242,221,52,0.6),inset_0_2px_0_rgba(255,255,255,0.4)] hover:shadow-[0_20px_40px_-10px_rgba(242,221,52,0.8),inset_0_2px_0_rgba(255,255,255,0.6)] flex items-center justify-center gap-3 leading-none overflow-hidden border border-primary-300/50">
                    <div className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                    <Shuffle text="Read Latest Posts" shuffleDirection="right" duration={0.35} shuffleTimes={1} ease="power3.out" stagger={0.03} triggerOnHover={true} loop={false} loopDelay={0} tag="span" />
                    <ChevronRight className="w-5 h-5 stroke-[3] group-hover:translate-x-1 transition-transform drop-shadow-sm" />
                  </motion.a>

                  <Link to="/resources" className="inline-flex items-center justify-center gap-2 px-8 py-5 border border-neutral-300 bg-white/75 text-neutral-900 text-[14px] font-black uppercase tracking-wider shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:bg-white">
                    <Shuffle text="Resources" shuffleDirection="right" duration={0.35} shuffleTimes={1} ease="power3.out" stagger={0.03} triggerOnHover={true} loop={false} loopDelay={0} tag="span" />
                    <ArrowUpRight className="w-4 h-4 stroke-[3]" />
                  </Link>
                </div>
              </motion.div>

              <motion.div initial={{
              opacity: 0,
              y: 24
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.55,
              delay: 0.1
            }} className="lg:col-span-5">
                <div className="relative -[32px] border border-white/70 bg-white/80 p-4 sm:p-5 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.25)] backdrop-blur-xl">
                  <div className="absolute -inset-8 -[42px] bg-primary-500/10 blur-3xl pointer-events-none" />
                  <div className="relative space-y-3">
                    {blogs.filter(post => post.featured).map((post, index) => <Link key={post.slug} to={`/blog/${post.slug}`} className="block border border-neutral-200/70 bg-neutral-200/70 p-4 transition-all duration-300 hover:border-primary-300 hover:bg-white">
                          <motion.div initial={{
                      opacity: 0,
                      x: 16
                    }} animate={{
                      opacity: 1,
                      x: 0
                    }} transition={{
                      delay: 0.2 + index * 0.08
                    }}>
                            <div className="flex items-start justify-between gap-4">
                              <div>
                                <p className="text-[10px] font-black uppercase tracking-wider text-primary-600">
                                  Featured
                                </p>
                                <h2 className="mt-2 text-sm font-extrabold leading-snug text-neutral-900">
                                  {post.title}
                                </h2>
                              </div>
                              <span className="shrink-0 bg-white px-2.5 py-1 text-[10px] font-bold text-neutral-500">
                                {post.readTime}
                              </span>
                            </div>
                            <p className="mt-3 text-[12px] leading-relaxed text-neutral-500">
                              {post.excerpt}
                            </p>
                          </motion.div>
                        </Link>)}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-neutral-50 border-b border-neutral-200/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <BlogSearch blogs={blogs} onSearch={setDisplayedBlogs} />
          </div>
        </section>

        <section id="blog-grid" className="py-16 lg:py-24 bg-white border-b border-neutral-200/50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-[11px] font-black uppercase tracking-wider text-primary-600">
                  Latest Thinking
                </p>
                <h2 className="mt-3 text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-900">
                  Blogs for practical EV infrastructure decisions.
                </h2>
              </div>
              <p className="text-sm font-semibold text-neutral-500">
                {displayedBlogs.length} posts shown
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {displayedBlogs.map((post, index) => <BlogCard key={post.slug} post={post} index={index} />)}
            </div>

            {displayedBlogs.length === 0 && <div className="border border-neutral-200 bg-neutral-50 p-10 text-center">
                <Search className="mx-auto mb-4 h-10 w-10 text-neutral-300" />
                <p className="text-sm font-bold text-neutral-700">No blog posts matched your search.</p>
                <p className="mt-2 text-[12px] text-neutral-500">
                  Try searching for ethanol, Smart DB, UPI, RWA, or solar.
                </p>
                <button type="button" onClick={() => setDisplayedBlogs(blogs)} className="mt-5 text-[12px] font-black uppercase tracking-wider text-primary-600 hover:underline">
                  <Shuffle text="View All Articles" shuffleDirection="right" duration={0.35} shuffleTimes={1} ease="power3.out" stagger={0.03} triggerOnHover={true} loop={false} loopDelay={0} tag="span" />
                </button>
              </div>}
          </div>
        </section>
      </main>

      <Footer onRequestAudit={() => setIsAuditModalOpen(true)} />

      <FeasibilityModal isOpen={isAuditModalOpen} onClose={() => setIsAuditModalOpen(false)} initialPropertyName="" initialEmail="" />
    </div>;
}