import { useEffect, useRef, useCallback, useState } from 'react';

const allImages = [
  { url: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=800&q=80', title: 'Campus Building', category: 'Campus' },
  { url: 'https://images.unsplash.com/photo-1682687982501-1e58f81bef0c?w=800&q=80', title: 'Annual Tech Fest', category: 'Events' },
  { url: 'https://images.unsplash.com/photo-1682687220063-4742bd7fd538?w=800&q=80', title: 'Mechanical Lab', category: 'Labs' },
  { url: 'https://images.unsplash.com/photo-1682692327050-0cecb4c3c2b1?w=800&q=80', title: 'Cultural Fest', category: 'Events' },
  { url: 'https://images.unsplash.com/photo-1682687981630-cefe9cd73072?w=800&q=80', title: 'Library', category: 'Campus' },
  { url: 'https://images.unsplash.com/photo-1682687219573-3118ee6500df?w=800&q=80', title: 'Workshop Practice', category: 'Labs' },
  { url: 'https://images.unsplash.com/photo-1682687982185-531d09ec56fc?w=800&q=80', title: 'Student Activities', category: 'Events' },
];

const categories = ['All', 'Campus', 'Events', 'Labs'];

const Album = () => {
  const carouselRef = useRef(null);
  const rotationRef = useRef(0);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);

  const [activeCategory, setActiveCategory] = useState('All');

  const images =
    activeCategory === 'All'
      ? allImages
      : allImages.filter((img) => img.category === activeCategory);

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

  useEffect(() => {
    window.addEventListener('mouseup', handleMouseUp);
    return () => window.removeEventListener('mouseup', handleMouseUp);
  }, [handleMouseUp]);

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-start pt-24 bg-surface text-center px-4"
      onMouseMove={handleMouseMove}
      onMouseDown={handleMouseDown}
      onWheel={handleWheel}
    >
      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
        College Gallery
      </h1>
      <p className="text-slate-400 mb-6">
        Explore campus life, events, and facilities
      </p>

      {/* Categories */}
      <div className="flex gap-3 mb-10 flex-wrap justify-center">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setActiveCategory(cat);
              rotationRef.current = 0;
              updateRotation();
            }}
            className={`px-4 py-2 rounded-full text-sm transition ${
              activeCategory === cat
                ? 'bg-primary text-white'
                : 'bg-white/5 text-slate-300 hover:bg-white/10'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Instruction */}
      <p className="text-xs text-slate-500 mb-6">
        Drag or scroll to rotate gallery
      </p>

      {/* Carousel */}
      <div
        className="w-[280px] h-[360px] sm:w-[320px] sm:h-[400px] relative"
        style={{ perspective: '1200px' }}
      >
        <div
          ref={carouselRef}
          className="w-full h-full absolute transition-transform duration-300 ease-out"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {images.map((img, i) => {
            const angle = (i * 360) / images.length;
            return (
              <div
                key={i}
                className="absolute inset-0 rounded-2xl overflow-hidden shadow-xl"
                style={{
                  transform: `rotateY(${angle}deg) translateZ(380px)`
                }}
              >
                <img
                  src={img.url}
                  alt={img.title}
                  className="w-full h-full object-cover"
                  draggable="false"
                />

                {/* Caption */}
                <div className="absolute bottom-0 w-full p-4 bg-black/60 text-white text-left">
                  <h3 className="text-sm font-semibold">{img.title}</h3>
                  <p className="text-xs text-slate-300">{img.category}</p>
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