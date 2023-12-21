import './globals.css'
import { monserrat } from './ui/fonts'
import "./ui/fade.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={monserrat.className}>{children}</body>
    </html>
  )
}
