"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRive } from "@rive-app/react-canvas";

interface LoadingOverlayProps {
  src?: string; // path to the .riv file
  minDurationMs?: number; // minimum duration to show animation
  className?: string;
  onDone?: () => void;
  onFadeStart?: () => void;
}

// A simple, robust loader that:
// - Plays a Rive animation centered on screen
// - Waits for the animation to complete OR a minimum duration, whichever is longer
// - Then moves to hero logo position and fades out
// - Finally unmounts and reveals the app
export default function LoadingOverlay({
  src = "/animation/aa3_animated.riv",
  minDurationMs = 4000, // Increased minimum duration to ensure animation completes
  className = "",
  onDone,
  onFadeStart,
}: LoadingOverlayProps) {
  const [phase, setPhase] = useState<"show" | "move" | "hidden">("show");
  const [offset, setOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [animationEnded, setAnimationEnded] = useState(false);
  const [minTimeElapsed, setMinTimeElapsed] = useState(false);

  const { rive, RiveComponent } = useRive({
    src,
    autoplay: true,
    onStateChange: (event) => {
      // Listen for animation completion events
      if (event.data && typeof event.data === 'string') {
        if (event.data.includes('end') || event.data.includes('complete')) {
          setAnimationEnded(true);
        }
      }
    },
  });

  // Set minimum time elapsed flag
  useEffect(() => {
    const timer = setTimeout(() => {
      setMinTimeElapsed(true);
    }, minDurationMs);
    return () => clearTimeout(timer);
  }, [minDurationMs]);

  // Listen for Rive animation events to detect when animation ends
  useEffect(() => {
    if (!rive) return;
    
    // Listen for when all animations complete
    const checkAnimationState = () => {
      try {
        // If the animation has stopped playing, consider it ended
        if (!rive.isPlaying) {
          setAnimationEnded(true);
        }
      } catch (error) {
        // Fallback: assume animation is done after a reasonable time
        console.log('Error checking animation state:', error);
      }
    };

    // Check animation state periodically
    const interval = setInterval(checkAnimationState, 100);
    
    return () => clearInterval(interval);
  }, [rive]);

  // When both conditions are met (animation ended AND minimum time elapsed), start the exit sequence
  useEffect(() => {
    if (phase !== "show" || !animationEnded || !minTimeElapsed) return;
    
    const startExitSequence = () => {
      try {
        // Ensure animation is stopped
        if (rive) {
          rive.stop();
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
      } catch (error) {
        console.log('Error during exit sequence:', error);
      }
      // Start fading/moving
      if (onFadeStart) onFadeStart();
      setPhase("move");
    };

    // Small delay to ensure smooth transition
    const timer = setTimeout(startExitSequence, 200);
    return () => clearTimeout(timer);
  }, [phase, animationEnded, minTimeElapsed, rive, onFadeStart]);

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
