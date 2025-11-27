"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import Image from "next/image";
import { projects } from "@/data/projects";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedProject?: number | null;
}

export function ProjectModal({ isOpen, onClose, selectedProject }: ProjectModalProps) {
  const project = selectedProject ? projects.find(p => p.id === selectedProject) : null;

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

  if (!project) return null;

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
            layoutId={`project-card-${selectedProject}`}
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
                {/* Project Image */}
                <div className="h-64 md:h-80 relative bg-foreground/5">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </div>

                {/* Project Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm ${
                      project.status === 'completed' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                      project.status === 'in-progress' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' :
                      'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                    }`}>
                      {project.status === 'completed' ? 'Completed' :
                       project.status === 'in-progress' ? 'In Progress' : 'Planned'}
                    </span>
                  </div>
                  
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
                    className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-inter)] mb-4"
                  >
                    {project.title}
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
                    {project.fullDescription}
                  </p>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-4 mb-8">
                    {project.links.github && (
                      <motion.a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-lg hover:bg-foreground/90 transition-colors font-medium"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z"/>
                        </svg>
                        View on GitHub
                      </motion.a>
                    )}
                    
                    {project.links.live && (
                      <motion.a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        Live Demo
                      </motion.a>
                    )}
                    
                    {project.links.demo && (
                      <motion.a
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 border-2 border-foreground/20 text-foreground rounded-lg hover:border-foreground/40 hover:bg-foreground/5 transition-colors font-medium"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <polygon points="5,3 19,12 5,21" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        View Demo
                      </motion.a>
                    )}
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className={`px-3 py-1 rounded-full text-sm flex items-center gap-1 ${project.tagColors[index]}`}
                      >
                        {/* Icon for the tag */}
                        {(() => {
                          const lowerTag = tag.toLowerCase();
                          let iconSrc = null;

                          switch(lowerTag) {
                            case "next.js":
                              iconSrc = "/icons/nextjs.svg";
                              break;
                            case "typescript":
                              iconSrc = "/icons/typescript.svg";
                              break;
                            case "supabase":
                              iconSrc = "/icons/supabase.svg";
                              break;
                            case "react":
                              iconSrc = "/icons/react.svg";
                              break;
                            case "javascript":
                              iconSrc = "/icons/javascript.svg";
                              break;
                            case "kotlin":
                              iconSrc = "/icons/kotlin.svg";
                              break;
                            case "go":
                              iconSrc = "/icons/go.svg";
                              break;
                            case "tailwind css":
                            case "tailwindcss":
                              iconSrc = "/icons/tailwindcss.svg";
                              break;
                            case "node.js":
                            case "node":
                              iconSrc = "/icons/nodejs.svg";
                              break;
                            case "partykit":
                              iconSrc = "/icons/partykit-icon.svg";
                              break;
                            case "yjs":
                              iconSrc = "/icons/yjs-icon.svg";
                              break;
                            case "convex":
                              iconSrc = "/icons/convex.svg";
                              break;
                            default:
                              iconSrc = null;
                          }

                          return iconSrc ? (
                            <Image
                              src={iconSrc}
                              alt=""
                              width={16}
                              height={16}
                              className="object-contain"
                            />
                          ) : null;
                        })()}
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>

                {/* Features and Tech Stack */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5, ease: "easeOut" }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                  {/* Features */}
                  <div>
                    <h3 className="text-xl font-bold mb-4 font-[family-name:var(--font-inter)]">Key Features</h3>
                    <ul className="space-y-2">
                      {project.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-foreground/80 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h3 className="text-xl font-bold mb-4 font-[family-name:var(--font-inter)]">Technology Stack</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {project.techStack.map((tech, index) => (
                        <div
                          key={index}
                          className="bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-foreground/10 text-sm flex items-center gap-2"
                        >
                          {/* Icon for the tech */}
                          {(() => {
                            const lowerTech = tech.toLowerCase();
                            let iconSrc = null;

                            switch(lowerTech) {
                              case "next.js":
                                iconSrc = "/icons/nextjs.svg";
                                break;
                              case "typescript":
                                iconSrc = "/icons/typescript.svg";
                                break;
                              case "supabase":
                                iconSrc = "/icons/supabase.svg";
                                break;
                              case "react":
                                iconSrc = "/icons/react.svg";
                                break;
                              case "javascript":
                                iconSrc = "/icons/javascript.svg";
                                break;
                              case "kotlin":
                                iconSrc = "/icons/kotlin.svg";
                                break;
                              case "go":
                                iconSrc = "/icons/go.svg";
                                break;
                              case "tailwind css":
                              case "tailwindcss":
                                iconSrc = "/icons/tailwindcss.svg";
                                break;
                              case "node.js":
                              case "node":
                                iconSrc = "/icons/nodejs.svg";
                                break;
                              case "partykit":
                                iconSrc = "/icons/partykit-icon.svg";
                                break;
                              case "yjs":
                                iconSrc = "/icons/yjs-icon.svg";
                                break;
                              case "convex":
                                iconSrc = "/icons/convex.svg";
                                break;
                              default:
                                iconSrc = null;
                            }

                            return iconSrc ? (
                              <Image
                                src={iconSrc}
                                alt=""
                                width={20}
                                height={20}
                                className="object-contain"
                              />
                            ) : null;
                          })()}
                          {tech}
                        </div>
                      ))}
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