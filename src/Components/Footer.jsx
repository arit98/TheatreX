import React from "react";
import {
  FaFacebookF,
  FaRedditAlien,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-col items-center bg-[#222831] z-1 md:p-0 p-4">
      <ul className="flex items-center gap-4 text-white py-8">
        <li>Terms Of Use</li>
        <li>Privacy-Policy</li>
        <li>About</li>
        <li>Blog</li>
        <li>FAQ</li>
      </ul>

      <p className="text-gray-700 text-center px-8">
        Welcome to TheatreX, your ultimate destination for discovering the best
        in cinema! Explore a world of captivating stories, thrilling adventures,
        and unforgettable moments. Whether you're a cinephile searching for
        hidden gems or a casual viewer seeking the latest blockbusters, TheatreX
        has something for everyone. Immerse yourself in a cinematic journey
        curated just for you. From timeless classics to cutting-edge
        masterpieces, our diverse collection ensures there's always something
        new to experience. With insightful reviews, curated playlists, and
        personalized recommendations, let TheatreX be your guide to the magic of
        the silver screen. Join us as we celebrate the art of storytelling and
        the power of film. Your next unforgettable movie experience awaits, only
        at TheatreX. Discover, indulge, and let the movies transport you to new
        worlds. Start your adventure today!
      </p>

      <ul className="flex items-center justify-center gap-6 pt-8 pb-8">
        <li className="md:h-16 h-12 md:w-16 w-12 rounded-full bg-[#1c2129] flex items-center justify-center text-3xl text-white">
          <a
            href="https://www.facebook.com/aritra.daschowdhury.3"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebookF />
          </a>
        </li>
        <li className="md:h-16 h-12 md:w-16 w-12 rounded-full bg-[#1c2129] flex items-center justify-center text-3xl text-white">
          <a
            href="https://www.reddit.com/user/Mammoth-Run-7750/"
            target="_blank"
            rel="noreferrer"
          >
            <FaRedditAlien />
          </a>
        </li>
        <li className="md:h-16 h-12 md:w-16 w-12 rounded-full bg-[#1c2129] flex items-center justify-center text-3xl text-white">
          <a href="https://github.com/arit98" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
        </li>
        <li className="md:h-16 h-12 md:w-16 w-12 rounded-full bg-[#1c2129] flex items-center justify-center text-3xl text-white">
          <a
            href="https://www.linkedin.com/in/aritra-das-chowdhury-802839140/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn />
          </a>
        </li>
      </ul>
      <p className="mb-2 text-center">Copyright © 2024 TheatreX. All rights reserved.</p>
    </div>
  );
};

export default Footer;
