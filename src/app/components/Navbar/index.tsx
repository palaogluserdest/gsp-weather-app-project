import Image from 'next/image';
import Button from '../shared/Button';
import NavLink from '../shared/NavLink';
import './Navbar.scss';

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
        <Button type="button">Log-In</Button>
        <Button type="button">REGISTER</Button>
      </div>
    </>
  );
};

export default Navbar;
