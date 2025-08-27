"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRive } from "@rive-app/react-canvas";

interface LoadingOverlayProps {
  src?: string; // path to the .riv file
  durationMs?: number; // how long to play before scaling out if no event-based completion
  className?: string;
  onDone?: () => void;
  onFadeStart?: () => void;
}

// A simple, robust loader that:
// - Plays a Rive animation centered on screen
// - After durationMs, scales the logo massively so it flies off-screen
// - Then unmounts and reveals the app
// You can later wire an actual state machine event to replace the timeout.
export default function LoadingOverlay({
  src = "/animation/aa3_animated.riv",
  durationMs = 3000,
  className = "",
  onDone,
  onFadeStart,
}: LoadingOverlayProps) {
  const [phase, setPhase] = useState<"show" | "move" | "hidden">("show");
  const [offset, setOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const { rive, RiveComponent } = useRive({
    src,
    autoplay: true, // attempt to auto-play default animation(s)
  });

  // Center the logo initially
  useEffect(() => {
    // nothing to compute here since we anchor at viewport center
  }, []);

  // After durationMs, move to hero logo position
  useEffect(() => {
    if (phase !== "show") return;
    const t = setTimeout(() => {
      try {
        // Stop the animation playback at the end of display time
        if (rive) {
          rive.stop(); // Changed from pause() to stop() to completely stop the animation
        }
        const el = document.getElementById("hero-logo");
        if (el) {
          const rect = el.getBoundingClientRect();
          const heroCenterX = rect.left + rect.width / 2;
          const heroCenterY = rect.top + rect.height / 2;
          const viewportCenterX = window.innerWidth / 2;
          const viewportCenterY = window.innerHeight / 2;
          setOffset({ x: heroCenterX - viewportCenterX, y: heroCenterY - viewportCenterY });
        }
      } catch {}
      // Start fading/moving
      if (onFadeStart) onFadeStart();
      setPhase("move");
    }, durationMs);
    return () => clearTimeout(t);
  }, [phase, durationMs]);

  // After move, hide fully
  useEffect(() => {
    if (phase !== "move") return;
    const t = setTimeout(() => setPhase("hidden"), 1200);
    return () => clearTimeout(t);
  }, [phase]);

  // Notify parent when finished
  useEffect(() => {
    if (phase === "hidden" && onDone) {
      onDone();
    }
  }, [phase, onDone]);

  // Ensure playback if autoplay didn't start for any reason
  useEffect(() => {
    if (rive && !rive.isPlaying) {
      try {
        rive.play();
      } catch {}
    }
  }, [rive]);

  return (
    <AnimatePresence>
      {phase !== "hidden" && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className={
            `fixed inset-0 z-[100] flex items-center justify-center ${className}`
          }
        >
          {/* Anchor at viewport center; animate x/y offsets toward hero logo */}
          <div className="pointer-events-none fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <motion.div
              initial={{ x: 0, y: 0, scale: 1, opacity: 1 }}
              animate={{ x: offset.x, y: offset.y, scale: 1, opacity: phase === "move" ? 0 : 1 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="w-48 h-48 sm:w-56 sm:h-56"
            >
              {/* Rive renders to a canvas element */}
              <RiveComponent className="w-full h-full" />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
