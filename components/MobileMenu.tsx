"use client";

import { Menu, Music2, Pause, X } from "lucide-react";
import { useRef, useState } from "react";

const menuItems = [
  { label: "Бастапқы бет", href: "#home" },
  { label: "Шақыру", href: "#invitation" },
  { label: "Таймер", href: "#countdown" },
  { label: "Мекен-жай", href: "#venue" },
  { label: "Фотоальбом", href: "#gallery" },
  { label: "Анкета", href: "#rsvp" },
];

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggleMusic = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    try {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {
        audio.volume = 0.45;
        await audio.play();
        setIsPlaying(true);
      }
    } catch (error) {
      console.error("Music playback blocked:", error);
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/audio/wedding-music.mp3" loop preload="auto" />

      <div className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-5 py-4">
        <button
          type="button"
          onClick={toggleMusic}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-white/80 text-[#2B2118] shadow-sm backdrop-blur"
          aria-label="Музыка"
        >
          {isPlaying ? <Pause size={18} /> : <Music2 size={18} />}
        </button>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-white/80 text-[#2B2118] shadow-sm backdrop-blur"
          aria-label="Меню"
        >
          <Menu size={20} />
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-[60] bg-[#2B2118]/50 backdrop-blur-sm">
          <div className="ml-auto flex h-full w-[82%] max-w-sm flex-col bg-[#FAF7F2] p-6 text-[#2B2118] shadow-2xl">
            <div className="mb-10 flex items-center justify-between">
              <p className="font-serif text-3xl">Shaqyru</p>

              <button
                type="button"
                onClick={() => setOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white"
              >
                <X size={18} />
              </button>
            </div>

            <nav className="flex flex-col gap-5">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-[#E8D8BE] pb-4 text-sm uppercase tracking-[0.25em] text-[#6F5C49]"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}