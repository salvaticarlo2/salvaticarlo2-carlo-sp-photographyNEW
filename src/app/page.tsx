'use client';

import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/app/components/layout/Navbar';
import Footer from '@/app/components/layout/Footer';

// New HeroSection Component
const HeroSection = () => {
  return (
    <>
      {/*
        CHANGED the section class to remove h-screen.
        If you still want a large hero, use something like "min-h-[90vh]" or "min-h-[600px]" instead.
      */}
      <section className="relative min-h-[600px] w-full overflow-hidden">
        {/* Hero image - placeholder that can be easily replaced with your own photography */}
        <div className="absolute inset-0">
          <Image 
            src="/images/hero-placeholder.jpg" 
            alt="Landscape Photography by Carlo SP" 
            fill 
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div> {/* Overlay for better text visibility */}
        </div>
        
        {/* Hero content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <h1 className="font-cormorant text-5xl md:text-7xl mb-4 tracking-wider animate-fade-in">
            CARLO SP PHOTOGRAPHY
          </h1>
          <p className="font-montserrat font-light text-xl md:text-2xl max-w-2xl animate-fade-in-delayed">
            Capturing the beauty of landscapes around the world
          </p>
          <div className="mt-8 animate-fade-in-delayed" style={{ animationDelay: '0.8s' }}>
            <Link 
              href="/gallery" 
              className="bg-transparent border border-white text-white px-8 py-3 font-montserrat text-sm uppercase tracking-widest hover:bg-white hover:text-dark-slate transition-all duration-500"
            >
              Explore Gallery
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />

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
            {/* Render your gallery categories or items here */}
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
            {/* Render testimonial cards here */}
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
            {[...Array(8)].map((_, index) => (
              <div 
                key={index} 
                className="aspect-square bg-dark-slate hover:opacity-80 transition-all duration-500 group overflow-hidden"
              >
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