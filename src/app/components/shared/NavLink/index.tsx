'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { FC } from 'react';
import './styles.scss';

type NavLinkProps = {
  children: React.ReactNode;
  href: string;
};

const NavLink: FC<NavLinkProps> = ({ children, href }) => {
  const path = usePathname();

  return (
    <Link href={href} className={`${path === href ? 'nav-active' : ''} navlink`}>
      {children}
    </Link>
  );
};

export default NavLink;
