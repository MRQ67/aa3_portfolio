"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectModal } from "@/components/ProjectModal";
import { useProject } from "@/contexts/ProjectContext";

/**
 * Projects page component that displays a responsive grid of project cards and a project detail modal.
 *
 * Reads modal state and selected project from ProjectContext to control the ProjectModal. Renders a header with navigation and logo, a page title/description, an animated responsive grid of ProjectCard entries sourced from the local `projects` data, and the ProjectModal whose visibility is driven by the context.
 *
 * @returns The Projects page React element.
 */
export default function ProjectsPage() {
  const { isModalOpen, selectedProject, closeModal } = useProject();
  
  return (
    <div className="min-h-screen text-foreground flex flex-col max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="py-8 flex items-center justify-between"
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
          All Projects
        </h1>
        <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
          A comprehensive collection of my work, from mobile apps to web platforms and Chrome Extensions.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-20"
      >
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            enableModal={true}
            useAnimate={true}
          />
        ))}
      </motion.div>
      
      {/* Project Modal */}
      <ProjectModal
        isOpen={isModalOpen}
        onClose={closeModal}
        selectedProject={selectedProject}
      />
    </div>
  );
}