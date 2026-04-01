'use client';

import { useState, useEffect } from 'react';

const slides = [
  { src: '/images/kv-1.svg', alt: '太陽光発電' },
  { src: '/images/kv-2.svg', alt: '風力発電' },
  { src: '/images/kv-3.svg', alt: 'バイオマス発電' },
  { src: '/images/kv-4.svg', alt: '地熱発電' },
  { src: '/images/kv-5.svg', alt: '水力発電' },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[60vh] min-h-[400px] max-h-[700px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={slide.src}
            alt={slide.alt}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />

      {/* Text Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-8 sm:px-16 lg:px-24 max-w-4xl">
        <p className="text-white/90 text-sm sm:text-base font-medium mb-2 tracking-widest">
          令和8年度
        </p>
        <h1 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-4">
          脱炭素電源<br />地域貢献型投資促進事業
        </h1>
        <p className="text-white/85 text-sm sm:text-base leading-relaxed max-w-lg">
          地域の再生可能エネルギーへの投資を促進し、<br className="hidden sm:block" />
          脱炭素社会の実現を目指します
        </p>
        <div className="mt-6">
          <a
            href="#overview"
            className="inline-block bg-[#1a4b8a] hover:bg-[#2680c8] text-white text-sm font-medium px-6 py-3 rounded-md transition-colors duration-200"
          >
            事業概要を見る
          </a>
        </div>
      </div>

      {/* Dot Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              i === current ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`スライド ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
