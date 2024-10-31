'use client';
import Image from 'next/image';
import NavLink from '../shared/NavLink';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/app/libs/firebase';
import { getUserFromFS, logOut } from '@/app/libs/user';
import { userProfile } from '@/app/types/types';
import Button from '../shared/Button';
import { Bounce, toast, ToastContainer } from 'react-toastify';
import './Navbar.scss';
import 'react-toastify/dist/ReactToastify.css';

const Navbar = () => {
  const [userData, setUserData] = useState<userProfile | null>(null);

  const handleLogOut = async (uid: string) => {
    try {
      await logOut(uid);

      toast.success('Log-out successfully', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
        transition: Bounce,
      });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(error.message, {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
        transition: Bounce,
      });
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const fetchedUser = await getUserFromFS(user.uid);

        if (fetchedUser) {
          setUserData(fetchedUser);
        } else {
          setUserData(null);
        }
      }
    });

    return () => unsubscribe();
  }, [userData]);

  return (
    <>
      <div className="nav-logo">
        <Image src="/assets/images/logo-dark.png" alt="logo" width={150} height={80} />
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
          <Link href="/auth" className="login-link">
            Log-In
          </Link>
        )}
        {userData?.isAuth && (
          <>
            <Link href="/profile" className="login-link">
              {userData.firstName}
            </Link>
            <Button onClick={() => handleLogOut(userData.uid)}>Sign Out</Button>
          </>
        )}
      </div>
      <ToastContainer />
    </>
  );
};

export default Navbar;
