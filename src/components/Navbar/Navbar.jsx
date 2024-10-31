import React from "react";
import "./navbar.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <>
      <nav className="pt-[26px] pb-[26px]">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
            <div className="menu flex justify-center">
              <ul className="flex text-[22px] gap-[43px] font-regular">
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
                  <a href="#">Testimonial</a>
                </li>
              </ul>
            </div>
            <div className="nav-button">
              <button className="rounded-md pt-[15px] pb-[15px] pl-[31px] pr-[31px] text-[22px]">
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
