import type { Metadata } from 'next'
import './globals.css'
import { monserrat } from './ui/fonts'

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
