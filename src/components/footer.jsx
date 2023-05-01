import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { AiFillFacebook, AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai";

import { LogoW } from '../assets'
import '../styles/navbar.scss'


const Footer = () => {
  return (
    <footer className="footer bg-sfteal text-white  ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <img src={LogoW} alt="Company Logo" className="h-12 mb-4" />
            <p className="w-3/4" >We are a company that specializes in creating innovative solutions for our clients.</p>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4">Our Divisions</h3>
            <ul>
              <li>Safirisha Express</li>
              <li>Global Forwading</li>
              <li>SL Frieght </li>
              <li>SL Supply Chain </li>
              <li>E-commerce Solutions </li>
              <li>Auto Mobility</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4">Branches</h3>
            <ul>
              <li>New York</li>
              <li>London</li>
              <li>Paris</li>
              <li>Tokyo</li>
              <li>Sydney</li>
              <li>Nairobi</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4">Contact Us</h3>
            <ul>
              <li><FaPhoneAlt className=" text-orange inline-block mr-2" />+1 (555) 555-5555</li>
              <li><FaEnvelope className=" text-orange inline-block mr-2" />contact@ourcompany.com</li>
              <li><FaMapMarkerAlt className=" text-orange inline-block mr-2" />123 Main St, Suite 200, USA</li>
            </ul>
            <h3 className="text-lg font-medium mb-4 underline">Follow Us</h3>
            <ul className="flex">
              <li className="mr-4"><a href="#"><AiFillFacebook className="text-white text-2xl" /></a></li>
              <li className="mr-4"><a href="#"><AiFillTwitterCircle className="text-white text-2xl" /></a></li>
              <li><a href="#"><AiFillInstagram className="text-white text-2xl" /></a></li>
            </ul>
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
