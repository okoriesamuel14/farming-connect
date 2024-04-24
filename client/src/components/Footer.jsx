import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-green-900 py-4">
      <p className="text-center text-white">&copy; {new Date().getFullYear()} Your Farming Connect</p>
    </footer>
  );
}

export default Footer;
