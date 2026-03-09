"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

interface Testimonial {
  name: string;
  location: string;
  rating: number;
  text: string;
  date?: string;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
  autoPlayInterval?: number;
}

export function Testimonials({
  testimonials,
  autoPlayInterval = 6000,
}: TestimonialsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying || testimonials.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying, testimonials.length, autoPlayInterval]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <section className="py-20 ">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl lg:text-[3rem] leading-snug text-[#727054] font-royale-script">
            Lo que dicen nuestras parejas
          </h2>
          <p className="font-serif text-base md:text-xl text-[#8e6b16] mt-1">
            Historias reales de bodas inolvidables en Costa de Oro
          </p>
          {/* Hearts decoration */}
          <div className="flex justify-end mt-3">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hearts-x7AM73sewZk24pIgmf5YT9stLlCdHA.png"
              alt="Corazones decorativos"
              width={120}
              height={50}
              className="w-[120px] md:w-[200px] lg:w-[280px] h-auto object-contain"
            />
          </div>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative">
          {/* Main testimonial display */}
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="min-w-full px-10 md:px-16">
                  <div className="text-center">
                    {/* Testimonial text with large quote marks */}
                    <blockquote className="relative">
                      <p className="text-[#727054] text-xl md:text-2xl lg:text-[1.65rem] text-center font-royale-serif leading-relaxed mt-24">
                        <span className="text-[#cecdc0] text-5xl md:text-6xl font-serif leading-none align-top">
                          {"\u201C"}
                        </span>
                        {testimonial.text}
                        <span className="text-[#cecdc0] text-5xl md:text-6xl font-serif leading-none align-bottom">
                          {"\u201D"}
                        </span>
                      </p>
                    </blockquote>

                    {/* Author info */}
                    <div className="mt-8">
                      <p className="font-royale-serif text-[#cecdc0] text-3xl md:text-5xl">
                        {testimonial.name}
                      </p>
                      <p className="text-[#727054] font-royale-serif text-md md:text-lg mt-1">
                        {testimonial.location}
                        {testimonial.date && (
                          <span>
                            {". "}
                            {testimonial.date}
                          </span>
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation arrows */}
          {testimonials.length > 1 && (
            <>
              <button
                onClick={goToPrevious}
                className="absolute left-0 top-1/2 -translate-y-1/2 text-[#727054] hover:text-[#727054] transition-colors duration-200 cursor-pointer"
                aria-label="Testimonio anterior"
              >
                <ChevronLeft className="w-8 h-8 md:w-10 md:h-10" strokeWidth={1.5} />
              </button>

              <button
                onClick={goToNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 text-[#727054] hover:text-[#727054] transition-colors duration-200 cursor-pointer"
                aria-label="Siguiente testimonio"
              >
                <ChevronRight className="w-8 h-8 md:w-10 md:h-10" strokeWidth={1.5} />
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
