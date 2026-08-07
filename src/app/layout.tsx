import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Carrousel.ai',
  description:
    "I'm Natalia, I built a company alone in six months using AI. Now I sit with your leadership and business teams and do the same thing inside yours.",
  icons: {
    icon: '/logos/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
