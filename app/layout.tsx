import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'API Endpoint Downtime Alerter — Get instant alerts when your APIs fail',
  description: 'Monitors API endpoints and sends instant notifications when they go down or return errors. Built for indie developers and small teams.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="5ad555c3-d357-4719-a550-3cea5df3f00e"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  )
}
