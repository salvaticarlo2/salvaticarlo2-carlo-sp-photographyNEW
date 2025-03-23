'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from './components/layout/Navbar.tsx';
import Footer from './components/layout/Footer.tsx';

// Placeholder hero images until we have actual content
const heroImages = [
  { src: '/images/hero1.jpg', alt: 'Mountain landscape at sunset' },
  { src: '/images/hero2.jpg', alt: 'Coastal seascape with dramatic clouds' },
  { src: '/images/hero3.jpg', alt: 'Forest scene with morning mist' },
];

// Placeholder gallery categories
const galleryCategories = [
  { title: 'Mountains', image: '/images/category-mountains.jpg' },
  { title: 'Coastal', image: '/images/category-coastal.jpg' },
  { title: 'Forests', image: '/images/category-forests.jpg' },
  { title: 'Deserts', image: '/images/category-deserts.jpg' },
];

// Placeholder testimonials
const testimonials = [
  {
    text: "Carlo's photography captures the essence of landscapes in a way that transports you directly to the scene. His work is breathtaking.",
    author: 'Maria Johnson',
    location: 'New York, USA',
  },
  {
    text: "The print I purchased from Carlo is the centerpiece of my living room. The quality is outstanding and the colors are exactly as they appeared online.",
    author: 'Sophie Martinez',
    location: 'Barcelona, Spain',
  },
  {
    text: "Carlo has an exceptional eye for composition and light. His images convey not just the visual beauty of landscapes, but their emotional essence as well.",
    author: 'James Wilson',
    location: 'London, UK',
  },
];

export default function Home() {
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);

  // Hero image slider effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroIndex((prevIndex) =>
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="hero-section">
        {/* Placeholder for hero image - in production would use actual images */}
        <div className="hero-image bg-dark-slate">
          {/* We would normally have actual images here */}
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 to-transparent"></div>
        </div>

        <div className="hero-overlay">
          <h1 className="hero-title fade-in">CARLO SP</h1>
          <p className="hero-subtitle fade-in fade-in-delay-1">
            Capturing the breathtaking beauty of landscapes around the world
          </p>
          <div className="flex flex-col sm:flex-row gap-5 fade-in fade-in-delay-2">
            <Link href="/galleries" className="btn-primary hover-lift">
              Explore Galleries
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-24 bg-charcoal">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-title">About Carlo SP</h2>
            <p className="text-lg md:text-xl mb-10 leading-relaxed">
              I am a landscape photographer dedicated to capturing the raw beauty and emotion of natural landscapes.
              My work focuses on the interplay of light, composition, and the unique character of each location,
              creating images that evoke a sense of presence and connection with the natural world.
            </p>
            <Link href="/about" className="btn-primary hover-lift">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="py-24 bg-dark-slate">
        <div className="container-custom">
          <h2 className="section-title">Featured Work</h2>

          <div className="gallery-grid">
            {galleryCategories.map((category, index) => (
              <div key={index} className="gallery-item aspect-[4/3] bg-charcoal">
                {/* In production, we'd use actual images */}
                <div className="gallery-image bg-gradient-to-br from-earth-tone/20 to-sage-green/20"></div>
                <div className="gallery-overlay">
                  <h3 className="gallery-title">{category.title}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link href="/galleries" className="btn-primary hover-lift">
              View All Galleries
            </Link>
          </div>
        </div>
      </section>

      {/* Full-width Image Section */}
      <section className="full-width-section">
        <div className="full-width-image bg-gradient-to-r from-charcoal to-dark-slate"></div>
        <div className="full-width-overlay"></div>
        <div className="full-width-content text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair text-pure-white mb-6">Prints</h2>
          <p className="text-xl text-off-white mb-10 max-w-3xl mx-auto">
            Bring the beauty of nature into your space with fine art prints, 
            meticulously crafted to showcase every detail of these breathtaking landscapes.
          </p>
          <Link href="/prints" className="btn-secondary hover-lift">
            Explore Print Collection
          </Link>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-dark-slate">
        <div className="container-custom">
          <h2 className="section-title">What Clients Say</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <p className="testimonial-text">"{testimonial.text}"</p>
                <p className="testimonial-author">{testimonial.author}</p>
                <p className="testimonial-location">{testimonial.location}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link href="/testimonials" className="btn-primary hover-lift">
              Read More Testimonials
            </Link>
          </div>
        </div>
      </section>

      {/* Instagram Feed Section */}
      <section className="py-24 bg-charcoal">
        <div className="container-custom">
          <h2 className="section-title">Follow on Instagram</h2>
          <p className="text-center text-lg mb-12 max-w-2xl mx-auto">
            Stay updated with my latest captures and behind-the-scenes moments
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Placeholder for Instagram feed - would be dynamically populated */}
            {[...Array(8)].map((_, index) => (
              <div key={index} className="aspect-square bg-dark-slate hover:opacity-80 transition-all duration-500 group overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-earth-tone/10 to-sage-green/10 group-hover:scale-105 transition-transform duration-500"></div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <a
              href="https://www.instagram.com/carlosp_landscapephotography"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary hover-lift"
            >
              @carlosp_landscapephotography
            </a>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-24 bg-earth-tone text-off-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-title text-off-white">Get in Touch</h2>
            <p className="text-lg md:text-xl mb-10 leading-relaxed">
              Interested in purchasing prints or discussing a collaboration?
              I'd love to hear from you.
            </p>
            <Link
              href="/contact"
              className="bg-off-white text-earth-tone px-6 py-3 font-raleway font-semibold uppercase tracking-wider transition-all duration-300 hover:bg-pure-white hover-lift"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
