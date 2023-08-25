import './globals.css'
import type { Metadata } from 'next'
import { Inter, Roboto_Mono } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nathan Pointer',
  description: 'blog',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/styles/github-dark.min.css"></link>
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
