"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import Image from "next/image";
import { designs } from "@/data/designs";

interface DesignModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedDesign?: number | null;
}

export function DesignModal({ isOpen, onClose, selectedDesign }: DesignModalProps) {
  const design = selectedDesign ? designs.find(d => d.id === selectedDesign) : null;

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!design) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(4px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 z-40"
          />

          {/* Modal */}
          <motion.div
            layoutId={`design-card-${selectedDesign}`}
            className="fixed inset-4 md:inset-8 bg-background border-2 border-foreground/20 rounded-2xl z-50 overflow-hidden"
            transition={{ 
              duration: 0.6, 
              ease: [0.32, 0.72, 0, 1],
              layout: { duration: 0.6, ease: [0.32, 0.72, 0, 1] }
            }}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 z-10 w-10 h-10 bg-foreground/10 hover:bg-foreground/20 rounded-full flex items-center justify-center transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {/* Modal Content */}
            <motion.div 
              className="h-full overflow-y-auto"
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {/* Hero Section */}
              <div className="relative">
                {/* Design Image */}
                <div className="h-64 md:h-96 relative bg-foreground/5">
                  <Image
                    src={design.image}
                    alt={design.title}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </div>

                {/* Design Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm bg-blue-500/20 text-blue-400 border border-blue-500/30 capitalize">
                      {design.category}
                    </span>
                    <span className="px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm bg-foreground/10 text-foreground/80 border border-foreground/20">
                      {design.year}
                    </span>
                  </div>
                  
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
                    className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-inter)] mb-4"
                  >
                    {design.title}
                  </motion.h1>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Description */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
                  className="mb-8"
                >
                  <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                    {design.description}
                  </p>

                  {/* Tools Used */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4 font-[family-name:var(--font-inter)]">Tools Used</h3>
                    <div className="flex flex-wrap gap-3">
                      {design.tools.map((tool, index) => (
                        <span
                          key={index}
                          className="px-4 py-2 bg-blue-500/10 text-blue-400 rounded-lg text-sm font-medium border border-blue-500/20"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Additional Info */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5, ease: "easeOut" }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                  {/* Category Info */}
                  <div>
                    <h3 className="text-xl font-bold mb-4 font-[family-name:var(--font-inter)]">Category</h3>
                    <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-foreground/10">
                      <span className="text-foreground/80 capitalize font-medium">{design.category} Design</span>
                    </div>
                  </div>

                  {/* Year */}
                  <div>
                    <h3 className="text-xl font-bold mb-4 font-[family-name:var(--font-inter)]">Year</h3>
                    <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-foreground/10">
                      <span className="text-foreground/80 font-medium">{design.year}</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}