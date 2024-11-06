'use client';
import NavLink from '../shared/NavLink';
import Link from 'next/link';
import { logOut } from '@/app/libs/user';
import Button from '../shared/Button';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from '@/app/hooks/useAuth';
import { RxHamburgerMenu } from 'react-icons/rx';
import { RiCloseLargeLine } from 'react-icons/ri';
import './Navbar.scss';
import React, { FC } from 'react';

type NavbarProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Navbar: FC<NavbarProps> = ({ isOpen, setIsOpen }) => {
  const { userData } = useAuth();

  const handleLogOut = async (uid: string) => {
    try {
      await logOut(uid);
      await fetch('/api/auth/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      toast.success('Log-out successfully');
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <div className="nav-logo">
        <h2 className="logo-text">Weather APP</h2>
      </div>
      <div className="nav-links">
        <ul className="nav-links-items">
          <li className="nav-links-item">
            <NavLink href="/">HOME</NavLink>
          </li>
          <li className="nav-links-item">
            <NavLink href="/faq">FAQ</NavLink>
          </li>
          <li className="nav-links-item">
            <NavLink href="/about-us">ABOUT US</NavLink>
          </li>
        </ul>
      </div>
      <div className="nav-user-btn">
        {!userData?.isAuth && (
          <Link href="/user-auth" className="login-link">
            Log-In
          </Link>
        )}
        {userData?.isAuth && (
          <>
            <Link href="/profile" className="login-link">
              {userData.firstName}
            </Link>
            <Button className="signout-btn" onClick={() => handleLogOut(userData.uid)}>
              Sign Out
            </Button>
          </>
        )}
      </div>
      <div className="mobil-menu-btn">
        <Button className="mobil-menu-btn" onClick={() => setIsOpen((prev) => !prev)}>
          {!isOpen && <RxHamburgerMenu size={35} />}
          {isOpen && <RiCloseLargeLine size={35} />}
        </Button>
      </div>
    </>
  );
};

export default Navbar;
