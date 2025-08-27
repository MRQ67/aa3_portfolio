"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LoadingOverlay from "@/components/LoadingOverlay";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = useState(false);

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
      {!ready && (
        <LoadingOverlay
          durationMs={3000}
          onDone={() => {
            // Wait for the logo's fade-out animation to complete (1.2s) plus a small buffer
            setTimeout(() => setReady(true), 700);
          }}
        />
      )}
    </>
  );
}
