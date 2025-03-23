'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-charcoal text-off-white py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link href="/" className="text-2xl font-playfair text-off-white hover:text-earth-tone transition-colors duration-300">
              Carlo SP
            </Link>
            <p className="mt-6 text-medium-gray leading-relaxed">
              Professional landscape photographer capturing the beauty of natural landscapes around the world.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-montserrat font-semibold mb-6 text-off-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/galleries" className="text-medium-gray hover:text-earth-tone transition-colors duration-300">
                  Galleries
                </Link>
              </li>
              <li>
                <Link href="/prints" className="text-medium-gray hover:text-earth-tone transition-colors duration-300">
                  Prints
                </Link>
              </li>
              <li>
                <Link href="/films" className="text-medium-gray hover:text-earth-tone transition-colors duration-300">
                  Films
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-medium-gray hover:text-earth-tone transition-colors duration-300">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-medium-gray hover:text-earth-tone transition-colors duration-300">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-medium-gray hover:text-earth-tone transition-colors duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-montserrat font-semibold mb-6 text-off-white">Contact</h3>
            <ul className="space-y-3">
              <li className="text-medium-gray">
                <span className="block mb-1">Email:</span>
                <a href="mailto:info@carlosp.photography" className="text-earth-tone hover:underline transition-colors duration-300">
                  info@carlosp.photography
                </a>
              </li>
              <li className="text-medium-gray mt-4">
                <span className="block mb-1">Print Sales:</span>
                <a href="mailto:prints@carlosp.photography" className="text-earth-tone hover:underline transition-colors duration-300">
                  prints@carlosp.photography
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-montserrat font-semibold mb-6 text-off-white">Newsletter</h3>
            <p className="text-medium-gray mb-4 leading-relaxed">
              Subscribe to receive updates on new prints, photography tips, and latest work.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full bg-dark-slate border border-medium-gray text-off-white px-4 py-3 focus:outline-none focus:border-earth-tone transition-colors duration-300"
                required
              />
              <button type="submit" className="w-full bg-earth-tone text-off-white px-4 py-3 font-raleway font-semibold uppercase tracking-wider transition-all duration-300 hover:bg-opacity-90">
                Subscribe
              </button>
            </form>
            <p className="text-xs text-medium-gray mt-3">
              I respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-dark-slate text-center">
          <div className="flex justify-center space-x-6 mb-6">
            <Link href="/privacy-policy" className="text-medium-gray hover:text-earth-tone transition-colors duration-300 text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-medium-gray hover:text-earth-tone transition-colors duration-300 text-sm">
              Terms of Service
            </Link>
            <Link href="/sitemap" className="text-medium-gray hover:text-earth-tone transition-colors duration-300 text-sm">
              Sitemap
            </Link>
          </div>
          <p className="text-medium-gray">
            &copy; {new Date().getFullYear()} Carlo SP Landscape Photography. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
