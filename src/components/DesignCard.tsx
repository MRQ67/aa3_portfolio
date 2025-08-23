"use client";

import { motion } from "framer-motion";
import { Design } from "@/data/designs";
import Image from "next/image";
import { useDesign } from "@/contexts/DesignContext";
import { cn } from "@/lib/utils";

interface DesignCardProps {
  design: Design;
  index: number;
  enableModal?: boolean;
  useAnimate?: boolean;
}

export function DesignCard({ design, index, enableModal = false, useAnimate = false }: DesignCardProps) {
  const { openModal } = useDesign();

  const handleClick = (e: React.MouseEvent) => {
    if (enableModal) {
      e.preventDefault();
      openModal(design.id);
    }
  };

  // Generate a subtle gradient based on the design title
  const gradientId = `gradient-${design.id}`;
  const gradientColors = [
    ['#6366f1', '#8b5cf6'], // indigo to purple
    ['#ec4899', '#f43f5e'], // pink to rose
    ['#10b981', '#3b82f6'], // emerald to blue
    ['#f59e0b', '#ef4444'], // amber to red
  ][index % 4];

  return (
    <motion.div
      layoutId={`design-card-${design.id}`}
      initial={{ opacity: 0, y: 20 }}
      animate={useAnimate ? { opacity: 1, y: 0 } : undefined}
      whileInView={!useAnimate ? { opacity: 1, y: 0 } : undefined}
      transition={{ 
        duration: 0.6, 
        delay: 0.1 * (index + 1),
        layout: { 
          type: "spring",
          bounce: 0.2,
          duration: 0.5
        } 
      }}
      viewport={!useAnimate ? { once: true } : undefined}
      className="group relative max-w-sm w-full mx-auto"
      onClick={handleClick}
      style={{
        borderRadius: '1rem',
        overflow: 'hidden',
        cursor: 'pointer'
      }}
    >
      <div
        className={cn(
          "w-full cursor-pointer overflow-hidden relative card h-96 rounded-xl shadow-xl flex flex-col justify-end p-6 border border-transparent dark:border-neutral-800",
          "bg-cover bg-center",
          "before:absolute before:inset-0 before:bg-gradient-to-t before:from-black/80 before:to-transparent before:opacity-80 before:z-10",
          "transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-background"
        )}
        style={{
          backgroundImage: `url(${design.image})`,
        }}
        aria-label={`View ${design.title} design details`}
      >
        {/* Content */}
        <div className="relative z-20 text-white">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-3 py-1 text-xs font-medium bg-black/50 backdrop-blur-sm rounded-full">
              {design.category}
            </span>
            <span className="text-xs opacity-80">{design.year}</span>
          </div>
          
          <h3 className="text-2xl font-bold mb-2 group-hover:text-primary-300 transition-colors">
            {design.title}
          </h3>
          
          <p className="text-sm text-gray-200 opacity-90 mb-4 line-clamp-2">
            {design.description}
          </p>
          
          <div className="flex flex-wrap gap-2">
            {design.tools.slice(0, 3).map((tool, i) => (
              <span 
                key={i}
                className="px-2.5 py-1 text-xs bg-black/40 backdrop-blur-sm rounded-full border border-white/10"
              >
                {tool}
              </span>
            ))}
            {design.tools.length > 3 && (
              <span className="px-2.5 py-1 text-xs bg-black/40 backdrop-blur-sm rounded-full">
                +{design.tools.length - 3}
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
