'use client';
import { animate, motion, useMotionValue } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { loadImages, type ImageItem } from '../utils/loadImages';

interface FramerAutoplayCarouselProps {
  folderPath?: string;
  items?: ImageItem[];
  duration?: number;
}

export default function FramerAutoplayCarousel({
  folderPath,
  items: propItems,
  duration = 3000
}: FramerAutoplayCarouselProps) {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [loadedItems, setLoadedItems] = useState<ImageItem[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);

  // Charger les images
  useEffect(() => {
    if (folderPath) {
      const images = loadImages(folderPath);
      setLoadedItems(images);
    } else if (propItems && propItems.length > 0) {
      setLoadedItems(propItems);
    } else {
      setLoadedItems([]);
    }
    setIndex(0);
  }, [folderPath, propItems]);

  useEffect(() => {
    if (containerRef.current && loadedItems.length > 0) {
      const containerWidth = containerRef.current.offsetWidth || 1;
      const targetX = -index * containerWidth;

      animate(x, targetX, {
        type: 'spring',
        stiffness: 300,
        damping: 30,
      });
    }
  }, [index, loadedItems.length, x]);

  // Autoplay logic
  useEffect(() => {
    if (!isHovered && loadedItems.length > 0) {
      const interval = setInterval(() => {
        setIndex((current) => (current + 1) % loadedItems.length);
      }, duration);

      return () => clearInterval(interval);
    }
  }, [isHovered, duration, loadedItems.length]);

  if (loadedItems.length === 0) {
    return <div className="w-full h-[400px] bg-gray-200 rounded-lg flex items-center justify-center">
      <p className="text-gray-500">Aucune image disponible</p>
    </div>;
  }

  return (
    <div className='w-full lg:p-2 sm:p-4 p-2'>
      <h2 className='text-2xl mb-4 sr-only'>
        Autoplay Carousel (Hover to Pause)
      </h2>
      <div className='flex flex-col gap-3'>
        <div
          className='relative overflow-hidden rounded-lg'
          ref={containerRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.div className='flex' style={{ x }}>
            {loadedItems.map((item) => (
              <div key={item.id} className='shrink-0 w-full h-[400px]'>
                <img
                  src={item.url}
                  alt={item.title}
                  className='w-full h-full object-cover rounded-lg select-none pointer-events-none'
                  draggable={false}
                />
              </div>
            ))}
          </motion.div>

          {/* Navigation Buttons */}
          <motion.button
            disabled={index === 0}
            onClick={() => setIndex((i) => Math.max(0, i - 1))}
            className={`absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-transform z-10
              ${index === 0
                ? 'opacity-40 cursor-not-allowed bg-neutral-300'
                : 'bg-white hover:scale-110 hover:opacity-100 opacity-70'
              }`}
          >
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M15 19l-7-7 7-7'
              />
            </svg>
          </motion.button>

          <motion.button
            disabled={index === loadedItems.length - 1}
            onClick={() => setIndex((i) => Math.min(loadedItems.length - 1, i + 1))}
            className={`absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-transform z-10
              ${index === loadedItems.length - 1
                ? 'opacity-40 cursor-not-allowed bg-neutral-300'
                : 'bg-white hover:scale-110 hover:opacity-100 opacity-70'
              }`}
          >
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M9 5l7 7-7 7'
              />
            </svg>
          </motion.button>

          {/* Progress Indicator */}
          <div className='absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2'>
            {loadedItems.map((_, i) => (
              <button
                key={loadedItems[i]?.id ?? `dot-${i}`}
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition-all ${i === index ? 'w-8 bg-white' : 'w-2 bg-white/50'
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}