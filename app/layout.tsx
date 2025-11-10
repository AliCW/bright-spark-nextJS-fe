import Nav from "./ui/nav";

export default function RootLayout({children }: { children: React.ReactNode}) {
  return (
    <html lang="en">
        
        <body>
          {children}

          <Nav />

        </body>
    </html>
  )
}