import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-green-900 px-5 bottom-0 py-4">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">Farming Connect</h1>
        <ul className="flex space-x-4">
          <li><Link to={'/home'} className="text-white">Home</Link></li>
          <li><Link to={'/about'} className="text-white">About</Link></li>
          <li><Link to={'/updates'} className="text-white">Updates</Link></li>
          <li><Link to={'/contact'} className="text-white">Contact</Link></li>
          <li><Link to={'/register'}className="text-white">Register</Link></li>
          <li><Link to={'/login'} className="text-white">Login</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
