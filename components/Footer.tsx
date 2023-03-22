'use client'

import Link from 'next/link';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

export default function Footer() {
  return (
    <footer className='footer-container'>
      <p>Todos os direitos reservados Dropshit © 2023</p>
      <div>
        <InstagramIcon />
        <TwitterIcon />
      </div>
    </footer>
  );
}