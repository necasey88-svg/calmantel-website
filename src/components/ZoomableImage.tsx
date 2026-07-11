"use client";
import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";

export default function ZoomableImage({
  src,
  alt,
  thumbClassName = "relative bg-stone-100 rounded-2xl overflow-hidden h-80 w-full group cursor-zoom-in",
  thumbImgClassName = "object-contain p-4 group-hover:scale-105 transition-transform duration-300",
  thumbSizes = "(max-width: 1024px) 100vw, 50vw",
  priority = true,
}: {
  src: string;
  alt: string;
  thumbClassName?: string;
  thumbImgClassName?: string;
  thumbSizes?: string;
  priority?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const [scale, setScale] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragging = useRef(false);
  const lastPos = useRef({ x: 0, y: 0 });
  const imgRef = useRef<HTMLDivElement>(null);

  const reset = useCallback(() => {
    setScale(1);
    setOffset({ x: 0, y: 0 });
  }, []);

  const close = useCallback(() => {
    setOpen(false);
    reset();
  }, [reset]);

  const zoom = useCallback((delta: number) => {
    setScale((prev) => {
      const next = Math.min(8, Math.max(1, prev + delta));
      if (next === 1) setOffset({ x: 0, y: 0 });
      return next;
    });
  }, []);

  // Scroll to zoom
  const onWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    zoom(e.deltaY < 0 ? 0.3 : -0.3);
  };

  // Drag to pan
  const onMouseDown = (e: React.MouseEvent) => {
    if (scale === 1) return;
    dragging.current = true;
    setIsDragging(true);
    lastPos.current = { x: e.clientX, y: e.clientY };
  };
  const onMouseMove = (e: React.MouseEvent) => {
    if (!dragging.current) return;
    const dx = e.clientX - lastPos.current.x;
    const dy = e.clientY - lastPos.current.y;
    lastPos.current = { x: e.clientX, y: e.clientY };
    setOffset((prev) => ({ x: prev.x + dx, y: prev.y + dy }));
  };
  const onMouseUp = () => {
    dragging.current = false;
    setIsDragging(false);
  };

  // Touch pinch-to-zoom
  const lastDist = useRef<number | null>(null);
  const onTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (lastDist.current !== null) {
        zoom((dist - lastDist.current) * 0.02);
      }
      lastDist.current = dist;
    }
  };
  const onTouchEnd = () => { lastDist.current = null; };

  // Escape key
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, close]);

  // Prevent body scroll when open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      {/* Thumbnail */}
      <button
        onClick={() => setOpen(true)}
        className={thumbClassName}
        aria-label="Click to zoom"
      >
        <Image
          src={src}
          alt={alt}
          fill
          className={thumbImgClassName}
          sizes={thumbSizes}
          priority={priority}
        />
        <span className="absolute bottom-3 right-3 bg-white/80 text-stone-600 text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
          </svg>
          Zoom
        </span>
      </button>

      {/* Lightbox */}
      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/92 flex flex-col"
          onClick={close}
        >
          {/* Top bar */}
          <div
            className="flex items-center justify-between px-5 py-3 flex-shrink-0"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-white/60 text-sm font-medium truncate max-w-xs">{alt}</p>
            <div className="flex items-center gap-2">
              {/* Zoom out */}
              <button
                onClick={() => zoom(-0.5)}
                disabled={scale <= 1}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-30 text-white flex items-center justify-center transition-colors"
                aria-label="Zoom out"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM7 10h6" />
                </svg>
              </button>
              {/* Scale indicator */}
              <span className="text-white/50 text-xs w-12 text-center tabular-nums">{Math.round(scale * 100)}%</span>
              {/* Zoom in */}
              <button
                onClick={() => zoom(0.5)}
                disabled={scale >= 8}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-30 text-white flex items-center justify-center transition-colors"
                aria-label="Zoom in"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </button>
              {/* Reset */}
              {scale > 1 && (
                <button
                  onClick={reset}
                  className="text-white/50 hover:text-white text-xs px-2 py-1 rounded transition-colors"
                >
                  Reset
                </button>
              )}
              {/* Close */}
              <button
                onClick={close}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors ml-2"
                aria-label="Close"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Image area */}
          <div
            ref={imgRef}
            className="flex-1 overflow-hidden flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
            onWheel={onWheel}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseUp}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            style={{ cursor: scale > 1 ? (isDragging ? "grabbing" : "grab") : "zoom-in" }}
          >
            <div
              style={{
                transform: `scale(${scale}) translate(${offset.x / scale}px, ${offset.y / scale}px)`,
                transition: isDragging ? "none" : "transform 0.15s ease",
                width: "90vw",
                height: "85vh",
                position: "relative",
              }}
            >
              <Image
                src={src}
                alt={alt}
                fill
                className="object-contain"
                sizes="95vw"
                quality={95}
                draggable={false}
              />
            </div>
          </div>

          {/* Bottom hint */}
          <div className="text-center pb-3 flex-shrink-0" onClick={(e) => e.stopPropagation()}>
            <p className="text-white/30 text-xs">Scroll to zoom · Drag to pan · Esc to close</p>
          </div>
        </div>
      )}
    </>
  );
}
