import { useEffect, useRef } from 'react';

const CanvasBG = ({ isDarkMode }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    ctx.fillStyle = isDarkMode ? 'rgb(15, 23, 42)' : 'rgb(255, 255, 255)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const particles = [];
    const particleCount = 80;

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.z = Math.random() * 1500;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.z -= 2;

        if (this.z <= 0 || this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
          this.reset();
        }
      }

      draw() {
        const scale = 1000 / (1000 + this.z);
        const x2d = (this.x - canvas.width / 2) * scale + canvas.width / 2;
        const y2d = (this.y - canvas.height / 2) * scale + canvas.height / 2;
        const size = scale * 3;

        ctx.beginPath();
        ctx.arc(x2d, y2d, size, 0, Math.PI * 2);
        const opacity = 1 - this.z / 1500;
        ctx.fillStyle = `rgba(59, 130, 246, ${opacity})`;
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    let animationFrameId;
    let lastTheme = isDarkMode;

    const animate = () => {
      if (lastTheme !== isDarkMode) {
        ctx.fillStyle = isDarkMode ? 'rgb(15, 23, 42)' : 'rgb(255, 255, 255)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        lastTheme = isDarkMode;
      }

      if (isDarkMode) {
        ctx.fillStyle = 'rgba(15, 23, 42, 0.1)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        particles.forEach(particle => {
          particle.update();
          particle.draw();
        });
      } else {
        ctx.fillStyle = 'rgb(255, 255, 255)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(particle => {
          particle.update();
        });
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      ctx.fillStyle = isDarkMode ? 'rgb(15, 23, 42)' : 'rgb(255, 255, 255)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isDarkMode]);

  return (
    <>
      <canvas 
        ref={canvasRef} 
        className="fixed inset-0 z-0" 
        style={{ backgroundColor: isDarkMode ? 'rgb(15, 23, 42)' : 'rgb(255, 255, 255)' }}
      />
      
      {!isDarkMode && (
        <div className="fixed inset-0 z-0 pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <circle cx="10%" cy="30%" r="300" fill="none" stroke="rgba(59, 130, 246, 0.08)" strokeWidth="2" />
            <circle cx="10%" cy="30%" r="400" fill="none" stroke="rgba(59, 130, 246, 0.05)" strokeWidth="2" />
            <circle cx="10%" cy="30%" r="500" fill="none" stroke="rgba(59, 130, 246, 0.03)" strokeWidth="2" />
            
            <circle cx="90%" cy="60%" r="250" fill="none" stroke="rgba(168, 85, 247, 0.08)" strokeWidth="2" />
            <circle cx="90%" cy="60%" r="350" fill="none" stroke="rgba(168, 85, 247, 0.05)" strokeWidth="2" />
            <circle cx="90%" cy="60%" r="450" fill="none" stroke="rgba(168, 85, 247, 0.03)" strokeWidth="2" />
            
            <circle cx="85%" cy="15%" r="80" fill="rgba(6, 182, 212, 0.1)" stroke="none" />
            <circle cx="15%" cy="85%" r="100" fill="rgba(168, 85, 247, 0.08)" stroke="none" />
            
            <path d="M -100 300 Q 300 100, 600 300" fill="none" stroke="rgba(59, 130, 246, 0.06)" strokeWidth="2" />
            <path d="M 800 -100 Q 1000 200, 800 500" fill="none" stroke="rgba(168, 85, 247, 0.06)" strokeWidth="2" />
            
            <line x1="0" y1="0" x2="30%" y2="100%" stroke="rgba(59, 130, 246, 0.04)" strokeWidth="1" />
            <line x1="100%" y1="0" x2="70%" y2="100%" stroke="rgba(168, 85, 247, 0.04)" strokeWidth="1" />
          </svg>
        </div>
      )}
    </>
  );
};

export default CanvasBG;