import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import About from "../components/About";
import Subscribe from "../components/Email";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Technology from "../components/Technology";
import Vision from '../components/Vision';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Technology />
      <Vision />
      <Subscribe />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;
