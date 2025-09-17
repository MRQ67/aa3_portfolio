"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LoadingOverlay from "@/components/LoadingOverlay";

const LOGO_ANIMATION_STORAGE_KEY = 'has-seen-logo-animation';

export default function AppShell({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = useState(false);
  const [showLoading, setShowLoading] = useState(false);

  useEffect(() => {
    // Check if animation has been shown in this session
    let hasSeenAnimation = false;
    
    try {
      // Guard against SSR and restricted environments
      if (typeof window !== 'undefined' && window.sessionStorage) {
        hasSeenAnimation = sessionStorage.getItem(LOGO_ANIMATION_STORAGE_KEY) === 'true';
      }
    } catch (error) {
      // If sessionStorage access fails, treat as if animation hasn't been seen
      console.warn('Failed to access sessionStorage:', error);
      hasSeenAnimation = false;
    }
    
    if (!hasSeenAnimation) {
      // Show loading animation for first visit in session
      setShowLoading(true);
    } else {
      // Skip animation, go directly to content
      setReady(true);
    }
  }, []);

  return (
    <>
      <AnimatePresence>
        {ready && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
      {showLoading && !ready && (
        <LoadingOverlay
          minDurationMs={4000}
          onDone={() => {
            // Mark animation as seen in this session
            try {
              if (typeof window !== 'undefined' && window.sessionStorage) {
                sessionStorage.setItem(LOGO_ANIMATION_STORAGE_KEY, 'true');
              }
            } catch (error) {
              // If sessionStorage write fails, just continue - the animation will show again next time
              console.warn('Failed to write to sessionStorage:', error);
            }
            // Wait for the logo's fade-out animation to complete (1.2s) plus a small buffer
            setTimeout(() => setReady(true), 700);
          }}
        />
      )}
    </>
  );
}
