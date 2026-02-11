"use client";

import { useState, useEffect } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

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

export function Testimonials({ testimonials, autoPlayInterval = 6000 }: TestimonialsProps) {
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
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  return (
    <div className="py-20 bg-gradient-to-b from-yellow-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-4">
            Lo que dicen nuestras parejas
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Historias reales de bodas inolvidables en Costa de Oro
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main testimonial display */}
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="min-w-full px-4">
                  <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 relative">
                    {/* Quote icon */}
                    <div className="absolute top-6 left-6 text-yellow-500 opacity-20">
                      <FaQuoteLeft className="w-12 h-12" />
                    </div>

                    {/* Stars */}
                    <div className="flex justify-center mb-6 relative z-10">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={`w-6 h-6 ${
                            i < testimonial.rating
                              ? "text-yellow-500"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>

                    {/* Testimonial text */}
                    <p className="text-gray-700 text-lg md:text-xl text-center mb-8 italic leading-relaxed relative z-10">
                      "{testimonial.text}"
                    </p>

                    {/* Author info */}
                    <div className="text-center relative z-10">
                      <p className="font-semibold text-gray-800 text-lg">
                        {testimonial.name}
                      </p>
                      <p className="text-gray-600">{testimonial.location}</p>
                      {testimonial.date && (
                        <p className="text-gray-500 text-sm mt-1">{testimonial.date}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          {testimonials.length > 1 && (
            <>
              <button
                onClick={goToPrevious}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-yellow-500 hover:bg-yellow-600 text-white p-3 rounded-full transition-all duration-200 hover:scale-110 shadow-lg"
                aria-label="Previous testimonial"
              >
                <IoChevronBack className="w-6 h-6" />
              </button>

              <button
                onClick={goToNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-yellow-500 hover:bg-yellow-600 text-white p-3 rounded-full transition-all duration-200 hover:scale-110 shadow-lg"
                aria-label="Next testimonial"
              >
                <IoChevronForward className="w-6 h-6" />
              </button>
            </>
          )}

          {/* Dots indicator */}
          {testimonials.length > 1 && (
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentIndex
                      ? "bg-yellow-500 w-8"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
