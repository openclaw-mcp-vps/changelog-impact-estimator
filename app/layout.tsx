import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Changelog Impact Estimator',
  description: 'Estimate customer impact of each changelog entry using AI'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="6991e120-bc07-4141-aa28-cb74b276ed82"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
