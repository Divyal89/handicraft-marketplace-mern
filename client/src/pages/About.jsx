import React from "react";
import artisanImg from "../assets/imgw7.jpg"; // Image of artisans
import workshopImg from "../assets/imgw12.jpg"; // Image of workshop

const AboutUs = () => {
  return (
    <div className="bg-[#F9F6F2] text-gray-800">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-center md:justify-between px-8 md:px-24 py-16 md:py-24">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            About Our Handicrafts
          </h1>
          <p className="text-lg md:text-xl mb-6">
            We celebrate the beauty of handmade artistry. Our mission is to
            connect talented artisans with the world, offering unique creations
            made with love, tradition, and skill.
          </p>
          <button className="bg-[#A8977A] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#8C7B5D] transition">
            Explore Products
          </button>
        </div>
        <div className="md:w-1/2">
          <img
            src={artisanImg}
            alt="Artisan working on craft"
            className="rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* Story Section */}
      <section className="flex flex-col md:flex-row items-center justify-center px-8 md:px-24 py-16 md:py-24 bg-white">
        <div className="md:w-1/2">
          <img
            src={workshopImg}
            alt="Workshop"
            className="rounded-xl shadow-lg mb-6 md:mb-0"
          />
        </div>
        <div className="md:w-1/2 md:pl-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Story</h2>
          <p className="text-lg mb-4">
            Founded with the vision of preserving traditional crafts, our
            platform empowers artisans to reach global audiences. Each piece
            tells a story of heritage, dedication, and creativity.
          </p>
          <p className="text-lg">
            By choosing our handicrafts, you’re not only bringing home something
            unique but also supporting communities and their timeless
            traditions.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="px-8 md:px-24 py-16 md:py-24 text-center bg-[#F9F6F2]">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          To connect people with the charm of handmade crafts, to empower
          artisans, and to preserve the cultural heritage of traditional arts.
          Every purchase supports skill, creativity, and sustainability.
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
