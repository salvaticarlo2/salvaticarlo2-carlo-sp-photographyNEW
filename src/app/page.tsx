'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/app/components/layout/Navbar';
import Footer from '@/app/components/layout/Footer';

// Hero Section Component
const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
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
        <div className="mt-8 animate-fade-in-delayed" style={{animationDelay: '0.8s'}}>
          <Link href="/gallery" className="bg-transparent border border-white text-white px-8 py-3 font-montserrat text-sm uppercase tracking-widest hover:bg-white hover:text-dark-slate transition-all duration-500">
            Explore Gallery
          </Link>
        </div>
      </div>
    </section>
  );
};

// Placeholder gallery categories
const galleryCategories = [
  { title: 'Landscapes', image: '/images/category-landscapes.jpg', slug: 'landscapes' },
  { title: 'Seascapes', image: '/images/category-seascapes.jpg', slug: 'seascapes' },
  { title: 'Mountains', image: '/images/category-mountains.jpg', slug: 'mountains' },
  { title: 'Forests', image: '/images/category-forests.jpg', slug: 'forests' },
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
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Introduction Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-cormorant text-4xl md:text-5xl mb-8">About Carlo SP</h2>
            <p className="font-montserrat text-lg md:text-xl mb-10 leading-relaxed text-charcoal">
              I am a landscape photographer dedicated to capturing the raw beauty and emotion of natural landscapes.
              My work focuses on the interplay of light, composition, and the unique character of each location,
              creating images that evoke a sense of presence and connection with the natural world.
            </p>
            <Link href="/about" className="bg-transparent border border-dark-slate text-dark-slate px-8 py-3 font-montserrat text-sm uppercase tracking-widest hover:bg-dark-slate hover:text-white transition-all duration-500">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="py-24 bg-off-white">
        <div className="container mx-auto px-4">
          <h2 className="font-cormorant text-4xl md:text-5xl text-center mb-12">Featured Work</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryCategories.map((category, index) => (
              <Link href={`/gallery/${category.slug}`} key={index}>
                <div className="group relative aspect-square overflow-hidden bg-dark-slate">
                  {/* In production, we'd use actual images */}
                  <div className="w-full h-full transition-transform duration-700 group-hover:scale-105">
                    {/* This div serves as a placeholder for the actual image */}
                    <div className="absolute inset-0 bg-gradient-to-br from-earth-tone/20 to-sage-green/20"></div>
                  </div>
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300 group-hover:bg-black/60">
                    <h3 className="text-white font-cormorant text-3xl tracking-wider">{category.title}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link href="/gallery" className="bg-transparent border border-dark-slate text-dark-slate px-8 py-3 font-montserrat text-sm uppercase tracking-widest hover:bg-dark-slate hover:text-white transition-all duration-500">
              View All Galleries
            </Link>
          </div>
        </div>
      </section>

      {/* Full-width Image Section */}
      <section className="relative w-full py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal to-dark-slate"></div>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h2 className="font-cormorant text-4xl md:text-5xl lg:text-6xl text-white mb-6">Prints</h2>
          <p className="font-montserrat text-xl text-white mb-10 max-w-3xl mx-auto">
            Bring the beauty of nature into your space with fine art prints, 
            meticulously crafted to showcase every detail of these breathtaking landscapes.
          </p>
          <Link href="/prints" className="bg-transparent border border-white text-white px-8 py-3 font-montserrat text-sm uppercase tracking-widest hover:bg-white hover:text-dark-slate transition-all duration-500">
            Explore Print Collection
          </Link>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-cormorant text-4xl md:text-5xl text-center mb-12">What Clients Say</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-off-white p-8 border-l-4 border-earth-tone">
                <p className="italic text-charcoal mb-6 text-lg leading-relaxed">"{testimonial.text}"</p>
                <p className="font-montserrat font-semibold text-earth-tone">{testimonial.author}</p>
                <p className="font-montserrat text-medium-gray text-sm mt-1">{testimonial.location}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link href="/testimonials" className="bg-transparent border border-dark-slate text-dark-slate px-8 py-3 font-montserrat text-sm uppercase tracking-widest hover:bg-dark-slate hover:text-white transition-all duration-500">
              Read More Testimonials
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-24 bg-off-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-cormorant text-4xl md:text-5xl mb-8">Get in Touch</h2>
            <p className="font-montserrat text-lg md:text-xl mb-10 leading-relaxed text-charcoal">
              Interested in purchasing prints or discussing a collaboration?
              I'd love to hear from you.
            </p>
            <Link
              href="/contact"
              className="bg-transparent border border-dark-slate text-dark-slate px-8 py-3 font-montserrat text-sm uppercase tracking-widest hover:bg-dark-slate hover:text-white transition-all duration-500"
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
