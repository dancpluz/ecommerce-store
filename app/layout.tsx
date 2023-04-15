import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { StateContext } from '../context/StateContext';


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
      <body>
        {/*
        <StateContext> */}
          <Navbar />
          <main>
            {children}
          </main>
          {/*
          <Footer />
        </StateContext>
        */}
      </body>
    </html>
  )
}

