import type React from "react"
import type { Metadata } from "next"
import { Inter, Merriweather } from "next/font/google"
import "./globals.css"

// Importing the fonts for styling
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const merriweather = Merriweather({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-serif",
})

export const metadata: Metadata = {
  title: "Zuberi Fresh Farm",
  description: "Premium horticulture farm dedicated to growing the highest quality vegetables and fruits",
  generator: 'v0.dev',
  icons: {
    icon: '/favicon.png?v=2',
    shortcut: '/favicon-16x16.png?v=2',
    apple: '/apple-touch-icon.png?v=2',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${merriweather.variable} font-sans`}>
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Single Page Apps for GitHub Pages
              // MIT License
              // https://github.com/rafgraph/spa-github-pages
              // This script checks to see if a redirect is present in the query string,
              // converts it back into the correct url and adds it to the
              // browser's history using window.history.replaceState(...),
              // which won't cause the browser to attempt to load the new url.
              // When the single page app is loaded further down in this file,
              // the correct url will be waiting in the browser's history for
              // the single page app to route accordingly.
              (function(l) {
                if (l.search[1] === '/' ) {
                  var decoded = l.search.slice(1).split('&').map(function(s) { 
                    return s.replace(/~and~/g, '&')
                  }).join('?');
                  window.history.replaceState(null, null,
                      l.pathname.slice(0, -1) + decoded + l.hash
                  );
                }
              }(window.location))
            `,
          }}
        />
      </body>
    </html>
  )
}
