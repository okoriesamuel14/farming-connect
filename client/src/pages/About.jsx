import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import farm from '../assets/FarmConnect.png';

const AboutPage = () => {
  return (
    <div className="">
        <Header/>
      <section className=" bg-green-500">
        <div className=" flex justify-center">
          <h2 className="text-3xl font-bold">About Us</h2>
          <h1 className="text-lg text-center">
            Farming Connect is a platform dedicated to providing valuable insights and updates on the farming system in Nigeria. Our mission is to empower farmers with the knowledge and resources they need to thrive in today's agricultural landscape.
          </h1>
          <h1 className="text-lg text-center ">
            Whether you're a seasoned farmer or just starting out, Farming Connect is here to support you on your journey towards sustainable and successful farming practices. Join our community today and stay informed with the latest news, tips, and developments in Nigerian agriculture.
          </h1>
          <img className='w-[40%]' src={farm} alt="" />
        </div>
      </section>
      <Footer/>
    </div>
  );
}

export default AboutPage;
