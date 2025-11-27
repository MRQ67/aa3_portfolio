"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  AppWindow,
  FileCode,
  Database,
  Atom,
  Bug,
  Puzzle,
  Wind,
  Frame,
  Server,
  Cog,
  Smartphone,
  Braces
} from "lucide-react";
import Link from "next/link";
import { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  index: number;
  useAnimate?: boolean;
}

export function ProjectCard({ project, index, useAnimate = false }: ProjectCardProps) {
  // Prefer local brand SVGs for tags; fallback to lucide when missing
  const getTagIconSrc = (tag: string) => {
    const t = tag.toLowerCase();
    switch (t) {
      case "next.js":
        return "/icons/nextjs.svg";
      case "typescript":
        return "/icons/typescript.svg";
      case "supabase":
        return "/icons/supabase.svg";
      case "react":
        return "/icons/react.svg";
      case "javascript":
        return "/icons/javascript.svg";
      case "kotlin":
        return "/icons/kotlin.svg";
      case "go":
        return "/icons/go.svg";
      case "tailwind css":
      case "tailwindcss":
        return "/icons/tailwindcss.svg";
      case "node.js":
      case "node":
        return "/icons/nodejs.svg";
      default:
        return null;
    }
  };
  // Map tag names to lucide icons (generic approximations, not brand logos)
  const getTagIcon = (tag: string) => {
    const t = tag.toLowerCase();
    const commonClass = "w-[1em] h-[1em]";
    switch (t) {
      case "next.js":
        return <AppWindow className={commonClass} aria-hidden="true" />;
      case "typescript":
        return <FileCode className={commonClass} aria-hidden="true" />;
      case "supabase":
        return <Database className={commonClass} aria-hidden="true" />;
      case "react":
        return <Atom className={commonClass} aria-hidden="true" />;
      case "issue tracking":
        return <Bug className={commonClass} aria-hidden="true" />;
      case "javascript":
        return <FileCode className={commonClass} aria-hidden="true" />;
      case "c#":
        return <Braces className={commonClass} aria-hidden="true" />;
      case "browser extension":
        return <Puzzle className={commonClass} aria-hidden="true" />;
      case "kotlin":
        return <FileCode className={commonClass} aria-hidden="true" />;
      case "go":
        return <Cog className={commonClass} aria-hidden="true" />;
      case "tailwind css":
      case "tailwindcss":
        return <Wind className={commonClass} aria-hidden="true" />;
      case "framer motion":
      case "framer":
        return <Frame className={commonClass} aria-hidden="true" />;
      case "vercel kv":
      case "vercel":
        return <Database className={commonClass} aria-hidden="true" />;
      case "node.js":
      case "node":
        return <Server className={commonClass} aria-hidden="true" />;
      case "android":
        return <Smartphone className={commonClass} aria-hidden="true" />;
      default:
        return null;
    }
  };
  // Status badge colors
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return {
          text: 'Completed',
          className: 'bg-green-500/20 text-green-400 border-green-500/30'
        };
      case 'in-progress':
        return {
          text: 'In Progress',
          className: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
        };
      case 'planned':
        return {
          text: 'Planned',
          className: 'bg-blue-500/20 text-blue-400 border-blue-500/30'
        };
      default:
        return {
          text: 'Unknown',
          className: 'bg-gray-500/20 text-gray-400 border-gray-500/30'
        };
    }
  };

  const statusBadge = getStatusBadge(project.status);

  const CardContent = (
    <div className="group relative w-full mx-auto space-y-4 font-[family-name:var(--font-dm-sans)]">
      {/* Thumbnail - Floating */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={useAnimate ? { opacity: 1, y: 0 } : undefined}
        whileInView={!useAnimate ? { opacity: 1, y: 0 } : undefined}
        transition={{ 
          duration: 0.6, 
          delay: 0.1 * (index + 1)
        }}
        viewport={!useAnimate ? { once: true } : undefined}
        className="relative h-48 overflow-hidden rounded-xl"
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105 rounded-xl"
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
        {project.title}
      </motion.h3>

      {/* Status Badge - Floating */}
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
          "inline-flex items-center px-2.5 py-1 text-xs font-medium rounded-full border font-[family-name:var(--font-dm-sans)]",
          statusBadge.className
        )}
      >
        {statusBadge.text}
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
        {project.description}
      </motion.p>
      
      {/* Tags - Floating */}
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
        {project.tags.slice(0, 3).map((tag, i) => {
          const src = getTagIconSrc(tag);
          return (
            <span
              key={i}
              className="text-xs text-foreground inline-flex items-center gap-1 font-[family-name:var(--font-dm-sans)]"
            >
              <span className="inline-flex align-middle leading-none">
                {src ? (
                  <Image
                    src={src}
                    alt=""
                    width={16}
                    height={16}
                    aria-hidden
                    className="object-contain"
                  />
                ) : (
                  getTagIcon(tag)
                )}
              </span>
              {tag}
            </span>
          );
        })}
        {project.tags.length > 3 && (
          <span className="text-xs text-foreground font-[family-name:var(--font-dm-sans)]">
            +{project.tags.length - 3}
          </span>
        )}
      </motion.div>

      {/* CTA Buttons - Floating */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={useAnimate ? { opacity: 1, y: 0 } : undefined}
        whileInView={!useAnimate ? { opacity: 1, y: 0 } : undefined}
        transition={{ 
          duration: 0.6, 
          delay: 0.1 * (index + 1) + 0.5
        }}
        viewport={!useAnimate ? { once: true } : undefined}
        className="flex gap-2 font-[family-name:var(--font-dm-sans)]"
      >
        {(() => {
          const hasThreeButtons = !!(project.links.github && project.links.demo);
          const buttonSize = hasThreeButtons ? "px-3 py-2 text-xs" : "px-4 py-2.5 text-sm";
          const iconSize = hasThreeButtons ? "14" : "16";
          const gapSize = hasThreeButtons ? "gap-1" : "gap-1.5";
          
          return (
            <>
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${buttonSize} bg-secondary hover:bg-secondary/80 text-secondary-foreground rounded-full border border-border transition-all duration-300 flex items-center ${gapSize} font-[family-name:var(--font-dm-sans)]`}
                >
                  <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
              )}
              {project.links.demo && (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${buttonSize} bg-primary hover:bg-primary/90 text-primary-foreground rounded-full transition-all duration-300 flex items-center ${gapSize} font-[family-name:var(--font-dm-sans)]`}
                >
                  <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                    <polyline points="15,3 21,3 21,9"/>
                    <line x1="10" y1="14" x2="21" y2="3"/>
                  </svg>
                  Demo
                </a>
              )}
              
              {/* View Project Link */}
              <Link
                href={`/projects/${project.slug}`}
                className={`${buttonSize} bg-accent hover:bg-accent/80 text-accent-foreground rounded-full border border-border transition-all duration-300 flex items-center ${gapSize} font-[family-name:var(--font-dm-sans)]`}
              >
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                  <circle cx="12" cy="12" r="3"/>
                </svg>
                View Project
              </Link>
            </>
          );
        })()}
      </motion.div>
    </div>
  );

  return CardContent;
}