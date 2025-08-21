import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Peop360 - Transform People Decisions with AI, Assessments & Training',
    template: '%s | Peop360'
  },
  description: 'Revolutionizing HR and education with evidence-based diagnostics, adaptive automation, and globally benchmarked professional development programs. India\'s leading people analytics platform.',
  keywords: [
    'behavioral assessments India',
    'AI HR workflows',
    'n8n workflows HR',
    'AMA South Asia training partner',
    'NEP student profiling',
    'corporate L&D India',
    'people analytics',
    'HR automation'
  ],
  authors: [{ name: 'Peop360 Team' }],
  creator: 'Peop360',
  publisher: 'Peop360',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://peop360.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://peop360.com',
    siteName: 'Peop360',
    title: 'Transform People Decisions with AI, Assessments & Training',
    description: 'India\'s leading people analytics platform combining behavioral assessments, AI workflows, and professional training.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Peop360 - People Analytics Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@peop360',
    creator: '@peop360',
    title: 'Transform People Decisions with AI, Assessments & Training',
    description: 'India\'s leading people analytics platform combining behavioral assessments, AI workflows, and professional training.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'verification-token',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}