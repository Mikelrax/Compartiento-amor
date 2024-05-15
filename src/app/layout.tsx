import type { Metadata } from 'next'
import './globals.css'
import { monserrat } from './ui/fonts'
import "./ui/fade.css"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';

import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import 'swiper/css/grid';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={monserrat.className}>{children}</body>
    </html>
  )
}
