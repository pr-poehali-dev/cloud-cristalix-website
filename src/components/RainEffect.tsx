import { useMemo } from 'react';

const RainEffect = () => {
  const raindrops = useMemo(() => 
    Array.from({ length: 60 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      duration: 1 + Math.random() * 1.5,
      delay: Math.random() * 5,
      opacity: 0.4 + Math.random() * 0.4,
      height: 80 + Math.random() * 100,
    })), []
  );

  const backgroundDrops = useMemo(() =>
    Array.from({ length: 200 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: 2 + Math.random() * 5,
      opacity: 0.1 + Math.random() * 0.25,
      animationDelay: Math.random() * 4,
      animationDuration: 2.5 + Math.random() * 2.5,
    })), []
  );

  const driftingDrops = useMemo(() =>
    Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: 8 + Math.random() * 16,
      opacity: 0.15 + Math.random() * 0.3,
      animationDelay: Math.random() * 6,
      animationDuration: 8 + Math.random() * 6,
    })), []
  );

  const ripples = useMemo(() =>
    Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: 10 + Math.random() * 80,
      top: 10 + Math.random() * 80,
      size: 40 + Math.random() * 80,
      opacity: 0.08 + Math.random() * 0.15,
      animationDelay: Math.random() * 8,
      animationDuration: 4 + Math.random() * 4,
    })), []
  );

  return (
    <>
      <div className="fixed inset-0 bg-black/15 pointer-events-none z-[998]" />
      
      <div className="fixed inset-0 pointer-events-none z-[996] overflow-hidden">
        {ripples.map((ripple) => (
          <div
            key={`ripple-${ripple.id}`}
            className="absolute rounded-full will-change-transform border-2 border-blue-400/30"
            style={{
              left: `${ripple.left}%`,
              top: `${ripple.top}%`,
              width: `${ripple.size}px`,
              height: `${ripple.size}px`,
              opacity: ripple.opacity,
              animation: `ripple ${ripple.animationDuration}s ease-out infinite`,
              animationDelay: `${ripple.animationDelay}s`,
            }}
          />
        ))}
      </div>

      <div className="fixed inset-0 pointer-events-none z-[997] overflow-hidden">
        {backgroundDrops.map((drop) => (
          <div
            key={`bg-${drop.id}`}
            className="absolute rounded-full will-change-transform"
            style={{
              left: `${drop.left}%`,
              top: `${drop.top}%`,
              width: `${drop.size}px`,
              height: `${drop.size}px`,
              opacity: drop.opacity,
              background: 'radial-gradient(circle, rgba(147, 197, 253, 0.6) 0%, rgba(191, 219, 254, 0.3) 50%, transparent 100%)',
              filter: 'blur(1.5px)',
              animation: `rain-pulse ${drop.animationDuration}s ease-in-out infinite`,
              animationDelay: `${drop.animationDelay}s`,
            }}
          />
        ))}
        {driftingDrops.map((drop) => (
          <div
            key={`drift-${drop.id}`}
            className="absolute will-change-transform"
            style={{
              left: `${drop.left}%`,
              top: `${drop.top}%`,
            }}
          >
            <div
              className="rounded-full"
              style={{
                width: `${drop.size}px`,
                height: `${drop.size}px`,
                opacity: drop.opacity,
                background: 'radial-gradient(circle, rgba(147, 197, 253, 0.5) 0%, rgba(191, 219, 254, 0.25) 40%, transparent 70%)',
                filter: 'blur(3px)',
                animation: `drift ${drop.animationDuration}s ease-in-out infinite`,
                animationDelay: `${drop.animationDelay}s`,
                boxShadow: '0 0 20px rgba(147, 197, 253, 0.4), 0 0 40px rgba(147, 197, 253, 0.2)',
              }}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default RainEffect;