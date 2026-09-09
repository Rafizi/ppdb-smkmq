"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, type PanInfo } from "framer-motion";
import { Maximize2, X } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import heroImage from "@/assets/hero-school.jpg";

interface Card {
  id: number;
  contentType: 1 | 2 | 3;
}

interface CardData {
  title: string;
  description: string;
  image: string;
}

const HERO_IMG = heroImage;

const cardData: Record<1 | 2 | 3, CardData> = {
  1: {
    title: "Teknik Komputer & Jaringan",
    description: "Bersertifikasi Cisco & MikroTik",
    image: HERO_IMG,
  },
  2: {
    title: "Rekayasa Perangkat Lunak",
    description: "Proyek nyata dari client industri",
    image: HERO_IMG,
  },
  3: {
    title: "Kurikulum Tersertifikasi",
    description: "Bermitra dengan Cisco, MikroTik, ITC & LSP Telematika",
    image: HERO_IMG,
  },
};

const initialCards: Card[] = [
  { id: 1, contentType: 1 },
  { id: 2, contentType: 2 },
  { id: 3, contentType: 3 },
];

// Scaled and tuned for a commanding hero centerpiece with responsive clearance
const positionStyles = [
  { scale: 1, y: 20 },
  { scale: 0.94, y: -25 },
  { scale: 0.88, y: -65 },
];

const exitAnimation = { y: 160, scale: 0.95, opacity: 0, zIndex: 10 };
const enterAnimation = { y: -25, scale: 0.88, opacity: 0.7 };

function CardContent({
  contentType,
  onImageClick,
}: {
  contentType: 1 | 2 | 3;
  onImageClick: (data: CardData) => void;
}) {
  const data = cardData[contentType];
  return (
    <div className="flex h-full w-full flex-col gap-2.5 sm:gap-3">
      <div
        className="group relative flex flex-1 min-h-0 w-full items-center justify-center overflow-hidden rounded-2xl outline outline-black/10 transition-all dark:outline-white/10"
        onClick={(e) => {
          e.stopPropagation();
          onImageClick(data);
        }}
        title="Klik untuk memperbesar gambar"
      >
        <img
          src={data.image}
          alt={data.title}
          draggable={false}
          className="h-full w-full select-none object-cover rounded-[inherit] transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
        <div className="absolute top-3 left-3 sm:top-3.5 sm:left-3.5 flex items-center gap-1.5 rounded-full bg-black/60 px-2.5 py-1 text-xs font-semibold text-white shadow-md backdrop-blur-md">
          <Logo size="xs" />
          <span className="text-[11px] font-bold">SMK MQ</span>
        </div>
        <div className="absolute top-3 right-3 sm:top-3.5 sm:right-3.5 flex items-center gap-1.5 rounded-full bg-black/60 px-2.5 py-1 sm:px-3 sm:py-1.5 text-xs font-semibold text-white shadow-md backdrop-blur-md transition-transform duration-200 group-hover:scale-105">
          <Maximize2 className="size-3 sm:size-3.5" aria-hidden="true" />
          <span>Lihat Foto</span>
        </div>
      </div>
      <div className="flex shrink-0 w-full flex-col gap-1 sm:gap-1.5 px-3 pb-2.5 pt-1 sm:px-3.5 sm:pb-3 sm:pt-1.5">
        <span className="truncate font-display text-base font-bold text-navy sm:text-lg lg:text-xl xl:text-2xl">
          {data.title}
        </span>
        <span className="truncate text-xs sm:text-sm lg:text-base text-muted-foreground">
          {data.description}
        </span>
      </div>
    </div>
  );
}

function AnimatedCard({
  card,
  index,
  isAnimating,
  onCardClick,
  onImageClick,
  onDragSwipe,
}: {
  card: Card;
  index: number;
  isAnimating: boolean;
  onCardClick: () => void;
  onImageClick: (data: CardData) => void;
  onDragSwipe: () => void;
}) {
  const isTop = index === 0;
  const { scale, y } = positionStyles[index] ?? positionStyles[2]!;
  const zIndex = isTop && isAnimating ? 10 : 3 - index;
  const exitAnim = isTop ? exitAnimation : undefined;
  const initialAnim = index === 2 ? enterAnimation : false;

  const handleDragEnd = (
    _e: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) => {
    if (!isTop) return;
    // Trigger swipe transition if dragged horizontally beyond 50px or flicked quickly
    if (Math.abs(info.offset.x) > 50 || Math.abs(info.velocity.x) > 300) {
      onDragSwipe();
    }
  };

  return (
    <motion.div
      key={card.id}
      initial={initialAnim}
      animate={{ y, scale, opacity: 1 }}
      {...(exitAnim ? { exit: exitAnim } : {})}
      transition={{ type: "spring", duration: 0.8, bounce: 0 }}
      drag={isTop ? "x" : false}
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.6}
      onDragEnd={handleDragEnd}
      onClick={() => {
        if (isTop) onCardClick();
      }}
      style={{ zIndex, left: "50%", x: "-50%" }}
      className={`absolute bottom-5 sm:bottom-7 lg:bottom-8 flex h-[380px] w-[calc(100%-1rem)] max-w-[320px] sm:h-[480px] sm:w-[calc(100%-1.5rem)] sm:max-w-[450px] lg:h-[500px] lg:w-[calc(100%-1.5rem)] lg:max-w-[460px] xl:h-[570px] xl:w-[calc(100%-2rem)] xl:max-w-[540px] 2xl:h-[630px] 2xl:w-[calc(100%-2rem)] 2xl:max-w-[600px] items-center justify-center will-change-transform select-none touch-pan-y ${
        isTop
          ? "cursor-grab active:cursor-grabbing"
          : "pointer-events-none"
      }`}
    >
      <div
        className={`h-full w-full overflow-hidden rounded-3xl border border-border bg-card p-2.5 sm:p-3 shadow-lg ${
          isTop ? "hover:border-primary/40 shadow-xl" : ""
        }`}
      >
        <CardContent
          contentType={card.contentType}
          onImageClick={onImageClick}
        />
      </div>
    </motion.div>
  );
}

