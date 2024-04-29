import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../utils/api';

const Header = () => {
  const [userDetails, setUserDetails]= useState({})
  const Navigate = useNavigate()
  const logout = async () =>{
    await api.post("api/users/logout") 
    localStorage.removeItem('userdetails')
    localStorage.removeItem('posts')
    Navigate('/login')
  }
  const getUserdetails = async () => {
    try {
      const response = await api.get("api/users/profile", {
        withCredentials:true,
      });
      localStorage.setItem("userdetails", JSON.stringify(response.data))
      setUserDetails(response.data)
      console.log(response);
    } catch (error) {
      console.log(error);
    } 
  };
  useEffect(() => {
    getUserdetails()

  },[])
  return (
    <header className="bg-green-900 px-5 bottom-0 py-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link to={'/'}><h1 className="text-white text-3xl font-bold">Farming Connect</h1> </Link>
        {
          userDetails?
          <div className='flex gap-4'>
        <h1 className="text-white text-xl font-bold">{userDetails && userDetails.name}</h1>
        <div className='w-[2px] bg-white'></div>
        <h1 onClick={logout} className=" cursor-pointer text-white text-xl font-bold">Log out</h1>
        </div>:
          <div className='flex gap-4'>
        <Link to={'/login'}><h1 className="text-white text-xl font-bold">Sign In</h1> </Link>
        <Link to={'/register'}><h1 className="text-white text-xl font-bold">Join Us</h1> </Link>
        </div>}
      </nav>
    </header>
  );
}

export default Header;
