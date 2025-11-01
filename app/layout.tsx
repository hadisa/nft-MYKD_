import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'MYKD - Gaming Tournament Platform',
  description: 'Join the ultimate gaming experience with professional tournaments, amazing prizes, and a community of elite players.',
  icons: {
    icon: [
      { url: '/nft1.png', type: 'image/png' },
    ],
    apple: [
      { url: '/nft1.png', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/nft1.png" type="image/png" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}