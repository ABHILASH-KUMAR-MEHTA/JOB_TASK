'use client';

import React from 'react';
import { FaInstagram, FaLinkedinIn, FaTiktok, FaGlobe } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer
      className='py-12 px-4'
      style={{
        background:
          'linear-gradient(to right, #ff9966, #ff5e62, #6a11cb, #2575fc)',
      }}
    >
      <div className='max-w-6xl mx-auto bg-white rounded-3xl shadow-lg  px-16 py-12 flex flex-col md:flex-row items-center md:items-start justify-between gap-8'>
        {/* Left Section */}
        <div className='flex flex-col items-center md:items-start text-center md:text-left max-w-sm'>
          {/* Logo */}
          <div className='flex items-center gap-2 mb-4'>
            <div className='bg-black p-2 rounded-lg'>
              <span className='text-white font-bold text-xl'>⚡</span>
            </div>
            <span className='text-xl text-black font-bold'>FasterUI</span>
          </div>

          {/* Description */}
          <p className='text-gray-600 mb-4'>
            Ready to elevate your online presence? Contact us today to discuss
            your project and discover how we can bring your vision to life.
          </p>

          {/* Bottom small text */}
          <p className='flex items-center gap-2 text-gray-500 text-sm'>
            ❤️ Made with love powered by inkyy.com
          </p>
        </div>

        {/* Navigation + Social Icons */}
        <div className='flex flex-col items-center md:items-start gap-4'>
          {/* Navigation */}
          <nav className='flex flex-col md:flex-row gap-4 text-gray-600 text-base'>
            <a
              href='#'
              className='hover:text-gray-900'
            >
              Home
            </a>
            <a
              href='#'
              className='hover:text-gray-900'
            >
              About
            </a>
            <a
              href='#'
              className='hover:text-gray-900'
            >
              How it Works
            </a>
            <a
              href='#'
              className='hover:text-gray-900'
            >
              Services
            </a>
          </nav>

          {/* Social Icons under nav */}
          <div className='flex gap-4 mt-2'>
            <a
              href='#'
              className='bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition'
            >
              <FaInstagram className='text-gray-700' />
            </a>
            <a
              href='#'
              className='bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition'
            >
              <FaLinkedinIn className='text-gray-700' />
            </a>
            <a
              href='#'
              className='bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition'
            >
              <FaTiktok className='text-gray-700' />
            </a>
            <a
              href='#'
              className='bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition'
            >
              <FaGlobe className='text-gray-700' />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
