"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Design } from "@/data/designs";
import { cn } from "@/lib/utils";

interface DesignCardProps {
  design: Design;
  index: number;
  useAnimate?: boolean;
  // keep enableModal for compatibility but ignore it to drop modal behavior
  enableModal?: boolean;
}

export function DesignCard({ design, index, useAnimate = false }: DesignCardProps) {
  // Map tool names to local brand SVGs; fallback to null
  const getToolIconSrc = (tool: string) => {
    const t = tool.toLowerCase();
    switch (t) {
      case "figma":
        return "/icons/figma.svg";
      case "adobe illustrator":
        return "/icons/adobe-illustrator.svg";
      default:
        return null;
    }
  };

  // Gradient colors are defined but not used - keeping for future use

  return (
    <div className="group relative w-full mx-auto space-y-4 font-[family-name:var(--font-dm-sans)]">
      {/* Thumbnail - Floating (mirror ProjectCard) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={useAnimate ? { opacity: 1, y: 0 } : undefined}
        whileInView={!useAnimate ? { opacity: 1, y: 0 } : undefined}
        transition={{ 
          duration: 0.6, 
          delay: 0.1 * (index + 1)
        }}
        viewport={!useAnimate ? { once: true } : undefined}
        className="relative aspect-[4/3] overflow-hidden rounded-xl"
      >
        <img
          src={design.image}
          alt={design.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 rounded-xl"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl" />
      </motion.div>

      

      {/* Title - Floating */}
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        animate={useAnimate ? { opacity: 1, y: 0 } : undefined}
        whileInView={!useAnimate ? { opacity: 1, y: 0 } : undefined}
        transition={{ 
          duration: 0.6, 
          delay: 0.1 * (index + 1) + 0.1
        }}
        viewport={!useAnimate ? { once: true } : undefined}
        className="text-xl font-bold text-foreground group-hover:text-primary transition-colors font-[family-name:var(--font-dm-sans)]"
      >
        {design.title}
      </motion.h3>

      {/* Category/Year Badge - Floating (bg removed as requested) */}
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        animate={useAnimate ? { opacity: 1, y: 0 } : undefined}
        whileInView={!useAnimate ? { opacity: 1, y: 0 } : undefined}
        transition={{ 
          duration: 0.6, 
          delay: 0.1 * (index + 1) + 0.2
        }}
        viewport={!useAnimate ? { once: true } : undefined}
        className={cn(
          "inline-flex items-center px-2.5 py-1 text-xs font-medium font-[family-name:var(--font-dm-sans)]",
          "text-foreground/80"
        )}
      >
        {design.category.charAt(0).toUpperCase() + design.category.slice(1)} • {design.year}
      </motion.span>

      {/* Description - Floating */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={useAnimate ? { opacity: 1, y: 0 } : undefined}
        whileInView={!useAnimate ? { opacity: 1, y: 0 } : undefined}
        transition={{ 
          duration: 0.6, 
          delay: 0.1 * (index + 1) + 0.3
        }}
        viewport={!useAnimate ? { once: true } : undefined}
        className="text-sm text-muted-foreground line-clamp-2 font-[family-name:var(--font-dm-sans)]"
      >
        {design.description}
      </motion.p>

      {/* Tools - Floating */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={useAnimate ? { opacity: 1, y: 0 } : undefined}
        whileInView={!useAnimate ? { opacity: 1, y: 0 } : undefined}
        transition={{ 
          duration: 0.6, 
          delay: 0.1 * (index + 1) + 0.4
        }}
        viewport={!useAnimate ? { once: true } : undefined}
        className="flex flex-wrap gap-2"
      >
        {design.tools.slice(0, 3).map((tool, i) => {
          const src = getToolIconSrc(tool);
          return (
            <span
              key={i}
              className="text-xs text-foreground inline-flex items-center gap-1 font-[family-name:var(--font-dm-sans)]"
            >
              <span className="inline-flex align-middle leading-none">
                {src ? (
                  <img
                    src={src}
                    alt=""
                    aria-hidden="true"
                    className="w-[1em] h-[1em] object-contain"
                    loading="lazy"
                    decoding="async"
                  />
                ) : null}
              </span>
              {tool}
            </span>
          );
        })}
        {design.tools.length > 3 && (
          <span className="text-xs text-foreground font-[family-name:var(--font-dm-sans)]">
            +{design.tools.length - 3}
          </span>
        )}
      </motion.div>
      
      {/* CTA - More Detail (moved below tool names at bottom, icon added) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={useAnimate ? { opacity: 1, y: 0 } : undefined }
        whileInView={!useAnimate ? { opacity: 1, y: 0 } : undefined }
        transition={{
          duration: 0.6,
          delay: 0.1 * (index + 1) + 0.5
        }}
        viewport={!useAnimate ? { once: true } : undefined}
        className="flex font-[family-name:var(--font-dm-sans)]"
      >
        <Link
          href={`/designs/${design.id}`}
          className="px-3 py-1.5 text-xs bg-accent hover:bg-accent/80 text-accent-foreground rounded-full border border-border transition-all duration-300 inline-flex items-center gap-2 group"
        >
          More Detail
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="transition-transform group-hover:translate-x-0.5"
          >
            <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </motion.div>
    </div>
  );
}
