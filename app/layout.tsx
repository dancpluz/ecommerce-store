import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const metadata = {
  title: 'Dropshit',
  description: 'Streetwear shit',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body className='layout'>
        <Navbar />
        <main className='main-container'>
          {children}
        </main>
        <Footer /> 
      </body>
    </html>
  )
}

