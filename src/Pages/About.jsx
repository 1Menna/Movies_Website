import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from "@material-tailwind/react";
 const About = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6 text-red-400 dark:text-red-400">
        About <span className="font-black">WATCH</span>
      </h1>
      
      <div className="space-y-4 text-lg text-gray-500 dark:text-gray-300">
        <p>
          At <span className="font-bold text-red-400 dark:text-red-400">WATCH</span>, we live and breathe movies. Our mission is simple: to bring you the most honest reviews, breaking news, and exciting updates from the world of cinema.
        </p>
        
        <p>
          From blockbuster hits to indie darlings, we cover it all—trailers, box office trends, and exclusive behind-the-scenes insights. Whether you're a casual viewer or a hardcore cinephile, we’ve got something for you.
        </p>
        
        <p>
          Our team of film buffs is dedicated to delivering high-quality, engaging content that keeps you coming back for more. Got a movie recommendation or feedback? We’d love to hear from you!
        </p>
        
        <p className="text-center italic text-red-400 dark:text-red-400 mt-6">
          Lights, camera, action—let’s explore the magic of movies together! 🍿
        </p>

        {/* Centered Button */}
        <div className="flex justify-center mt-6">
          <Link to="/Contact" className="hover:text-info">
            <Button className="bg-red-400 text-neutral-content" variant="outlined">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About