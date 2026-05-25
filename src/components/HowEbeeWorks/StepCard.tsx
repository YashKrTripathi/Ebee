import { motion } from "framer-motion";

interface StepCardProps {
  step: string;
  title: string;
  text: string;
  isActive: boolean;
}

export function StepCard({ step, title, text, isActive }: StepCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0.3, scale: 0.95 }}
      animate={{
        opacity: isActive ? 1 : 0.4,
        scale: isActive ? 1 : 0.95,
      }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`relative  border p-6 sm:p-8 backdrop-blur-xl transition-colors duration-500 ${
        isActive
          ? "border-primary-300/60 bg-white/95 shadow-[0_20px_60px_-15px_rgba(242,221,52,0.3)]"
          : "border-white/40 bg-white/50 shadow-none"
      }`}
    >
      {isActive && (
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(242,221,52,0.15),transparent)] pointer-events-none" />
      )}
      <div className="flex gap-4 sm:gap-6 relative z-10">
        <div
          className={`shrink-0 w-12 h-12 sm:w-14 sm:h-14  flex items-center justify-center text-sm sm:text-base font-black transition-colors duration-500 ${
            isActive
              ? "bg-neutral-900 text-primary-500 shadow-lg shadow-neutral-900/15"
              : "bg-neutral-200 text-neutral-500"
          }`}
        >
          {step}
        </div>
        <div>
          <h3
            className={`text-xl sm:text-2xl font-black tracking-tight transition-colors duration-500 ${
              isActive ? "text-neutral-900" : "text-neutral-500"
            }`}
          >
            {title}
          </h3>
          <p
            className={`mt-3 text-sm sm:text-base leading-relaxed transition-colors duration-500 ${
              isActive ? "text-neutral-600" : "text-neutral-400"
            }`}
          >
            {text}
          </p>
        </div>
      </div>
    </motion.article>
  );
}
