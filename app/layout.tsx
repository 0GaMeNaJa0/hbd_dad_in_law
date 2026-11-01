import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ถึงหมอ | Happy Birthday',
  description: 'จดหมายขอบคุณสำหรับคนสำคัญที่ดูแลกันมาตลอด',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="th">
      <body>{children}</body>
    </html>
  )
}

