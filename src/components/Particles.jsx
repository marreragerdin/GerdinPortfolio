import { useEffect, useRef } from 'react';

const LETTERS = ['G', 'E', 'R', 'D', 'I', 'N'];

function Particles({ side = 'left' }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let particles = [];
    const particleCount = 28; // Elegant quantity

    // Mouse coordinates relative to the canvas bounding box
    let mouse = { x: -1000, y: -1000 };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      // Move mouse off-screen when cursor leaves window
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    // Handle resizing to stretch to parent container bounds
    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
      }
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Create a particle item
    const createParticle = (initYAtBottom = false) => {
      const baseVx = (Math.random() * 0.4 - 0.2); // Default drift
      const baseVy = -(Math.random() * 0.6 + 0.2); // Default drift
      return {
        x: Math.random() * canvas.width,
        y: initYAtBottom ? canvas.height + 30 : Math.random() * canvas.height,
        vx: baseVx,
        vy: baseVy,
        baseVx: baseVx,
        baseVy: baseVy,
        size: Math.floor(Math.random() * 90 + 60), // Large premium watermarks
        opacity: Math.random() * 0.12 + 0.05, // Subtle watermark style opacity
        letter: LETTERS[Math.floor(Math.random() * LETTERS.length)],
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() * 0.01 - 0.005) // Slow spinning
      };
    };

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(createParticle(false));
    }

    // Animation Loop
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, idx) => {
        // 1. Calculate proximity pushing force
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const forceRadius = 150; // Interaction zone radius

        if (dist < forceRadius) {
          // Exponential pushing force: stronger as cursor gets closer
          const force = (forceRadius - dist) / forceRadius;
          const angle = Math.atan2(dy, dx);
          
          // Push vector
          const pushX = Math.cos(angle) * force * 6;
          const pushY = Math.sin(angle) * force * 6;

          // Accelerate velocity outwards
          p.vx += pushX * 0.15;
          p.vy += pushY * 0.15;
        }

        // 2. Spring relaxation back to organic base speeds
        p.vx += (p.baseVx - p.vx) * 0.04;
        p.vy += (p.baseVy - p.vy) * 0.04;

        // Apply updated velocities
        p.x += p.vx;
        p.y += p.vy;
        p.rotation += p.rotationSpeed;

        // Reset if it drifts off the top or sides
        if (p.y < -120 || p.x < -120 || p.x > canvas.width + 120) {
          particles[idx] = createParticle(true);
          return;
        }

        // Draw letter particle
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);

        // Draw crisp outlined letters or solid letters with low opacity
        ctx.font = `bold ${p.size}px 'Montserrat', sans-serif`;
        ctx.fillStyle = `rgba(0, 0, 0, ${p.opacity})`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(p.letter, 0, 0);

        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Position styles based on side prop to lock them only to left/right columns
  const positionStyle = {
    position: 'fixed',
    top: 0,
    bottom: 0,
    width: 'calc((100vw - 1000px) / 2)',
    height: '100%',
    pointerEvents: 'none',
    zIndex: 0,
    overflow: 'hidden'
  };

  const sideStyle = side === 'left' ? { left: 0 } : { right: 0 };

  return (
    <div style={{ ...positionStyle, ...sideStyle }}>
      <canvas ref={canvasRef} style={{ display: 'block', width: '100%', height: '100%' }} />
    </div>
  );
}

export default Particles;
