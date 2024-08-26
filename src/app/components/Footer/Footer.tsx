import React from 'react';

export interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="">
      <div className="flex items-center justify-between p-6 rounded-lg bg-slate-100">
        <p>Footer</p>
      </div>
    </footer>
  );
};

export default Footer;
