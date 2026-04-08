"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

interface CarouselSlide {
  image: string;
  title: string;
  description: string;
}

interface ImageCarouselProps {
  slides: CarouselSlide[];
  autoPlayInterval?: number;
}

export function ImageCarousel({ slides, autoPlayInterval = 5000 }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying, slides.length, autoPlayInterval]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full">
      {/* Main carousel container */}
      <div className="relative overflow-hidden rounded-lg">
        {/* Slides */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="relative min-w-full h-96 md:h-[500px]">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>

        {/* Previous button */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200 hover:scale-110"
          aria-label="Imagen anterior"
        >
          <IoChevronBack className="w-6 h-6" />
        </button>

        {/* Next button */}
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200 hover:scale-110"
          aria-label="Siguiente imagen"
        >
          <IoChevronForward className="w-6 h-6" />
        </button>

        {/* Dots indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentIndex
                  ? "bg-[#8e6b16] w-8"
                  : "bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Ir a la imagen ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Slide information */}
      <div className="mt-6 text-center space-y-3">
        <h3 className="text-2xl font-semibold text-[#8e6b16] font-royale-serif">
          {slides[currentIndex].title}
        </h3>
        <p className="text-gray-600 max-w-2xl mx-auto font-royale-serif">
          {slides[currentIndex].description}
        </p>
      </div>
    </div>
  );
}
