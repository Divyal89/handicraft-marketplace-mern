import React from "react";
import Navbar from "../components/Navbar";
import Home_context from "../components/Home_context";
import AboutUs from "../components/AboutUs";
import Collection from "../components/Collection";
import Feature from "../components/Feature";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="scroll-smooth">
      <Navbar />
      <Home_context />
      <AboutUs />
      <Collection />
      <Feature />
      <Footer />
    </div>
  );
};

export default Home;
