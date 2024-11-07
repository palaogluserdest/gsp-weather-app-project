import React from 'react';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.scss';
import './layout.scss';
import 'react-toastify/dist/ReactToastify.css';
import LayoutWrapper from './components/LayoutWrapper';
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
        <LayoutWrapper>{children}</LayoutWrapper>
        <ToastContainer
          position="top-right"
          autoClose={1000}
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
      </body>
    </html>
  );
}
