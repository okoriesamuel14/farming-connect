import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutPage = () => {
  return (
    <div className="about-page">
        <Header/>
      <section className="py-20 min-h-[80vh] bg-green-500">
        <div className="container mx-auto">
          <h2 className="text-3xl justify-content text-center font-bold mb-4">About Farming Connect</h2>
          <p className="text-lg text-center  mb-4">
            Farming Connect is a platform dedicated to providing valuable insights and updates on the farming system in Nigeria. Our mission is to empower farmers with the knowledge and resources they need to thrive in today's agricultural landscape.
          </p>
          <p className="text-lg text-center ">
            Whether you're a seasoned farmer or just starting out, Farming Connect is here to support you on your journey towards sustainable and successful farming practices. Join our community today and stay informed with the latest news, tips, and developments in Nigerian agriculture.
          </p>
        </div>
      </section>
      <Footer/>
    </div>
  );
}

export default AboutPage;
