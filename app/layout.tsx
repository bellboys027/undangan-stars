import './globals.css'

export const metadata = {
  title: 'STARS Billiard & Cafe',
  description: 'Grand Opening Invitation',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, backgroundColor: '#000' }}>
        {children}
      </body>
    </html>
  )
}