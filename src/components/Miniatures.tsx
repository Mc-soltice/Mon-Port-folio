import {
  animate,
  motion, useMotionValue
} from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { loadImages, type ImageItem } from '../utils/loadImages';



const FULL_WIDTH_PX = 120;
const COLLAPSED_WIDTH_PX = 35;
const GAP_PX = 2;
const MARGIN_PX = 2;

function FramerCarouselThumbnails({
  folderPath,
  items,
}: {
  folderPath?: string;
  items?: string[];
}) {
  const [index, setIndex] = useState<number>(0);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [loadedItems, setLoadedItems] = useState<ImageItem[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const x = useMotionValue(0);

  // Charger les images du dossier si folderPath est fourni
  useEffect(() => {
    // 🔵 PRIORITÉ 1 : folderPath
    if (folderPath) {
      const images = loadImages(folderPath);
      setLoadedItems(images);
    }
    // 🟢 PRIORITÉ 2 : images statiques
    else if (items && items.length > 0) {
      const formatted = items.map((img, index) => ({
        id: index + 1,
        url: img,
        title: `Image ${index + 1}`,
      }));

      setLoadedItems(formatted);
    }
    // 🔴 fallback
    else {
      setLoadedItems([]);
    }

    setIndex(0);
  }, [folderPath, items]);

  // Animer le carousel lors du changement d'index
  useEffect(() => {
    if (!isDragging && containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth || 1;
      const targetX = -index * containerWidth;

      animate(x, targetX, {
        type: 'spring',
        stiffness: 300,
        damping: 30,
      });
    }
  }, [index, x, isDragging]);

  return (
    <div className='w-full mx-auto lg:p-2 p-2'>
      <div className='flex flex-col gap-3'>
        {/* Main Carousel */}
        <div className='relative overflow-hidden rounded-lg' ref={containerRef}>
          <motion.div
            className='flex'
            drag='x'
            dragElastic={0.2}
            dragMomentum={false}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={(_, info) => {
              setIsDragging(false);
              const containerWidth = containerRef.current?.offsetWidth || 1;
              const offset = info.offset.x;
              const velocity = info.velocity.x;

              let newIndex = index;

              // If fast swipe, use velocity
              if (Math.abs(velocity) > 500) {
                newIndex = velocity > 0 ? index - 1 : index + 1;
              }
              // Otherwise use offset threshold (30% of container width)
              else if (Math.abs(offset) > containerWidth * 0.3) {
                newIndex = offset > 0 ? index - 1 : index + 1;
              }

              // Clamp index
              newIndex = Math.max(0, Math.min(loadedItems.length - 1, newIndex));
              setIndex(newIndex);
            }}
            style={{ x }}
          >
            {loadedItems.map((item) => (
              <div key={item.id} className='shrink-0 w-full h-[350px]'>
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
                ? 'opacity-40 cursor-not-allowed'
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

          {/* Next Button */}
          <motion.button
            disabled={index === loadedItems.length - 1}
            onClick={() => setIndex((i) => Math.min(loadedItems.length - 1, i + 1))}
            className={`absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-transform z-10
              ${index === loadedItems.length - 1
                ? 'opacity-40 cursor-not-allowed'
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
        </div>

        <Thumbnails items={loadedItems} index={index} setIndex={setIndex} />
      </div>
    </div>
  );
}

function Thumbnails({
  items,
  index,
  setIndex,
}: {
  items: ImageItem[];
  index: number;
  setIndex: (index: number) => void;
}) {
  const thumbnailsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (thumbnailsRef.current) {
      let scrollPosition = 0;
      for (let i = 0; i < index; i++) {
        scrollPosition += COLLAPSED_WIDTH_PX + GAP_PX;
      }

      scrollPosition += MARGIN_PX;

      const containerWidth = thumbnailsRef.current.offsetWidth;
      const centerOffset = containerWidth / 2 - FULL_WIDTH_PX / 2;
      scrollPosition -= centerOffset;

      thumbnailsRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth',
      });
    }
  }, [index]);

  return (
    <div
      ref={thumbnailsRef}
      className='overflow-x-auto scrollbar-hide'
      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
    >
      <div className='flex gap-1 h-20 pb-2' style={{ width: 'fit-content' }}>
        {items.map((item, i) => (
          <motion.button
            key={item.id}
            onClick={() => setIndex(i)}
            initial={false}
            animate={i === index ? 'active' : 'inactive'}
            variants={{
              active: {
                width: FULL_WIDTH_PX,
                marginLeft: MARGIN_PX,
                marginRight: MARGIN_PX,
              },
              inactive: {
                width: COLLAPSED_WIDTH_PX,
                marginLeft: 0,
                marginRight: 0,
              },
            }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className='relative shrink-0 h-full overflow-hidden'
          >
            <img
              src={item.url}
              alt={item.title}
              className='w-full h-full object-cover pointer-events-none select-none'
            />
          </motion.button>
        ))}
      </div>
    </div>
  );
}

export default FramerCarouselThumbnails;
