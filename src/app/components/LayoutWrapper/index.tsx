'use client';
import Image from 'next/image';
import React, { FC, useEffect, useState } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import MobilNavbar from '../MobilNavbar';

type LayoutWrapperProps = {
  children: React.ReactNode;
};

const LayoutWrapper: FC<LayoutWrapperProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [windowSize, setWindowSize] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);

      if (windowSize > 1024) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [windowSize]);

  return (
    <>
      <div className="background-image">
        <Image
          src="/assets/images/lonely-house-bg-img.jpg"
          fill
          alt="background image"
          style={{ objectFit: 'cover' }}
        />
        {/* <video src="/assets/videos/clear-weather.webm" autoPlay loop muted></video> */}
      </div>
      <div className="container">
        <nav className="navbar-container">
          <Navbar isOpen={windowSize <= 1024 && isOpen} setIsOpen={setIsOpen} />
        </nav>
        <main className="main-container">{children}</main>
        <footer className="footer-container">
          <Footer />
        </footer>
        {windowSize <= 1024 && <MobilNavbar isOpen={isOpen} />}
      </div>
    </>
  );
};

export default LayoutWrapper;
