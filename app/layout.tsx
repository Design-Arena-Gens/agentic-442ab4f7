import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AurumAI ? Intelligent Mining Optimization',
  description: 'AI-powered optimization and analytics for modern mining operations.',
  metadataBase: new URL('https://agentic-442ab4f7.vercel.app'),
  robots: { index: true, follow: true },
  openGraph: {
    title: 'AurumAI ? Intelligent Mining Optimization',
    description: 'Unlock higher yield, lower costs, and safer operations using AI.',
    url: 'https://agentic-442ab4f7.vercel.app',
    siteName: 'AurumAI',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AurumAI ? Intelligent Mining Optimization',
    description: 'AI-powered optimization and analytics for modern mining operations.',
  },
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}
