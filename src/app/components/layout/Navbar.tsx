'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll to change navbar style
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 50);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-charcoal bg-opacity-90 backdrop-blur-sm py-3 shadow-lg' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container-custom">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-2xl font-playfair text-off-white tracking-wide hover:text-earth-tone transition-colors duration-300">
            Carlo SP
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <Link href="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/galleries" className="nav-link">
                  Galleries
                </Link>
              </li>
              <li>
                <Link href="/prints" className="nav-link">
                  Prints
                </Link>
              </li>
              <li>
                <Link href="/films" className="nav-link">
                  Films
                </Link>
              </li>
              <li>
                <Link href="/blog" className="nav-link">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="nav-link">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/contact" className="nav-link">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* 
            NO social icons here at all 
            We have removed them to ensure there's no chance 
            they appear in your DOM
          */}

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-off-white focus:outline-none hover:text-earth-tone transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              // "Close" icon
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // "Hamburger" icon
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-charcoal bg-opacity-95 backdrop-blur-sm py-6 shadow-lg animate-fadeIn">
          <div className="container-custom">
            <nav>
              <ul className="space-y-5">
                <li>
                  <Link
                    href="/"
                    className="block text-off-white hover:text-earth-tone transition-colors duration-300 text-lg"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/galleries"
                    className="block text-off-white hover:text-earth-tone transition-colors duration-300 text-lg"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Galleries
                  </Link>
                </li>
                <li>
                  <Link
                    href="/prints"
                    className="block text-off-white hover:text-earth-tone transition-colors duration-300 text-lg"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Prints
                  </Link>
                </li>
                <li>
                  <Link
                    href="/films"
                    className="block text-off-white hover:text-earth-tone transition-colors duration-300 text-lg"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Films
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="block text-off-white hover:text-earth-tone transition-colors duration-300 text-lg"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/testimonials"
                    className="block text-off-white hover:text-earth-tone transition-colors duration-300 text-lg"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="block text-off-white hover:text-earth-tone transition-colors duration-300 text-lg"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
              {/* 
                NO social links in the mobile menu either
              */}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
