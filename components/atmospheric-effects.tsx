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
      size: Math.random() * 2 + 0.5,
      speedX: Math.random() * 0.5 - 0.1,
      speedY: Math.random() * 0.8 + 0.3,
      opacity: Math.random() * 0.4 + 0.1,
      type: Math.random() > 0.7 ? "ember" : "ash",
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

        // Draw particle
        ctx.beginPath();
        if (particle.type === "ember") {
          ctx.fillStyle = `rgba(255, 120, 50, ${particle.opacity})`;
        } else {
          ctx.fillStyle = `rgba(180, 160, 150, ${particle.opacity * 0.6})`;
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

// Cloud layers
function Clouds() {
  return (
    <div className="fixed inset-0 pointer-events-none z-1 overflow-hidden motion-safe:block motion-reduce:hidden">
      {/* Cloud layer 1 - slow moving, most visible */}
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          background: `
            radial-gradient(ellipse 900px 500px at 15% 25%, rgba(180, 60, 80, 0.6) 0%, transparent 60%),
            radial-gradient(ellipse 700px 400px at 85% 55%, rgba(150, 50, 70, 0.5) 0%, transparent 60%),
            radial-gradient(ellipse 800px 450px at 50% 85%, rgba(120, 40, 60, 0.55) 0%, transparent 60%)
          `,
          animation: "cloud-drift-1 60s ease-in-out infinite",
        }}
      />

      {/* Cloud layer 2 - medium moving */}
      <div
        className="absolute inset-0 opacity-[0.25]"
        style={{
          background: `
            radial-gradient(ellipse 600px 350px at 75% 35%, rgba(160, 50, 70, 0.5) 0%, transparent 60%),
            radial-gradient(ellipse 550px 300px at 25% 65%, rgba(130, 40, 60, 0.45) 0%, transparent 60%)
          `,
          animation: "cloud-drift-2 45s ease-in-out infinite",
        }}
      />

      {/* Cloud layer 3 - faster accent */}
      <div
        className="absolute inset-0 opacity-[0.2]"
        style={{
          background: `
            radial-gradient(ellipse 500px 280px at 65% 15%, rgba(200, 70, 90, 0.4) 0%, transparent 55%),
            radial-gradient(ellipse 450px 250px at 35% 45%, rgba(170, 55, 75, 0.35) 0%, transparent 55%)
          `,
          animation: "cloud-drift-3 35s ease-in-out infinite",
        }}
      />

      <style jsx>{`
        @keyframes cloud-drift-1 {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(30px, 15px) scale(1.02);
          }
          50% {
            transform: translate(-20px, 30px) scale(1.01);
          }
          75% {
            transform: translate(-30px, -10px) scale(0.99);
          }
        }
        @keyframes cloud-drift-2 {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(-40px, 20px) scale(1.03);
          }
          66% {
            transform: translate(25px, -15px) scale(0.98);
          }
        }
        @keyframes cloud-drift-3 {
          0%,
          100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(50px, -25px);
          }
        }
      `}</style>
    </div>
  );
}

export function AtmosphericEffects() {
  return (
    <>
      <Clouds />
      <Particles />
    </>
  );
}
