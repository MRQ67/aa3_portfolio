"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Project } from "@/data/projects";
import { useProject } from "@/contexts/ProjectContext";

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

  const CardContent = (
    <motion.div
      layoutId={enableModal ? `project-card-${project.id}` : undefined}
      initial={{ opacity: 0, y: 20 }}
      animate={useAnimate ? { opacity: 1, y: 0 } : undefined}
      whileInView={!useAnimate ? { opacity: 1, y: 0 } : undefined}
      transition={{ 
        duration: 0.6, 
        delay: useAnimate ? 0.1 * (index + 1) : 0.1 * (index + 1),
        layout: { duration: 0.6, ease: [0.32, 0.72, 0, 1] }
      }}
      viewport={!useAnimate ? { once: true } : undefined}
      whileHover={{ y: -5 }}
      className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border-2 border-foreground/20 hover:border-foreground/40 transition-all hover:shadow-xl shadow-md cursor-pointer h-full"
      onClick={handleClick}
    >
      <div className="h-48 relative bg-foreground/5">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          priority={index < 4}
        />
        {/* Status Badge */}
        <div className="absolute top-3 right-3">
          <span className={`px-2 py-1 rounded-full text-xs font-medium backdrop-blur-sm ${
            project.status === 'completed' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
            project.status === 'in-progress' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' :
            'bg-blue-500/20 text-blue-400 border border-blue-500/30'
          }`}>
            {project.status === 'completed' ? 'Completed' :
             project.status === 'in-progress' ? 'In Progress' : 'Planned'}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-foreground/70 mb-4 line-clamp-3">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className={`px-2 py-1 rounded-full text-xs ${project.tagColors[tagIndex]}`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );

  // If modal is enabled, return card without Link
  if (enableModal) {
    return CardContent;
  }

  // Otherwise, wrap in Link for navigation to individual project pages
  return (
    <Link href={`/projects/${project.slug}`} className="block">
      {CardContent}
    </Link>
  );
}