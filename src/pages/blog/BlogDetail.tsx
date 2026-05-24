import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowUpRight,
  CalendarDays,
  ChevronRight,
  Clock,
  UserRound,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { FeasibilityModal } from "../../components/FeasibilityModal";
import { blogs, type BlogPost, type BlogContentBlock } from "../../data/blogs";

function ArticleCover({ post }: { post: BlogPost }) {
  return (
    <div className="relative min-h-[260px] overflow-hidden rounded-[32px] border border-white/70 bg-neutral-100 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.25)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(242,221,52,0.44),transparent_32%),radial-gradient(circle_at_78%_68%,rgba(255,255,255,0.78),transparent_34%)]" />
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-neutral-900/20 to-transparent" />
      <div className="absolute left-6 top-6 rounded-full border border-white/70 bg-white/80 px-4 py-2 text-[10px] font-black uppercase tracking-wider text-neutral-700 backdrop-blur-xl">
        {post.category}
      </div>
      <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4">
        <div className="space-y-3">
          <div className="h-2 w-40 max-w-[50vw] rounded-full bg-white/80" />
          <div className="h-2 w-28 rounded-full bg-white/60" />
        </div>
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary-500 text-neutral-950 shadow-lg">
          <Zap className="h-6 w-6" />
        </div>
      </div>
    </div>
  );
}

