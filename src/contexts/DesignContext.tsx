"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface DesignContextType {
  isModalOpen: boolean;
  selectedDesign: number | null;
  openModal: (designId?: number) => void;
  closeModal: () => void;
}

const DesignContext = createContext<DesignContextType | undefined>(undefined);

export function DesignProvider({ children }: { children: ReactNode }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDesign, setSelectedDesign] = useState<number | null>(null);

  const openModal = (designId?: number) => {
    setSelectedDesign(designId || null);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // Delay clearing selectedDesign to allow smooth exit animation back to card
    setTimeout(() => setSelectedDesign(null), 600);
  };

  return (
    <DesignContext.Provider value={{
      isModalOpen,
      selectedDesign,
      openModal,
      closeModal
    }}>
      {children}
    </DesignContext.Provider>
  );
}

export function useDesign() {
  const context = useContext(DesignContext);
  if (context === undefined) {
    throw new Error("useDesign must be used within a DesignProvider");
  }
  return context;
}