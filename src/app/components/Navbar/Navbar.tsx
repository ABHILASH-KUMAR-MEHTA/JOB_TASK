'use client';

import { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Track auth state
  const router = useRouter();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('authUser') || 'null');
    setIsAuthenticated(!!user); // If a user exists, mark authenticated
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('authUser'); // Clear the user
    setIsAuthenticated(false); // Update auth state
    alert('You have logged out.');
    router.push('/signin'); // purpleirect to Sign In
  };

  const handleNavToggle = () => {
    setNavOpen(!navOpen);
  };

  return (
    <header className='w-full fixed top-0 z-50 bg-transparent '>
      <div className='max-w-7xl mx-auto flex items-center justify-between px-4 lg:px-8 py-4'>
        {/* Logo */}
        <div className='flex items-center'>
          <Link href='/'>
            <Image
              src='/logo.png'
              alt='Logo'
              width={160}
              height={100}
            />
          </Link>
        </div>

        {/* Links Section Hidden for Mobile */}
        <div className='hidden lg:flex items-center bg-white bg-opacity-40 rounded-2xl p-4 space-x-6 text-gray-800 font-medium'>
          <Link
            href='/home'
            className='hover:text-purple-500 '
          >
            Home
          </Link>
          <Link
            href='/about'
            className='hover:text-purple-500'
          >
            About
          </Link>
          <Link
            href='/work'
            className='hover:text-purple-500'
          >
            How it Works
          </Link>
          <Link
            href='/service'
            className='hover:text-purple-500'
          >
            Services
          </Link>
        </div>

        {/* Buttons Section */}
        <div className='hidden lg:flex items-center space-x-4'>
          {isAuthenticated ? (
            // Show Logout button when authenticated
            <button
              onClick={handleLogout}
              className='text-purple-500 border border-purple-500 px-8 py-2 rounded-full hover:bg-purple-500 hover:text-white transition font-semibold'
            >
              Logout
            </button>
          ) : (
            // Show Sign In and Sign Up buttons for unauthenticated users
            <>
              <Link
                href='/signin'
                className='text-gray-800 font-semibold hover:text-purple-500'
              >
                Sign In
              </Link>
              <Link
                href='/signup'
                className='text-white-500 bg-purple-500 border border-purple-500 px-8 py-2 rounded-lg hover:bg-white hover:text-purple-500 transition font-semibold'
              >
                Sign Up
              </Link>
            </>
          )}
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className='lg:hidden'>
          <button onClick={handleNavToggle}>
            {navOpen ? (
              <AiOutlineClose className='text-2xl text-gray-800' />
            ) : (
              <AiOutlineMenu className='text-2xl text-gray-800' />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {navOpen && (
        <div className='lg:hidden bg-white w-full shadow-md'>
          <nav className='flex flex-col items-center space-y-4 py-6 text-gray-800 font-medium'>
            <Link
              href='/home'
              className='hover:text-purple-500'
              onClick={() => setNavOpen(false)}
            >
              Home
            </Link>
            <Link
              href='/about'
              className='hover:text-purple-500'
              onClick={() => setNavOpen(false)}
            >
              About
            </Link>
            <Link
              href='/work'
              className='hover:text-purple-500'
              onClick={() => setNavOpen(false)}
            >
              How it Works
            </Link>
            <Link
              href='/service'
              className='hover:text-purple-500'
              onClick={() => setNavOpen(false)}
            >
              Services
            </Link>
            {isAuthenticated ? (
              <button
                onClick={() => {
                  handleLogout();
                  setNavOpen(false);
                }}
                className='text-purple-500 border border-purple-500 px-4 py-2 rounded-full hover:bg-purple-500 hover:text-white transition font-semibold'
              >
                Logout
              </button>
            ) : (
              <>
                <Link
                  href='/signin'
                  className='text-gray-800 font-semibold hover:text-purple-500'
                  onClick={() => setNavOpen(false)}
                >
                  Sign In
                </Link>
                <Link
                  href='/signup'
                  className='text-purple-500 border border-purple-500 px-4 py-2 rounded-full hover:bg-transparent hover:text-purple-500 transition font-semibold'
                  onClick={() => setNavOpen(false)}
                >
                  Sign Up
                </Link>
              </>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
