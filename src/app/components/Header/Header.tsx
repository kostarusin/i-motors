import React from 'react';
import Navi from './MainNavi';
import Logo from './Logo';
import UserNav from './UserNav';

export interface HeaderProps {
  // Define any props for the Header component here, if needed.
}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="">
      <div className="flex items-center justify-between p-6 rounded-lg bg-slate-100">
        <Logo />
        <Navi />
        <UserNav />
      </div>
    </header>
  );
};

export default Header;

// sticky z-50 top-0 bg-background border-b fade-in
//
