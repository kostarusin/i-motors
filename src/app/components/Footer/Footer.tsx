import React from 'react';

export interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-4">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 I-MOTORS. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
