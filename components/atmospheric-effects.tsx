"use client";

import { useEffect, useRef, useState } from "react";

// Particle system for falling ash/embers
function Particles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const particlesRef = useRef<
    Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      type: "ash" | "ember";
    }>
  >([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Initialize particles (fewer on mobile)
    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 15 : 35;

    particlesRef.current = Array.from({ length: particleCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2.5 + 0.5,
      speedX: Math.random() * 0.5 - 0.1,
      speedY: Math.random() * 0.8 + 0.3,
      opacity: Math.random() * 0.5 + 0.1,
      type: Math.random() > 0.65 ? "ember" : "ash",
    }));

    let isActive = true;

    // Handle visibility change
    const handleVisibility = () => {
      isActive = !document.hidden;
      if (isActive) animate();
    };
    document.addEventListener("visibilitychange", handleVisibility);

    // Animation loop
    const animate = () => {
      if (!isActive || !ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((particle) => {
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Reset particle if off screen
        if (particle.y > canvas.height) {
          particle.y = -10;
          particle.x = Math.random() * canvas.width;
        }
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.x < 0) particle.x = canvas.width;

        // Draw particle - Horror enhanced
        ctx.beginPath();
        if (particle.type === "ember") {
          // Blood-red embers with glow
          const gradient = ctx.createRadialGradient(
            particle.x, particle.y, 0,
            particle.x, particle.y, particle.size * 2
          );
          gradient.addColorStop(0, `rgba(220, 50, 50, ${particle.opacity})`);
          gradient.addColorStop(0.5, `rgba(180, 30, 30, ${particle.opacity * 0.5})`);
          gradient.addColorStop(1, `rgba(100, 20, 20, 0)`);
          ctx.fillStyle = gradient;
        } else {
          // Darker ash
          ctx.fillStyle = `rgba(140, 130, 120, ${particle.opacity * 0.4})`;
        }
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      isActive = false;
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", resizeCanvas);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-5"
      style={{ opacity: 0.8 }}
    />
  );
}

export function AtmosphericEffects() {
  return (
    <>
      <Particles />
    </>
  );
}
