import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.scss';
import './layout.scss';
import React from 'react';
import Image from 'next/image';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Bounce, ToastContainer } from 'react-toastify';

const prompt = localFont({
  src: [
    {
      path: './fonts/Prompt-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Prompt-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/Prompt-Bold.ttf',
      weight: '700',
      style: 'bold',
    },
    {
      path: './fonts/Prompt-SemiBold.ttf',
      weight: '600',
      style: 'bold',
    },
    {
      path: './fonts/Prompt-ExtraBold.ttf',
      weight: '800',
      style: 'bold',
    },
    {
      path: './fonts/Prompt-Black.ttf',
      weight: '900',
      style: 'bold',
    },
  ],
  variable: '--font-prompt',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Weather APP',
  description: 'Following daily weather infos',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${prompt.variable}`}>
        <div className="container">
          <div className="background-image">
            <Image
              src="/assets/images/background-picture.webp"
              fill
              alt="background image"
              style={{ objectFit: 'cover' }}
            />
            {/* <video src="/assets/videos/clear-weather.webm" autoPlay loop muted></video> */}
          </div>
          <nav className="navbar-container">
            <Navbar />
          </nav>
          <main className="main-container">{children}</main>
          <footer className="footer-container">
            <Footer />
          </footer>
          <ToastContainer
            position="top-right"
            autoClose={1500}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
            transition={Bounce}
            className="toastify-bar"
          />
        </div>
      </body>
    </html>
  );
}
