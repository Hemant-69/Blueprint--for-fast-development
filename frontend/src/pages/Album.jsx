import { useEffect, useRef, useCallback } from 'react';

const images = [
  'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=800&q=80',
  'https://images.unsplash.com/photo-1682687982501-1e58f81bef0c?w=800&q=80',
  'https://images.unsplash.com/photo-1682687220063-4742bd7fd538?w=800&q=80',
  'https://images.unsplash.com/photo-1682692327050-0cecb4c3c2b1?w=800&q=80',
  'https://images.unsplash.com/photo-1682687981630-cefe9cd73072?w=800&q=80',
  'https://images.unsplash.com/photo-1682687219573-3118ee6500df?w=800&q=80',
  'https://images.unsplash.com/photo-1682687982185-531d09ec56fc?w=800&q=80',
];

const Album = () => {
  const carouselRef = useRef(null);
  const rotationRef = useRef(0);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);

  const updateRotation = useCallback(() => {
    if (carouselRef.current) {
      carouselRef.current.style.transform = `rotateY(${rotationRef.current}deg)`;
    }
  }, []);

  const handleWheel = useCallback((e) => {
    rotationRef.current -= Math.sign(e.deltaY) * 20;
    updateRotation();
  }, [updateRotation]);

  const handleMouseDown = useCallback((e) => {
    isDraggingRef.current = true;
    startXRef.current = e.clientX - rotationRef.current;
  }, []);

  const handleMouseMove = useCallback((e) => {
    if (!isDraggingRef.current) return;
    rotationRef.current = e.clientX - startXRef.current;
    requestAnimationFrame(updateRotation);
  }, [updateRotation]);

  const handleMouseUp = useCallback(() => {
    isDraggingRef.current = false;
  }, []);

  const handleTouchStart = useCallback((e) => {
    isDraggingRef.current = true;
    startXRef.current = e.touches[0].clientX - rotationRef.current;
  }, []);

  const handleTouchMove = useCallback((e) => {
    if (!isDraggingRef.current) return;
    rotationRef.current = e.touches[0].clientX - startXRef.current;
    requestAnimationFrame(updateRotation);
  }, [updateRotation]);

  useEffect(() => {
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchend', handleMouseUp);
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [handleMouseUp]);

  return (
    <div
      className="min-h-[calc(100vh-6rem)] flex flex-col items-center justify-center overflow-hidden bg-surface relative w-full cursor-grab active:cursor-grabbing select-none"
      onMouseMove={handleMouseMove}
      onMouseDown={handleMouseDown}
      onTouchMove={handleTouchMove}
      onTouchStart={handleTouchStart}
      onWheel={handleWheel}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-primary-dark)_0%,_transparent_70%)] opacity-20 pointer-events-none" />

      {/* <div className="text-center absolute top-12 w-full z-10 pointer-events-none">
        <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-primary-light to-accent bg-clip-text text-transparent mb-4">3D Image Gallery</h1>
        <p className="text-slate-400 text-lg">Scroll or drag to rotate</p>
      </div> */}

      <div
        className="w-[280px] h-[380px] sm:w-[320px] sm:h-[420px] relative mt-20"
        style={{ perspective: '1200px' }}
      >
        <div
          ref={carouselRef}
          className="w-full h-full absolute transition-transform duration-300 ease-out will-change-transform"
          style={{
            transformStyle: 'preserve-3d',
            transform: `rotateY(0deg)`
          }}
        >
          {images.map((img, i) => {
            const angle = (i * 360) / images.length;
            return (
              <div
                key={i}
                className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl shadow-primary/20 hover:shadow-primary/50 transition-all duration-300 group ring-1 ring-white/10 hover:ring-primary/50"
                style={{
                  transform: `rotateY(${angle}deg) translateZ(380px)`,
                  willChange: 'transform, opacity'
                }}
              >
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-300 z-10 pointer-events-none" />

                <img
                  src={img}
                  alt={`Album frame ${i + 1}`}
                  className="w-full h-full object-cover pointer-events-none bg-slate-800"
                  draggable="false"
                  loading={i < 3 ? "eager" : "lazy"}
                  decoding="async"
                />

                <div className="absolute bottom-0 left-0 w-full p-6 text-white z-20 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                  <h3 className="text-xl font-bold">Image {i + 1}</h3>
                  <p className="text-sm text-slate-300 mt-1">Stunning 3D view</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Album;
