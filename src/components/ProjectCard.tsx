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

/**
 * Renders a project card with animated entry and either modal-opening or link navigation behavior.
 *
 * When `enableModal` is true the card intercepts clicks, prevents navigation, and opens the project modal via context (using the project's `id`). When `enableModal` is false the card is wrapped with a Next.js `Link` to `/projects/{project.slug}` and behaves as a normal navigation target.
 *
 * @param index - Zero-based index used to stagger the animation delay for this card.
 * @param enableModal - If true, enables modal behavior (shared layout animations and click-to-open); defaults to `false`.
 * @param useAnimate - If true, forces the component to use the `animate` prop for initial animation; when false it uses `whileInView` (animates on viewport entry); defaults to `false`.
 * @returns A JSX element representing the project card.
 */
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
          "before:absolute before:inset-0 before:bg-gradient-to-t before:from-black/90 before:to-black/20 before:opacity-90 before:z-10",
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
          
          <div className="flex flex-wrap gap-2">
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