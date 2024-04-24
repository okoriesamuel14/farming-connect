import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
      <div className="landing-page">
        <Header/>
      <section className="hero  min-h-[80vh] bg-green-500 justify-center text center font-bold text-3xl py-20 text-white">
        <div className="container justify-center text center font-bold text-3xl  mx-auto">
          <h1 className="text-4xl justify-center text center font-bold text-3xl  font-bold mb-4">Welcome to Farming Connect</h1>
          <p className="text-lg justify-center text center font-bold text-3xl ">Your source for the latest farming system updates in Nigeria</p>
          {/* Add any other content you want to include */}
        </div>
      </section>
      {/* Add more sections or components for additional content */}
      <Footer/>
    </div>
  );
}

export default LandingPage;
