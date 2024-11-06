'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { FC } from 'react';
import './styles.scss';

type NavLinkProps = {
  children: React.ReactNode;
  href: string;
  className?: string;
};

const NavLink: FC<NavLinkProps> = ({ children, href, className }) => {
  const path = usePathname();

  return (
    <Link href={href} className={`${path === href ? 'nav-active' : ''} navlink ${className}`}>
      {children}
    </Link>
  );
};

export default NavLink;
