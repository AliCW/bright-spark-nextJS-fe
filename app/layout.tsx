import Nav from "../app/ui/nav";



export default function RootLayout({children }: { children: React.ReactNode}) {
  return (
    <html lang="en">
      <div>
        <div>
        <Nav />
        </div>
        <body>{children}</body>
      </div>
    </html>
  )
}