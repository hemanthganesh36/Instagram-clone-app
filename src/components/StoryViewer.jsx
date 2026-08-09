import React, { useEffect, useRef, useState } from "react";
import { X, Heart, Send, ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

const SLIDE_DURATION = 4000; // ms per image

export default function StoryViewer({ stories, startIndex, onClose }) {
  const [userIndex, setUserIndex] = useState(startIndex);
  const [imageIndex, setImageIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reply, setReply] = useState("");
  const [liked, setLiked] = useState(false);

  const rafRef = useRef(null);
  const startRef = useRef(null);
  const elapsedRef = useRef(0);

  const story = stories[userIndex];
  const images = story.images;

  const goToNextUser = () => {
    if (userIndex < stories.length - 1) {
      setUserIndex((i) => i + 1);
      setImageIndex(0);
    } else {
      onClose();
    }
  };

  const goToPrevUser = () => {
    if (userIndex > 0) {
      setUserIndex((i) => i - 1);
      setImageIndex(0);
    }
  };

  const goToNextImage = () => {
    if (imageIndex < images.length - 1) {
      setImageIndex((i) => i + 1);
    } else {
      goToNextUser();
    }
  };

  const goToPrevImage = () => {
    if (imageIndex > 0) {
      setImageIndex((i) => i - 1);
    } else {
      goToPrevUser();
    }
  };

  // Reset progress whenever the visible image changes
  useEffect(() => {
    setProgress(0);
    elapsedRef.current = 0;
    startRef.current = null;
  }, [userIndex, imageIndex]);

  // Progress animation loop
  useEffect(() => {
    const tick = (t) => {
      if (paused) {
        startRef.current = null;
        rafRef.current = requestAnimationFrame(tick);
        return;
      }
      if (startRef.current === null) startRef.current = t - elapsedRef.current;
      const elapsed = t - startRef.current;
      elapsedRef.current = elapsed;
      const pct = Math.min(100, (elapsed / SLIDE_DURATION) * 100);
      setProgress(pct);
      if (pct >= 100) {
        goToNextImage();
        return;
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userIndex, imageIndex, paused]);

  // Keyboard controls
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") goToNextImage();
      if (e.key === "ArrowLeft") goToPrevImage();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userIndex, imageIndex]);

  const submitReply = (e) => {
    e.preventDefault();
    if (!reply.trim()) return;
    setReply("");
    setPaused(false);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
      <div className="relative w-full h-full sm:w-[420px] sm:h-[90vh] sm:rounded-xl overflow-hidden bg-black">
        {/* progress bars */}
        <div className="absolute top-2 left-2 right-2 flex gap-1 z-20">
          {images.map((_, i) => (
            <div
              key={i}
              className="h-[2px] flex-1 bg-white/30 rounded-full overflow-hidden"
            >
              <div
                className="h-full bg-white"
                style={{
                  width:
                    i < imageIndex ? "100%" : i === imageIndex ? `${progress}%` : "0%",
                }}
              />
            </div>
          ))}
        </div>

        {/* header */}
        <div className="absolute top-6 left-3 right-3 flex items-center justify-between z-20">
          <div className="flex items-center gap-2">
            <img
              src={story.avatar}
              alt={story.name}
              className="w-8 h-8 rounded-full object-cover border border-white/40"
            />
            <span className="text-white text-sm font-semibold drop-shadow">
              {story.name}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setPaused((p) => !p)}
              className="text-white/90 hover:text-white"
              aria-label={paused ? "Play" : "Pause"}
            >
              {paused ? <Play size={18} /> : <Pause size={18} />}
            </button>
            <button
              onClick={onClose}
              className="text-white/90 hover:text-white"
              aria-label="Close"
            >
              <X size={22} />
            </button>
          </div>
        </div>

        {/* image */}
        <img
          src={images[imageIndex]}
          alt={`${story.name} story`}
          className="w-full h-full object-cover"
          draggable={false}
        />

        {/* tap zones for navigation */}
        <button
          onClick={goToPrevImage}
          className="absolute left-0 top-0 h-full w-1/3 z-10"
          aria-label="Previous"
        />
        <button
          onClick={goToNextImage}
          className="absolute right-0 top-0 h-full w-1/3 z-10"
          aria-label="Next"
        />

        {/* desktop chevrons */}
        <button
          onClick={goToPrevUser}
          className="hidden sm:flex absolute left-[-48px] top-1/2 -translate-y-1/2 z-20 bg-white/90 rounded-full p-2 hover:bg-white"
          aria-label="Previous story"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={goToNextUser}
          className="hidden sm:flex absolute right-[-48px] top-1/2 -translate-y-1/2 z-20 bg-white/90 rounded-full p-2 hover:bg-white"
          aria-label="Next story"
        >
          <ChevronRight size={20} />
        </button>

        {/* reply bar */}
        <form
          onSubmit={submitReply}
          className="absolute bottom-4 left-3 right-3 flex items-center gap-3 z-20"
        >
          <input
            value={reply}
            onChange={(e) => setReply(e.target.value)}
            onFocus={() => setPaused(true)}
            onBlur={() => setPaused(false)}
            placeholder={`Reply to ${story.name}...`}
            className="flex-1 bg-transparent border border-white/50 rounded-full px-4 py-2 text-sm text-white placeholder:text-white/70 outline-none"
          />
          <button
            type="button"
            onClick={() => setLiked((l) => !l)}
            aria-label="Like story"
          >
            <Heart
              size={26}
              className={liked ? "text-red-500" : "text-white"}
              fill={liked ? "currentColor" : "none"}
            />
          </button>
          {reply.trim() && (
            <button type="submit" aria-label="Send reply">
              <Send size={24} className="text-white" />
            </button>
          )}
        </form>
      </div>
    </div>
  );
}
