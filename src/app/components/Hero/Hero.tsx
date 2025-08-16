'use client';

import React from 'react';
import heroImage from '../../../../public/hero.png';
import { useRouter } from 'next/navigation';

const Hero: React.FC = () => {
  const router = useRouter();

  return (
    <section
      className='w-full min-h-screen py-16 lg:py-20 relative flex items-center justify-center bg-cover bg-center'
      style={{
        backgroundImage: `url(${heroImage.src})`,
        backgroundPosition: 'center top',
        backgroundSize: '80%',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'scroll',
      }}
    >
      {/* Overlay for darker effect */}
      <div className='absolute inset-0 bg-black/5'></div>

      {/* Hero Content */}
      <div className='relative z-10 max-w-7xl mx-auto text-center lg:text-left px-6 lg:px-8 flex flex-col items-center justify-center'>
        <h1 className='text-4xl lg:text-6xl font-bold text-center text-black mb-6'>
          Sleek UI Dark Theme <br /> for Creative <br /> Webflow Studio
        </h1>
        <button
          onClick={() => router.push('/signin')}
          className='bg-black text-white text-xl px-8 py-4 rounded-lg shadow-lg hover:bg-purple-600 transition'
        >
          Get In Touch
        </button>
      </div>
    </section>
  );
};

export default Hero;