export default function AnimatedCardStack() {
  const [cards, setCards] = useState(initialCards);
  const [isAnimating, setIsAnimating] = useState(false);
  const [nextId, setNextId] = useState(4);
  const [isPaused, setIsPaused] = useState(false);
  const [previewImage, setPreviewImage] = useState<CardData | null>(null);
  const isDragSwipingRef = useRef(false);

  const handleAnimate = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    const currentLast = cards[2] ?? cards[cards.length - 1]!;
    const nextContentType = ((currentLast.contentType % 3) + 1) as 1 | 2 | 3;
    setCards([...cards.slice(1), { id: nextId, contentType: nextContentType }]);
    setNextId((prev) => prev + 1);
    setIsAnimating(false);
  };

  const handleDragSwipe = () => {
    isDragSwipingRef.current = true;
    handleAnimate();
    setTimeout(() => {
      isDragSwipingRef.current = false;
    }, 100);
  };

  const handleCardClick = () => {
    if (isDragSwipingRef.current) return;
    handleAnimate();
  };

  const handleOpenPreview = (data: CardData) => {
    if (isDragSwipingRef.current) return;
    setPreviewImage(data);
  };

  // Close preview on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setPreviewImage(null);
      }
    };
    if (previewImage) {
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }
    return undefined;
  }, [previewImage]);

  // Autoplay with pause when hovered, modal is active, or reduced motion preferred
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion || isPaused || previewImage !== null) {
      return undefined;
    }
    const interval = setInterval(handleAnimate, 4500);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cards, isPaused, previewImage]);

  return (
    <>
      <div
        className="relative mx-auto h-[480px] w-full max-w-[340px] p-2 sm:h-[580px] sm:max-w-[480px] sm:p-3 lg:h-[610px] lg:max-w-[490px] lg:p-3 xl:h-[680px] xl:max-w-[580px] xl:p-4 2xl:h-[750px] 2xl:max-w-[650px] 2xl:p-4 overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <AnimatePresence initial={false}>
          {cards.slice(0, 3).map((card, index) => (
            <AnimatedCard
              key={card.id}
              card={card}
              index={index}
              isAnimating={isAnimating}
              onCardClick={handleCardClick}
              onImageClick={handleOpenPreview}
              onDragSwipe={handleDragSwipe}
            />
          ))}
        </AnimatePresence>
      </div>

      {/* Lightbox / Image Preview Modal */}
      <AnimatePresence>
        {previewImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-md"
            onClick={() => setPreviewImage(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 20 }}
              transition={{ type: "spring", duration: 0.35, bounce: 0.1 }}
              className="relative max-h-[92vh] w-full max-w-4xl overflow-hidden rounded-3xl border border-white/15 bg-card shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setPreviewImage(null)}
                aria-label="Tutup preview gambar"
                className="absolute top-4 right-4 z-10 flex size-10 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md transition-all hover:bg-black/90 hover:scale-110 active:scale-95"
              >
                <X className="size-5" aria-hidden="true" />
              </button>

              <div className="max-h-[75vh] w-full overflow-hidden bg-black/20 flex items-center justify-center">
                <img
                  src={previewImage.image}
                  alt={previewImage.title}
                  className="max-h-[75vh] w-full object-contain"
                />
              </div>

              <div className="p-6 bg-card border-t border-border">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h3 className="font-display text-xl font-bold text-navy sm:text-2xl">
                      {previewImage.title}
                    </h3>
                    <p className="mt-1 text-sm sm:text-base text-muted-foreground">
                      {previewImage.description}
                    </p>
                  </div>
                  <span className="shrink-0 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-primary">
                    <Logo size="xs" />
                    <span>SMK Madinatulquran</span>
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
