import React from 'react';
import Navi from '../MainNavi/MainNavi';

export interface HeaderProps {
  // Define any props for the Header component here, if needed.
}

const Header: React.FC<HeaderProps> = () => {
  return (
    <>
      <Navi />
    </>
  );
};

export default Header;
