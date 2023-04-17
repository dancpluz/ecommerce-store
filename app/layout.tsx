import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { StateContext } from '../context/StateContext';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body{
    padding: 0;
  }
`;

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
    <>
      <GlobalStyles>
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
      </GlobalStyles>
    </>
  )
}

