'use client';

import React from 'react';
import Navi from './MainNavi';
import Logo from './Logo';
import UserNav from './UserNav';

export interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="absolut inset-x-0 top-0 z-50 border border-b-gray-300 shadow-md bg-white">
      <Navi />
    </header>
  );
};

export default Header;
