'use client';
import '../../globals.css';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const images = [
  '/test_img/work.png',
  '/test_img/work2.jpg',
  '/test_img/work3.jpg',
  '/test_img/work4.jpg',
  '/test_img/work5.jpg',
];

export default function WorkSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const getImageIndex = (offset: number) => {
    return (currentIndex + offset + images.length) % images.length;
  };

  return (
    <section
      className='relative w-full py-12 md:py-20 bg-center bg-no-repeat bg-cover'
      style={{
        backgroundImage: "url('/images.png')",
        backgroundColor: 'rgba(226, 234, 252, 0.6)',
        backgroundBlendMode: 'multiply',
        backgroundSize: '45%',
      }}
    >
      {/* Blue Overlay */}
      <div className='absolute inset-0 bg-blue-500 opacity-20'></div>

      {/* Content */}
      <div className='relative z-10'>
        {/* Title & Buttons */}
        <div className='flex flex-col items-center justify-center mb-10 px-4'>
          <div className='flex items-center justify-center w-full md:w-auto'>
            {/* Left Button (hidden on mobile, shown on md+) */}
            <button
              onClick={handlePrev}
              className='hidden md:flex w-10 h-10 items-center justify-center rounded-full bg-white shadow hover:bg-gray-100'
            >
              <FaArrowLeft className='text-gray-600' />
            </button>

            {/* Title & Subtitle */}
            <div className='flex flex-col items-center mx-6 text-center max-w-xl'>
              <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900'>
                Check our Work
              </h2>
              <p className='mt-3 text-gray-700 text-sm sm:text-base'>
                Take a look at some of our recent projects to see how we've
                helped businesses like yours succeed online.
              </p>
            </div>

            {/* Right Button (hidden on mobile, shown on md+) */}
            <button
              onClick={handleNext}
              className='hidden md:flex w-10 h-10 items-center justify-center rounded-full bg-white shadow hover:bg-gray-100'
            >
              <FaArrowRight className='text-gray-600' />
            </button>
          </div>

          {/* Mobile Buttons (below text, only on small screens) */}
          <div className='flex gap-3 mt-4 md:hidden'>
            <button
              onClick={handlePrev}
              className='w-10 h-10 flex items-center justify-center rounded-full bg-white shadow hover:bg-gray-100'
            >
              <FaArrowLeft className='text-gray-600' />
            </button>
            <button
              onClick={handleNext}
              className='w-10 h-10 flex items-center justify-center rounded-full bg-white shadow hover:bg-gray-100'
            >
              <FaArrowRight className='text-gray-600' />
            </button>
          </div>
        </div>

        {/* Slider */}
        <div className='flex items-center justify-center gap-4 sm:gap-6 md:gap-8 transition-all duration-500 ease-in-out'>
          {/* Left Image (hidden on mobile, shown on md+) */}
          <div className='hidden md:flex w-40 sm:w-60 md:w-80 h-48 sm:h-64 md:h-[420px] bg-white rounded-2xl shadow-lg overflow-hidden'>
            <Image
              src={images[getImageIndex(-1)]}
              alt='Left preview'
              width={320}
              height={420}
              priority
              className='object-cover w-full h-full'
            />
          </div>

          {/* Middle Image (always visible) */}
          <div className='w-64 sm:w-[400px] md:w-[600px] h-48 sm:h-64 md:h-[420px] bg-white rounded-2xl shadow-lg overflow-hidden relative z-10'>
            <Image
              src={images[getImageIndex(0)]}
              alt='Main preview'
              width={600}
              height={420}
              priority
              className='object-cover w-full h-full'
            />
          </div>

          {/* Right Image (hidden on mobile, shown on md+) */}
          <div className='hidden md:flex w-40 sm:w-60 md:w-80 h-48 sm:h-64 md:h-[420px] bg-white rounded-2xl shadow-lg overflow-hidden'>
            <Image
              src={images[getImageIndex(1)]}
              alt='Right preview'
              width={320}
              height={420}
              priority
              className='object-cover w-full h-full'
            />
          </div>
        </div>
      </div>
    </section>
  );
}
