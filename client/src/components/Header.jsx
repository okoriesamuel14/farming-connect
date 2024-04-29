import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-green-900 px-5 bottom-0 py-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link to={'/'}><h1 className="text-white text-3xl font-bold">Farming Connect</h1> </Link>
        <div className='flex gap-4'>
        <Link to={'/login'}><h1 className="text-white text-xl font-bold">Sign In</h1> </Link>
        <Link to={'/register'}><h1 className="text-white text-xl font-bold">Join Us</h1> </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
