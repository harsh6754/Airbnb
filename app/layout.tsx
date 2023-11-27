import { Nunito } from "next/font/google";
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

const font = Nunito({
  subsets:["latin"],
});

export const metadata: Metadata = {
  title: 'Aribnb',
  description: 'Aribnb:-Store Your Project Here',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  )
}
