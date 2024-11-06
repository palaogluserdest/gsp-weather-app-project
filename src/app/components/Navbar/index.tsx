'use client';
import Image from 'next/image';
import NavLink from '../shared/NavLink';
import Link from 'next/link';
import { logOut } from '@/app/libs/user';
import Button from '../shared/Button';
import { toast } from 'react-toastify';
import './Navbar.scss';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from '@/app/hooks/useAuth';

const Navbar = () => {
  const { userData } = useAuth();

  const handleLogOut = async (uid: string) => {
    try {
      await logOut(uid);

      toast.success('Log-out successfully');
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(error.message);
    }
  };

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
    </>
  );
};

export default Navbar;
