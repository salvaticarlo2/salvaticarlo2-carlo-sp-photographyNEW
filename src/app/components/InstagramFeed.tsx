'use client';

import { useState, useEffect } from 'react';

// This is a placeholder component for the Instagram feed
// In a production environment, you would integrate with Instagram's API
// or use a service like Curator.io or Elfsight

export default function InstagramFeed() {
  const [loading, setLoading] = useState(true);
  
  // Placeholder images - in production these would come from Instagram API
  const placeholderImages = [
    { id: 1, url: '/images/insta1.jpg', alt: 'Landscape photo 1' },
    { id: 2, url: '/images/insta2.jpg', alt: 'Landscape photo 2' },
    { id: 3, url: '/images/insta3.jpg', alt: 'Landscape photo 3' },
    { id: 4, url: '/images/insta4.jpg', alt: 'Landscape photo 4' },
    { id: 5, url: '/images/insta5.jpg', alt: 'Landscape photo 5' },
    { id: 6, url: '/images/insta6.jpg', alt: 'Landscape photo 6' },
    { id: 7, url: '/images/insta7.jpg', alt: 'Landscape photo 7' },
    { id: 8, url: '/images/insta8.jpg', alt: 'Landscape photo 8' },
  ];

  useEffect(() => {
    // Simulate loading from Instagram API
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-24 bg-charcoal">
      <div className="container-custom">
        <h2 className="section-title">Follow on Instagram</h2>
        <p className="text-center text-lg mb-12 max-w-2xl mx-auto">
          Stay updated with my latest captures and behind-the-scenes moments
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {loading ? (
            // Loading placeholders
            [...Array(8)].map((_, index) => (
              <div 
                key={index} 
                className="aspect-square bg-dark-slate animate-pulse"
              />
            ))
          ) : (
            // Instagram feed items
            placeholderImages.map((image) => (
              <div 
                key={image.id} 
                className="aspect-square bg-dark-slate hover:opacity-80 transition-all duration-500 group overflow-hidden"
              >
                <div className="w-full h-full bg-gradient-to-br from-earth-tone/10 to-sage-green/10 group-hover:scale-105 transition-transform duration-500">
                  {/* In production, this would be an actual image */}
                </div>
              </div>
            ))
          )}
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
  );
}
