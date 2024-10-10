import React from 'react';
import Link from 'next/link';

export interface LogoProps {}

const Logo: React.FC<LogoProps> = () => {
  return (
    <div>
      <Link href="/">
        <p>I-MOTORS</p>
      </Link>
    </div>
  );
};

export default Logo;
