import React from "react";
import "./footer.css";
import logo from "../../assets/logo.png";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="pt-[107px] pb-[107px] bg-[#F5FCFF]">
        <div className="container mx-auto">
          <div className="top flex justify-between items-center">
            <img src={logo} alt="logo" />
            <div className="menu w-[40%]">
              <ul className="flex justify-between">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Portfolio</a>
                </li>
                <li>
                  <a href="#">About me</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
                <li>
                  <a href="#">Testimonials</a>
                </li>
              </ul>
            </div>
            <div className="icons flex w-[10%] justify-between">
              <FaFacebookF className="cursor-pointer" size={20} />
              <FaInstagram className="cursor-pointer" size={20} />
              <FaTwitter className="cursor-pointer" size={20} />
            </div>
          </div>
          <div className="w-[100%] h-[2px] bg-[#959595] mt-[100px]"></div>
          <div className="bottom pt-[40px]  flex justify-between">
            <p className="font-bold">Developed by Mohammad Sami</p>
            <div className="w-[25%]">
              <ul className="flex justify-between">
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms of Service</a>
                </li>
                <li>
                  <a href="#">Cokkies Settings</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