function ContentBlock({ block }: { key?: string; block: BlogContentBlock }) {
  if (block.type === "heading") {
    return (
      <h2 className="pt-5 text-2xl md:text-3xl font-extrabold tracking-tight text-neutral-900">
        {block.text}
      </h2>
    );
  }

  if (block.type === "bullets") {
    return (
      <ul className="space-y-3">
        {block.items.map((item) => (
          <li key={item} className="flex gap-3 text-[15px] leading-8 text-neutral-600">
            <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-primary-500" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    );
  }

  return <p className="text-[15px] leading-8 text-neutral-600">{block.text}</p>;
}

export default function BlogDetail() {
  const { slug } = useParams();
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);

  const post = blogs.find((blog) => blog.slug === slug);

  const relatedPosts = useMemo(() => {
    if (!post) {
      return [];
    }

    return blogs
      .filter((blog) => blog.slug !== post.slug)
      .slice(0, 3);
  }, [post]);

  useEffect(() => {
    if (!post) {
      document.title = "Blog Post Not Found | EbeeCharge";
      return;
    }

    document.title = post.seo.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", post.seo.description);
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", post.seo.title);
    document.querySelector('meta[property="og:description"]')?.setAttribute("content", post.seo.description);
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-screen bg-transparent text-neutral-800 flex flex-col font-body selection:bg-primary-500 selection:text-neutral-900">
        <Header onRequestAudit={() => setIsAuditModalOpen(true)} />
        <main className="flex-1 py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-[11px] font-black uppercase tracking-wider text-primary-600">
              Blog
            </p>
            <h1 className="mt-3 text-4xl font-black text-neutral-900 tracking-tight font-display">
              Article not found.
            </h1>
            <Link
              to="/blog"
              className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-neutral-950 px-6 py-4 text-[12px] font-black uppercase tracking-wider text-primary-500"
            >
              Back to Blog
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </main>
        <Footer onRequestAudit={() => setIsAuditModalOpen(true)} />
        <FeasibilityModal
          isOpen={isAuditModalOpen}
          onClose={() => setIsAuditModalOpen(false)}
          initialPropertyName=""
          initialEmail=""
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-transparent text-neutral-800 flex flex-col font-body selection:bg-primary-500 selection:text-neutral-900">
      <Header onRequestAudit={() => setIsAuditModalOpen(true)} />

      <main className="flex-1">
        <section className="relative overflow-hidden pt-14 pb-14 lg:pt-20 lg:pb-20 border-b border-neutral-300 bg-transparent">
          <div className="absolute top-0 left-0 w-full h-[640px] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(242,221,52,0.16),rgba(255,255,255,0))] pointer-events-none z-0" />
          <div className="absolute top-1/4 left-1/4 w-[540px] h-[540px] bg-primary-300/20 blur-[140px] rounded-full pointer-events-none mix-blend-multiply z-0" />
          <div className="absolute bottom-0 right-1/4 w-[620px] h-[620px] bg-primary-200/30 blur-[150px] rounded-full pointer-events-none mix-blend-multiply z-0" />

          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <Link
              to="/blog"
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/70 px-4 py-2 text-[11px] font-black uppercase tracking-wider text-neutral-700 shadow-sm backdrop-blur-xl transition-all hover:-translate-y-0.5 hover:bg-white"
            >
              <ArrowLeft className="h-4 w-4 text-primary-600" />
              Back to Blog
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div className="inline-flex rounded-full bg-primary-100 px-4 py-2 text-[11px] font-black uppercase tracking-wider text-primary-600">
                {post.category}
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-[4.5rem] font-black text-neutral-900 tracking-tight leading-[1.05] font-display drop-shadow-sm">
                {post.title}
              </h1>

              <p className="text-neutral-600 text-lg sm:text-xl leading-relaxed max-w-3xl font-medium">
                {post.subtitle}
              </p>

              <div className="flex flex-wrap items-center gap-x-5 gap-y-3 text-[12px] font-bold text-neutral-500">
                <span className="inline-flex items-center gap-1.5">
                  <UserRound className="h-4 w-4" />
                  {post.author}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CalendarDays className="h-4 w-4" />
                  {post.date}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="h-4 w-4" />
                  {post.readTime}
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="mt-10"
            >
              <ArticleCover post={post} />
            </motion.div>
          </div>
        </section>

        <article className="py-16 bg-white border-b border-neutral-200/50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-6">
              {post.content.map((block, index) => (
                <ContentBlock key={`${block.type}-${index}`} block={block} />
              ))}
            </div>

            <div className="mt-12 rounded-2xl border border-neutral-200/60 bg-neutral-50 p-6">
              <p className="text-[11px] font-black uppercase tracking-wider text-primary-600">
                Author
              </p>
              <h2 className="mt-2 text-lg font-extrabold text-neutral-900">
                {post.author}
              </h2>
              <p className="mt-2 text-[13px] leading-relaxed text-neutral-500">
                EbeeCharge editorial contributor covering EV infrastructure,
                energy policy, and practical charging adoption in Indian properties.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1.5 text-[10px] font-bold text-neutral-500"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </article>

        <section className="py-20 bg-neutral-50 border-b border-neutral-200/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-[11px] font-black uppercase tracking-wider text-primary-600">
                  Related Posts
                </p>
                <h2 className="mt-3 text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-900">
                  Keep reading.
                </h2>
              </div>
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-[12px] font-black uppercase tracking-wider text-primary-600"
              >
                View All
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((related, index) => (
                <motion.article
                  key={related.slug}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="group rounded-2xl border border-neutral-200/60 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary-300 hover:shadow-xl hover:shadow-neutral-300/30"
                >
                  <span className="rounded-full bg-neutral-100 px-3 py-1.5 text-[10px] font-black uppercase tracking-wider text-primary-600">
                    {related.category}
                  </span>
                  <h3 className="mt-5 text-base font-extrabold leading-tight text-neutral-900">
                    {related.title}
                  </h3>
                  <p className="mt-3 text-[13px] leading-relaxed text-neutral-500">
                    {related.excerpt}
                  </p>
                  <Link
                    to={`/blog/${related.slug}`}
                    className="mt-6 inline-flex items-center gap-2 text-[12px] font-black uppercase tracking-wider text-primary-600"
                  >
                    Read More
                    <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-r from-primary-500 via-primary-400 to-primary-500 border-b border-primary-600/30 font-body relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          </div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-950 mb-4">
              Book a Free Site Audit
            </h2>
            <p className="text-neutral-900 text-lg mb-8 max-w-2xl mx-auto font-medium">
              Translate the thinking into your property plan with a feasibility
              review of parking layout, sanctioned load, billing, and Smart DB fit.
            </p>

            <motion.button
              type="button"
              onClick={() => setIsAuditModalOpen(true)}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-12 py-5 bg-neutral-950 text-primary-500 font-black text-[14px] rounded-2xl tracking-wider uppercase transition-all duration-300 shadow-[0_15px_35px_-10px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.4)] inline-flex items-center justify-center gap-3 leading-none overflow-hidden border border-neutral-800"
            >
              <div className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
              Book Audit
              <Zap className="w-5 h-5 stroke-[3] group-hover:scale-110 transition-transform" />
            </motion.button>
          </div>
        </section>
      </main>

      <Footer onRequestAudit={() => setIsAuditModalOpen(true)} />

      <FeasibilityModal
        isOpen={isAuditModalOpen}
        onClose={() => setIsAuditModalOpen(false)}
        initialPropertyName=""
        initialEmail=""
      />
    </div>
  );
}
