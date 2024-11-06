'use client';
import React, { FC } from 'react';
import NavLink from '../shared/NavLink';
import { useAuth } from '@/app/hooks/useAuth';
import Link from 'next/link';
import Button from '../shared/Button';
import { logOut } from '@/app/libs/user';
import { toast } from 'react-toastify';
import './MobilNavbar.scss';

type MobilNavbarProps = {
  isOpen: boolean;
};

const MobilNavbar: FC<MobilNavbarProps> = ({ isOpen }) => {
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
    <div className="mobil-menu" style={{ display: `${isOpen ? 'flex' : 'none'}` }}>
      <div className="mobil-nav-links">
        <ul className="mobil-nav-links-items">
          <li className="mobil-nav-links-item">
            <NavLink href="/" className="mobil-nav-link">
              HOME
            </NavLink>
          </li>
          <li className="mobil-nav-links-item">
            <NavLink href="/faq" className="mobil-nav-link">
              FAQ
            </NavLink>
          </li>
          <li className="mobil-nav-links-item">
            <NavLink href="/about-us" className="mobil-nav-link">
              ABOUT US
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="mobil-nav-user-btn">
        {!userData?.isAuth && (
          <Link href="/user-auth" className="mobil-login-link">
            Log-In
          </Link>
        )}
        {userData?.isAuth && (
          <>
            <Link href="/profile" className="mobil-login-link">
              {userData.firstName}
            </Link>
            <Button className="mobil-signout-btn" onClick={() => handleLogOut(userData.uid)}>
              Sign Out
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default MobilNavbar;
