"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef, useCallback } from 'react';
import Image from "next/image";
import { designs } from "@/data/designs";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface DesignModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedDesign?: number | null;
}

export function DesignModal({ isOpen, onClose, selectedDesign }: DesignModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const modalRef = useRef<HTMLDivElement>(null);
  const design = selectedDesign ? designs.find(d => d.id === selectedDesign) : null;

  // Handle click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  const goToNext = useCallback(() => {
    if (!designs || !design) return;
    const currentIdx = designs.findIndex((d) => d.id === design.id);
    const nextIndex = (currentIdx + 1) % designs.length;
    setCurrentIndex(nextIndex);
  }, [design, designs]);

  const goToPrevious = useCallback(() => {
    if (!designs || !design) return;
    const currentIdx = designs.findIndex((d) => d.id === design.id);
    const prevIndex = (currentIdx - 1 + designs.length) % designs.length;
    setCurrentIndex(prevIndex);
  }, [design, designs]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        goToNext();
      } else if (e.key === 'ArrowLeft') {
        goToPrevious();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, goToNext, goToPrevious]);

  if (!isOpen || !design) return null;

  return (
    <AnimatePresence mode="wait">
      {isOpen && design && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
          />
          
          {/* Modal Content */}
          <motion.div
            ref={modalRef}
            layoutId={`design-card-${design.id}`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              transition: {
                type: "spring",
                bounce: 0.2,
                duration: 0.5
              }
            }}
            exit={{ 
              opacity: 0, 
              scale: 0.9,
              transition: { duration: 0.2 }
            }}
            className="relative w-full max-w-6xl max-h-[90vh] bg-background rounded-2xl overflow-hidden shadow-2xl"
            style={{
              borderRadius: '1rem',
              overflow: 'hidden',
              cursor: 'default'
            }}
          >
            {/* Close Button */}
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/50 text-white hover:bg-white/20 transition-colors"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>
            
            {/* Main Content */}
            <div className="w-full max-w-6xl bg-background rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row h-full max-h-[90vh]">
              {/* Left Side - Image */}
              <div className="relative w-full md:w-1/2 h-64 md:h-auto bg-black">
                {design.gallery && design.gallery.length > 1 && (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        goToPrevious();
                      }}
                      className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-white/20 transition-colors"
                      aria-label="Previous image"
                      disabled={currentIndex === 0}
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        goToNext();
                      }}
                      className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-white/20 transition-colors"
                      aria-label="Next image"
                      disabled={currentIndex === (design.gallery?.length || 1) - 1}
                    >
                      <ChevronRight size={24} />
                    </button>
                  </>
                )}

                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full flex items-center justify-center p-8"
                >
                  <Image
                    src={design.gallery?.[currentIndex] || design.image}
                    alt={`${design.title} - ${currentIndex + 1} of ${design.gallery?.length || 1}`}
                    width={800}
                    height={600}
                    className="object-contain max-h-full w-auto"
                    priority
                  />
                </motion.div>

                {design.gallery && design.gallery.length > 1 && (
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
                    {design.gallery.map((_, index) => (
                      <button
                        key={index}
                        onClick={(e) => {
                          e.stopPropagation();
                          goToSlide(index);
                        }}
                        className={`w-2 h-2 rounded-full transition-all ${
                          index === currentIndex ? 'bg-white w-6' : 'bg-white/50 hover:bg-white/75'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>
                )}
              </div>
              
              {/* Right Side - Content */}
              <div className="w-full md:w-1/2 p-6 md:p-8 overflow-y-auto">
                <div className="flex flex-col h-full">
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                        {design.title}
                      </h2>
                      <span className="text-sm text-foreground/60">{design.year}</span>
                    </div>
                    
                    <div className="flex items-center gap-3 mb-6">
                      <span className="px-3 py-1 text-sm font-medium bg-foreground/5 text-foreground/80 rounded-full border border-foreground/10">
                        {design.category.charAt(0).toUpperCase() + design.category.slice(1)}
                      </span>
                      {design.gallery && design.gallery.length > 1 && (
                        <span className="text-sm text-foreground/60">
                          {currentIndex + 1} / {design.gallery.length}
                        </span>
                      )}
                    </div>
                    
                    <p className="text-foreground/90 mb-6">{design.description}</p>
                    
                    <div className="space-y-3">
                      <h3 className="text-sm font-medium text-foreground/70">Tools Used</h3>
                      <div className="flex flex-wrap gap-2">
                        {design.tools.map((tool, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 text-xs bg-foreground/5 text-foreground/80 rounded-full border border-foreground/10"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {design.gallery && design.gallery.length > 1 && (
                    <div className="mt-auto pt-6 border-t border-foreground/10">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={goToPrevious}
                            disabled={currentIndex === 0}
                            className="p-2 rounded-full hover:bg-foreground/5 disabled:opacity-30 disabled:cursor-not-allowed"
                            aria-label="Previous image"
                          >
                            <ChevronLeft size={20} />
                          </button>
                          <button
                            onClick={goToNext}
                            disabled={currentIndex === design.gallery.length - 1}
                            className="p-2 rounded-full hover:bg-foreground/5 disabled:opacity-30 disabled:cursor-not-allowed"
                            aria-label="Next image"
                          >
                            <ChevronRight size={20} />
                          </button>
                        </div>
                        <span className="text-sm text-foreground/60">
                          Swipe to view more
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}