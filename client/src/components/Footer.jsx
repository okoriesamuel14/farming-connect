import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-green-900 flex  gap-5 py-4">
      <div className=' flex gap-5 text-lg pl-5  font-normal'> 
            <a><Link to={'/about'} className="text-white ">About</Link></a>
          <a><Link to={'/contact'} className="text-white">Contact</Link></a>
          </div>
      <p className="text-center pl-[30%] text-white">&copy; {new Date().getFullYear()} Your Farming Connect</p>
    </footer>
  );
}

export default Footer;
