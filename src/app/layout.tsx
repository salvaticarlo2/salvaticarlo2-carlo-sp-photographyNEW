import { Playfair_Display, Raleway, Montserrat } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
  weight: ['400', '700'],
});

const raleway = Raleway({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-raleway',
  weight: ['300', '400', '500', '600'],
});

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
  weight: ['400', '600'],
});

export const metadata = {
  title: 'Carlo SP Landscape Photography | Professional Landscape Photographer',
  description:
    'Carlo SP is a professional landscape photographer specializing in capturing the beauty of natural landscapes. Explore galleries, prints, and more.',
  keywords:
    'landscape photography, Carlo SP, landscape prints, nature photography',
  openGraph: {
    title: 'Carlo SP Landscape Photography',
    description: 'Professional landscape photography and fine art prints',
    url: 'https://carlosp.photography',
    siteName: 'Carlo SP Landscape Photography',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Carlo SP Landscape Photography',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Carlo SP Landscape Photography',
    description:
      'Professional landscape photography and fine art prints',
    images: ['/images/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${raleway.variable} ${montserrat.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
