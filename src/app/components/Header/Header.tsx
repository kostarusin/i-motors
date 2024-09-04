import React from 'react';
import Navi from './MainNavi';
import Logo from './Logo';
import UserNav from './UserNav';

export interface HeaderProps {
  // Define any props for the Header component here, if needed.
}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="sticky top-6 z-10">
      <div className="flex items-center justify-between pt-2 pb-2 pr-4 pl-4 rounded-lg bg-slate-100 shadow-md">
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
