"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Design } from "@/data/designs";
import { useDesign } from "@/contexts/DesignContext";

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

  const CardContent = (
    <motion.div
      layoutId={enableModal ? `design-card-${design.id}` : undefined}
      initial={{ opacity: 0, y: 20 }}
      animate={useAnimate ? { opacity: 1, y: 0 } : undefined}
      whileInView={!useAnimate ? { opacity: 1, y: 0 } : undefined}
      transition={{ 
        duration: 0.6, 
        delay: useAnimate ? 0.1 * (index + 1) : 0.1 * (index + 1),
        layout: { duration: 0.6, ease: [0.32, 0.72, 0, 1] }
      }}
      viewport={!useAnimate ? { once: true } : undefined}
      whileHover={{ y: -5, scale: 1.02 }}
      className="group cursor-pointer"
      onClick={handleClick}
    >
      <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border-2 border-foreground/20 hover:border-foreground/40 transition-all hover:shadow-xl shadow-md">
        {/* Design Image */}
        <div className="aspect-square relative overflow-hidden bg-foreground/5">
          <Image
            src={design.image}
            alt={design.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
            priority={index < 3}
          />
          {/* Category Badge */}
          <div className="absolute top-3 right-3">
            <span className="px-2 py-1 bg-black/50 backdrop-blur-sm text-white text-xs rounded-full capitalize">
              {design.category}
            </span>
          </div>
        </div>
        
        {/* Design Info */}
        <div className="p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-bold">{design.title}</h3>
            <span className="text-sm text-foreground/60">{design.year}</span>
          </div>
          <p className="text-foreground/70 text-sm mb-4 line-clamp-2">
            {design.description}
          </p>
          
          {/* Tools */}
          <div className="flex flex-wrap gap-1">
            {design.tools.slice(0, 2).map((tool, toolIndex) => (
              <span
                key={toolIndex}
                className="px-2 py-1 bg-blue-500/10 text-blue-400 rounded-full text-xs"
              >
                {tool}
              </span>
            ))}
            {design.tools.length > 2 && (
              <span className="px-2 py-1 bg-foreground/10 text-foreground/60 rounded-full text-xs">
                +{design.tools.length - 2}
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );

  return CardContent;
}