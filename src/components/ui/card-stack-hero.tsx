"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, type PanInfo } from "framer-motion";
import { Maximize2, X } from "lucide-react";
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

// Scaled 2x for a large, commanding hero centerpiece
const positionStyles = [
  { scale: 1, y: 25 },
  { scale: 0.95, y: -35 },
  { scale: 0.9, y: -85 },
];

const exitAnimation = { y: 800, scale: 1, zIndex: 10 };
const enterAnimation = { y: -35, scale: 0.9 };

function CardContent({
  contentType,
  onImageClick,
}: {
  contentType: 1 | 2 | 3;
  onImageClick: (data: CardData) => void;
}) {
  const data = cardData[contentType];
  return (
    <div className="flex h-full w-full flex-col gap-3">
      <div
        className="group relative flex h-[280px] sm:h-[400px] lg:h-[470px] xl:h-[510px] w-full items-center justify-center overflow-hidden rounded-2xl outline outline-black/10 transition-all dark:outline-white/10"
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
        <div className="absolute top-3.5 right-3.5 flex items-center gap-1.5 rounded-full bg-black/60 px-3 py-1.5 text-xs font-semibold text-white shadow-md backdrop-blur-md transition-transform duration-200 group-hover:scale-105">
          <Maximize2 className="size-3.5" aria-hidden="true" />
          <span>Lihat Foto</span>
        </div>
      </div>
      <div className="flex w-full flex-col gap-1.5 px-3.5 pb-3.5 pt-1.5">
        <span className="truncate font-display text-lg font-bold text-navy sm:text-xl lg:text-2xl">
          {data.title}
        </span>
        <span className="text-xs sm:text-sm lg:text-base text-muted-foreground">
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
      animate={{ y, scale }}
      {...(exitAnim ? { exit: exitAnim } : {})}
      transition={{ type: "spring", duration: 1, bounce: 0 }}
      drag={isTop ? "x" : false}
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.6}
      onDragEnd={handleDragEnd}
      onClick={() => {
        if (isTop) onCardClick();
      }}
      style={{ zIndex, left: "50%", x: "-50%", bottom: "2.5rem" }}
      className={`absolute flex h-[410px] w-[320px] sm:h-[560px] sm:w-[560px] lg:h-[650px] lg:w-[670px] xl:h-[700px] xl:w-[720px] items-center justify-center will-change-transform select-none touch-pan-y ${
        isTop
          ? "cursor-grab active:cursor-grabbing"
          : "pointer-events-none"
      }`}
    >
      <div
        className={`h-full w-full overflow-hidden rounded-3xl border border-border bg-card p-2.5 sm:p-3 shadow-2xl ${
          isTop ? "hover:border-primary/40" : ""
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
        className="relative mx-auto h-[505px] w-full max-w-[350px] px-4 sm:h-[665px] sm:max-w-[600px] sm:px-6 lg:h-[765px] lg:max-w-[710px] lg:px-8 xl:h-[815px] xl:max-w-[760px] overflow-hidden"
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
                  <span className="shrink-0 rounded-full bg-primary/10 px-4 py-1.5 text-xs sm:text-sm font-semibold text-primary">
                    SMK Madinatulquran
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
