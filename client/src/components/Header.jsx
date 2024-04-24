import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-green-900 px-5 bottom-0 py-4">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">Farming Connect</h1>
        <ul className="flex space-x-4">
          <li><a href="/" className="text-white">Home</a></li>
          <li><a href="/about" className="text-white">About</a></li>
          <li><a href="/updates" className="text-white">Updates</a></li>
          <li><a href="/contact" className="text-white">Contact</a></li>
          <li><Link to={'/register'}className="text-white">Register</Link></li>
          <li><Link to={'/login'} className="text-white">Login</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
