import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import { FaRegCopyright } from 'react-icons/fa6';
import './Footer.scss';

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-logo">
        <h2 className="logo-text">Weather APP</h2>
      </div>
      <div className="footer-text">
        <p className="text-content">
          Design by Serdest PALAOGLU, Havin KARACIL. Reserved all right.
          <FaRegCopyright size={18} color="#fff" /> You can click for{' '}
          <Link href="https://github.com/palaogluserdest/gsp-weather-app-project">GitHub Repo</Link>
        </p>
      </div>
      <div className="footer-social-links">
        <ul className="social-links">
          <li className="social-link">
            <Link href="https://github.com/palaogluserdest">
              <FaGithub size={30} color="#fff" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
