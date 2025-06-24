// import { useEffect, useRef } from "react";

// interface Star {
//   x: number;
//   y: number;
//   z: number;
//   radius: number;
//   speed: number;
// }

// const STAR_COUNT = 200;
// const MAX_DEPTH = 3;

// export function Starfield() {
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const stars = useRef<Star[]>([]);
//   const directionRef = useRef({ x: 0, y: 1 }); // default drift downward
//   const lastMoveRef = useRef(performance.now());

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const ctx = canvas.getContext("2d");
//     if (!ctx) return;

//     const resize = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//       initStars();
//     };

//     const initStars = () => {
//       stars.current = Array.from({ length: STAR_COUNT }, () => ({
//         x: Math.random() * canvas.width,
//         y: Math.random() * canvas.height,
//         z: Math.random() * MAX_DEPTH,
//         radius: Math.random() * 1.2 + 0.6,
//         speed: Math.random() * 0.1 + 0.15,
//       }));
//     };

//     resize(); // initial
//     window.addEventListener("resize", resize);

//     const onMouseMove = (e: MouseEvent) => {
//       const dx = e.movementX;
//       const dy = e.movementY;

//       // Normalize drift direction
//       const mag = Math.sqrt(dx * dx + dy * dy);
//       if (mag > 0) {
//         directionRef.current.x = dx / mag;
//         directionRef.current.y = dy / mag;
//         lastMoveRef.current = performance.now();
//       }
//     };

//     window.addEventListener("mousemove", onMouseMove);

//     const animate = () => {
//       const now = performance.now();
//       const idle = now - lastMoveRef.current > 1200;

//       if (idle) {
//         // Reset to slow downward drift
//         directionRef.current = { x: 0, y: 1 };
//       }

//       ctx.clearRect(0, 0, canvas.width, canvas.height);

//       for (const star of stars.current) {
//         // Apply parallax drift
//         star.x += directionRef.current.x * star.speed * (1 + star.z);
//         star.y += directionRef.current.y * star.speed * (1 + star.z);

//         if (
//           star.y > canvas.height ||
//           star.x > canvas.width ||
//           star.x < 0 ||
//           star.y < 0
//         ) {
//           // Reset star position randomly
//           star.x = Math.random() * canvas.width;
//           star.y = 0;
//         }

//         const alpha = 0.1 + (1 - star.z / MAX_DEPTH) * 0.25;

//         ctx.beginPath();
//         ctx.arc(star.x, star.y, star.radius, 0, 2 * Math.PI);
//         ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
//         ctx.fill();
//       }

//       requestAnimationFrame(animate);
//     };

//     animate();

//     return () => {
//       window.removeEventListener("resize", resize);
//       window.removeEventListener("mousemove", onMouseMove);
//     };
//   }, []);

//   return (
//     <canvas
//       ref={canvasRef}
//       className="pointer-events-none fixed inset-0 -z-10"
//     />
//   );
// }

import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  z: number;
  radius: number;
  speed: number;
}

const STAR_COUNT = 200;
const MAX_DEPTH = 3;
const DECAY = 0.9; // inertia decay

export function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stars = useRef<Star[]>([]);
  const velocityRef = useRef({ x: 0, y: 0 }); // momentum vector

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    };

    const initStars = () => {
      stars.current = Array.from({ length: STAR_COUNT }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        z: Math.random() * MAX_DEPTH,
        radius: Math.random() * 1.2 + 0.6,
        speed: Math.random() * 0.2 + 0.1,
      }));
    };

    resize();
    window.addEventListener("resize", resize);

    const onMouseMove = (e: MouseEvent) => {
      const dx = e.movementX;
      const dy = e.movementY;

      const mag = Math.sqrt(dx * dx + dy * dy);
      if (mag === 0) return;

      const dirX = dx / mag;
      const dirY = dy / mag;

      // ✅ Linear impulse — no artificial cap
      const impulse = mag * 0.25;

      velocityRef.current.x += dirX * impulse;
      velocityRef.current.y += dirY * impulse;
    };

    window.addEventListener("mousemove", onMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const velocity = velocityRef.current;

      for (const star of stars.current) {
        star.x += velocity.x * star.speed * (1 + star.z);
        star.y += velocity.y * star.speed * (1 + star.z);

        const out =
          star.x < -50 ||
          star.x > canvas.width + 50 ||
          star.y < -50 ||
          star.y > canvas.height + 50;

        if (out) {
          star.x = Math.random() * canvas.width;
          star.y = Math.random() * canvas.height;
        }

        const alpha = 0.1 + (1 - star.z / MAX_DEPTH) * 0.25;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, 2 * Math.PI);
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.fill();
      }

      // Apply inertia decay
      velocity.x *= DECAY;
      velocity.y *= DECAY;

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 -z-10"
    />
  );
}
