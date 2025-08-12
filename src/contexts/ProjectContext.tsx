"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface ProjectContextType {
  isModalOpen: boolean;
  selectedProject: number | null;
  openModal: (projectId?: number) => void;
  closeModal: () => void;
}

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

export function ProjectProvider({ children }: { children: ReactNode }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const openModal = (projectId?: number) => {
    setSelectedProject(projectId || null);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // Delay clearing selectedProject to allow smooth exit animation back to card
    setTimeout(() => setSelectedProject(null), 600);
  };

  return (
    <ProjectContext.Provider value={{
      isModalOpen,
      selectedProject,
      openModal,
      closeModal
    }}>
      {children}
    </ProjectContext.Provider>
  );
}

export function useProject() {
  const context = useContext(ProjectContext);
  if (context === undefined) {
    throw new Error("useProject must be used within a ProjectProvider");
  }
  return context;
}