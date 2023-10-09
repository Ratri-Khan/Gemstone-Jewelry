// import React from 'react'
// import logo from '../../../assets/logo.png';
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaMapMarker,
  FaMailBulk,
  FaPhoneAlt,
} from "react-icons/fa";
const Footer = () => {
  return (
   
    <footer className="footer p-10 bg-teal-800 text-base-content">
      <div className="items-center grid-flow-col">
        
        <p className='text-white'>
        <p>Gemstone-Jewelry</p>
          <span className="md:text-2xl"> Gemstone Industries Ltd.</span> <br />
          <span className="md:text-lg">
            Providing Enjoyable Toys since 1990{" "}
          </span>
          <br />
          <span className="mt-24 text-white">
            Copyright © 2023 - All right reserved by Gemstone Industries Ltd
          </span>
        </p>
      </div>
      <div>
        <span className="footer-title text-white">Social Media Links</span>
        <div className="flex gap-4 text-white">
          <FaFacebook></FaFacebook>
          <FaTwitter></FaTwitter>
          <FaLinkedin></FaLinkedin>
          <FaYoutube></FaYoutube>
        </div>
      </div>
      <div className='text-white'>
        <span className="footer-title">Contact Us</span>
        <div className="">
          <p className=' flex gap-3 items-center'><span><FaMapMarker></FaMapMarker></span>34/4 block-3,Uttara,Dhaka</p>
          <p className=' flex gap-3 items-center'><span><FaMailBulk></FaMailBulk></span>gemstone@gmail.com</p>
          <p className=' flex gap-3 items-center'><span><FaPhoneAlt></FaPhoneAlt></span>+00327843209</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer