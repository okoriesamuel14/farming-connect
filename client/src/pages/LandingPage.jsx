import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link, useNavigate } from 'react-router-dom';
import farm from '../assets/FarmConnect.png';
import api from '../utils/api';

const LandingPage = () => {
  const Navigate = useNavigate()
  useEffect(() => {
    document.title = 'Farming Connect';
    const details = localStorage.getItem('userdetails')
    console.log(details);
    if (details) {
      Navigate('/posts');
    }
  }, []);
  
  return (
      <div className="landing-page">
        <Header/>
      <section className="hero  min-h-[100vh] bg-green-500 justify-center text center font-bold py-20 text-white">
        <div className="container justify-center text center font-bold text-3xl  mx-auto">
          <h1 className="text-4xl ml-10 justify-center text center font-bold mb-4">Welcome to Farming Connect</h1>
          <p className="justify-center  ml-10 text center font-bold text-3xl ">Your source for the latest farming system updates in Nigeria</p>
          {/* Add any other content you want to include */}
          <div className='flex rounded flex-col mb-10 justify-center mt-[20vh] items-center '>
                <Link to={'/register'} className='bg-green-900 mb-10 p-3 rounded-lg '>Join Us</Link>
          </div>
          
        
        </div>
      </section>
      <section className='h-screen'>
        <div className='h-[15vh] flex items-end justify-center'>
          <h2 className="text-3xl justify-center text-center font-bold">About Us</h2>
        </div>
          <div className='flex h-[85vh] items-center gap-5 w-full px-10'>
          <div className=" flex w-[50%] flex-col justify-center">
          <h1 className="text-lg text-center">
            Farming Connect is a platform dedicated to providing valuable insights and updates on the farming system in Nigeria. Our mission is to empower farmers with the knowledge and resources they need to thrive in today's agricultural landscape.
          </h1>
          <h1 className="text-lg text-center ">
            Whether you're a seasoned farmer or just starting out, Farming Connect is here to support you on your journey towards sustainable and successful farming practices. Join our community today and stay informed with the latest news, tips, and developments in Nigerian agriculture.
          </h1>
        </div>
        <div className='flex w-[50%]'>
          <img className='w-full' src={farm} alt="" />
        </div>
          </div>
      </section>
      {/* Add more sections or components for additional content */}
      <Footer/>
    </div>
  );
}

export default LandingPage;
