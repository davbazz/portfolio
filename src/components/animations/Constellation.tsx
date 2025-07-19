import { useEffect, useRef } from "react";
import { motion } from "motion/react";

interface Dot {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  opacity: number;
}

interface Connection {
  dot1: Dot;
  dot2: Dot;
  opacity: number;
}

export function Constellation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dotsRef = useRef<Dot[]>([]);
  const connectionsRef = useRef<Connection[]>([]);
  const animationRef = useRef<number>(0);
  const mouseRef = useRef({ x: 0, y: 0 });

  const DOT_COUNT = 50;
  const MAX_DISTANCE = 150;
  const MOUSE_INFLUENCE = 80;
  const DOT_SPEED = 0.3;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const initializeDots = () => {
      dotsRef.current = Array.from({ length: DOT_COUNT }, (_, i) => ({
        id: i,
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * DOT_SPEED,
        vy: (Math.random() - 0.5) * DOT_SPEED,
        opacity: Math.random() * 0.5 + 0.2,
      }));
    };

    const getDistance = (dot1: Dot, dot2: Dot) => {
      return Math.sqrt((dot1.x - dot2.x) ** 2 + (dot1.y - dot2.y) ** 2);
    };

    const updateDots = () => {
      dotsRef.current.forEach((dot) => {
        // Update position
        dot.x += dot.vx;
        dot.y += dot.vy;

        // Bounce off edges
        if (dot.x <= 0 || dot.x >= canvas.width) dot.vx *= -1;
        if (dot.y <= 0 || dot.y >= canvas.height) dot.vy *= -1;

        // Keep dots within bounds
        dot.x = Math.max(0, Math.min(canvas.width, dot.x));
        dot.y = Math.max(0, Math.min(canvas.height, dot.y));

        // Mouse influence (subtle attraction)
        const mouseDistance = Math.sqrt(
          (dot.x - mouseRef.current.x) ** 2 + (dot.y - mouseRef.current.y) ** 2,
        );

        if (mouseDistance < MOUSE_INFLUENCE) {
          const force =
            ((MOUSE_INFLUENCE - mouseDistance) / MOUSE_INFLUENCE) * 0.001;
          const angle = Math.atan2(
            mouseRef.current.y - dot.y,
            mouseRef.current.x - dot.x,
          );
          dot.vx += Math.cos(angle) * force;
          dot.vy += Math.sin(angle) * force;
        }

        // Gradually vary opacity
        dot.opacity += (Math.random() - 0.5) * 0.005;
        dot.opacity = Math.max(0.1, Math.min(0.6, dot.opacity));
      });
    };

    const updateConnections = () => {
      connectionsRef.current = [];

      for (let i = 0; i < dotsRef.current.length; i++) {
        for (let j = i + 1; j < dotsRef.current.length; j++) {
          const dot1 = dotsRef.current[i];
          const dot2 = dotsRef.current[j];
          const distance = getDistance(dot1, dot2);

          if (distance < MAX_DISTANCE) {
            const opacity = (1 - distance / MAX_DISTANCE) * 0.15;
            connectionsRef.current.push({
              dot1,
              dot2,
              opacity,
            });
          }
        }
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw connections
      connectionsRef.current.forEach((connection) => {
        ctx.beginPath();
        ctx.moveTo(connection.dot1.x, connection.dot1.y);
        ctx.lineTo(connection.dot2.x, connection.dot2.y);
        ctx.strokeStyle = `rgba(156, 163, 175, ${connection.opacity})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      // Draw dots
      dotsRef.current.forEach((dot) => {
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(229, 231, 235, ${dot.opacity})`;
        ctx.fill();
      });
    };

    const animate = () => {
      updateDots();
      updateConnections();
      draw();
      animationRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY,
      };
    };

    const handleResize = () => {
      resizeCanvas();
      initializeDots();
    };

    resizeCanvas();
    initializeDots();
    animate();

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <motion.canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 -z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, ease: "easeInOut" }}
    />
  );
}
