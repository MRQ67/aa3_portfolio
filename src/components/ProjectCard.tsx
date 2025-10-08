"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Project } from "@/data/projects";
import { useProject } from "@/contexts/ProjectContext";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  index: number;
  enableModal?: boolean;
  useAnimate?: boolean;
}

export function ProjectCard({ project, index, enableModal = false, useAnimate = false }: ProjectCardProps) {
  const { openModal } = useProject();

  const handleClick = (e: React.MouseEvent) => {
    if (enableModal) {
      e.preventDefault();
      openModal(project.id);
    }
  };

  // Gradient colors are defined but not used - keeping for future use

  // Status indicators removed as per request

  const CardContent = (
    <motion.div
      layoutId={enableModal ? `project-card-${project.id}` : undefined}
      initial={{ opacity: 0, y: 20 }}
      animate={useAnimate ? { opacity: 1, y: 0 } : undefined}
      whileInView={!useAnimate ? { opacity: 1, y: 0 } : undefined}
      transition={{ 
        duration: 0.6, 
        delay: 0.1 * (index + 1),
        layout: { duration: 0.6, ease: [0.32, 0.72, 0, 1] }
      }}
      viewport={!useAnimate ? { once: true } : undefined}
      className="group relative max-w-sm w-full mx-auto"
      onClick={handleClick}
    >
      <div
        className={cn(
          "w-full cursor-pointer overflow-hidden relative card h-96 rounded-xl shadow-xl flex flex-col justify-end p-6 border border-transparent dark:border-neutral-800",
          "bg-cover bg-center",
          "before:absolute before:inset-0 before:content-[''] before:bg-gradient-to-t before:from-black/90 before:to-black/20 before:opacity-90 before:z-10",
          "transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-background"
        )}
        style={{
          backgroundImage: `url(${project.image})`,
        }}
        aria-label={`View ${project.title} project details`}
      >
        {/* Content */}
        <div className="relative z-20 text-white">
          
          <h3 className="text-2xl font-bold mb-2 group-hover:text-primary-300 transition-colors">
            {project.title}
          </h3>
          
          <p className="text-sm text-gray-200 opacity-90 mb-4 line-clamp-2">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.slice(0, 3).map((tag, i) => (
              <span 
                key={i}
                className="px-2.5 py-1 text-xs bg-black/40 backdrop-blur-sm rounded-full border border-white/10"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 3 && (
              <span className="px-2.5 py-1 text-xs bg-black/40 backdrop-blur-sm rounded-full">
                +{project.tags.length - 3}
              </span>
            )}
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-2">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 text-xs bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full border border-white/20 transition-all duration-300 flex items-center gap-1"
                onClick={(e) => e.stopPropagation()}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
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
                className="px-3 py-1.5 text-xs bg-blue-500/80 hover:bg-blue-500 backdrop-blur-sm rounded-full border border-blue-400/30 transition-all duration-300 flex items-center gap-1"
                onClick={(e) => e.stopPropagation()}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                  <polyline points="15,3 21,3 21,9"/>
                  <line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
                Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );

  if (enableModal) {
    return CardContent;
  }

  return (
    <Link href={`/projects/${project.slug}`} className="block">
      {CardContent}
    </Link>
  );
}