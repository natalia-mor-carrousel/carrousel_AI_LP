import type { Metadata } from 'next';
import './globals.css';
import Providers from '@/components/Providers';

export const metadata: Metadata = {
  title: 'Carrousel.ai — AI Training for Business Teams',
  description:
    'Hands-on AI training for leadership and business teams. Carrousel.ai helps small and medium companies become AI-native.',
  metadataBase: new URL('https://carrousel.ai'),
  openGraph: {
    title: 'Carrousel.ai — AI Training for Business Teams',
    description:
      'Hands-on AI training for leadership and business teams. Carrousel.ai helps small and medium companies become AI-native.',
    url: 'https://carrousel.ai',
    siteName: 'Carrousel.ai',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Carrousel.ai — AI Training for Business Teams',
    description:
      'Hands-on AI training for leadership and business teams. Carrousel.ai helps small and medium companies become AI-native.',
  },
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
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
