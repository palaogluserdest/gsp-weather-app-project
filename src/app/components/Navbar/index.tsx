import Image from 'next/image';
import NavLink from '../shared/NavLink';
import './Navbar.scss';
import Link from 'next/link';

const Navbar = () => {
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
        <Link href="/auth" className="login-link">
          Log-In
        </Link>
        <Link href="/profile" className="login-link">
          Profile
        </Link>
      </div>
    </>
  );
};

export default Navbar;
