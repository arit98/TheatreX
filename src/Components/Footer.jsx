import React from "react";
import { FaFacebookF, FaRedditAlien, FaGithub, FaLinkedinIn } from "react-icons/fa"

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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In tenetur
          voluptate recusandae illo nobis distinctio libero possimus error est,
          modi temporibus repudiandae facere aperiam porro itaque eveniet. Non,
          ex ipsam. Facilis minus illum repellendus quo, dignissimos iure veniam
          repudiandae at esse error id dolores? Quae ut sunt veniam nostrum
          perspiciatis, molestiae laborum praesentium id delectus quos, nobis
          aliquam vitae necessitatibus! Sed explicabo, doloribus architecto
          illum tenetur nostrum ea quidem, nesciunt laudantium dignissimos nobis
          eveniet, dolor voluptates autem? Itaque sed voluptatum pariatur
          explicabo provident tenetur consequuntur, culpa ad at. Error, culpa.
        </p>

        <ul className="flex items-center justify-center gap-6 pt-8 pb-12">
            <li className="md:h-16 h-12 md:w-16 w-12 rounded-full bg-[#1c2129] flex items-center justify-center text-3xl text-white"><FaFacebookF /></li>
            <li className="md:h-16 h-12 md:w-16 w-12 rounded-full bg-[#1c2129] flex items-center justify-center text-3xl text-white"><FaRedditAlien /></li>
            <li className="md:h-16 h-12 md:w-16 w-12 rounded-full bg-[#1c2129] flex items-center justify-center text-3xl text-white"><FaGithub /></li>
            <li className="md:h-16 h-12 md:w-16 w-12 rounded-full bg-[#1c2129] flex items-center justify-center text-3xl text-white">
                <FaLinkedinIn />
            </li>
        </ul>
      </div>
  );
};

export default Footer;
