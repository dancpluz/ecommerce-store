import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { StateContext } from '../context/StateContext';
//import { Toaster } from 'react-hot-toast';

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
        <StateContext>
          
          <Navbar />
          <main className='main-container'>
            {children}
          </main>
          <Footer /> 
        </StateContext>
      </body>
    </html>
  )
}

