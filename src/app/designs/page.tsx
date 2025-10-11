"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { designs } from "@/data/designs";
// DesignModal removed; designs use card-only presentation
import { DesignCard } from "@/components/DesignCard";

export default function DesignsPage() {
  
  return (
    <div className="min-h-screen text-foreground flex flex-col max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="py-8 flex items-center justify-between w-full"
      >
        <div className="flex items-center justify-between w-full">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-foreground/70 hover:text-foreground transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Home
          </Link>
          
          <div className="w-12 h-12 relative">
            <Image
              src="/logo.svg"
              alt="Logo"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </motion.div>

      {/* Page Title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-center py-16"
      >
        <h1 className="text-5xl md:text-7xl font-bold font-[family-name:var(--font-inter)] mb-6">
          Design Gallery
        </h1>
        <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
          A comprehensive showcase of my graphic design work, from brand identities to digital illustrations.
        </p>
      </motion.div>

      {/* Filter Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex flex-wrap justify-center gap-4 mb-12"
      >
        {['all', 'logo', 'poster', 'ui', 'branding', 'illustration'].map((category) => (
          <button
            key={category}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
              category === 'all' 
                ? 'bg-blue-500 text-white shadow-lg' 
                : 'bg-white/10 text-foreground/70 hover:bg-white/20 hover:text-foreground'
            }`}
          >
            {category === 'all' ? 'All Designs' : category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </motion.div>

      {/* Design Grid */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-20 px-4"
      >
        {designs.map((design, index) => (
          <DesignCard
            key={design.id}
            design={design}
            index={index}
            enableModal={false}
            useAnimate={true}
          />
        ))}
      </motion.div>
      
      {/* Design Modal removed */}
    </div>
  );
}