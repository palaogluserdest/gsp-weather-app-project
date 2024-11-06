'use client';
import Image from 'next/image';
import React, { FC, useEffect, useState } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import MobilNavbar from '../MobilNavbar';
import { Bounce, ToastContainer } from 'react-toastify';

type LayoutWrapperProps = {
  children: React.ReactNode;
};

const LayoutWrapper: FC<LayoutWrapperProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [windowSize, setWindowSize] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [windowSize]);

  return (
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
        <Navbar isOpen={windowSize <= 1024 && isOpen} setIsOpen={setIsOpen} />
      </nav>
      <main className="main-container">{children}</main>
      <footer className="footer-container">
        <Footer />
      </footer>
      {windowSize <= 1024 && <MobilNavbar isOpen={isOpen} />}
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
    </div>
  );
};

export default LayoutWrapper;
