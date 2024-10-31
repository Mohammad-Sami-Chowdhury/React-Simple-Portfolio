import React from "react";
import banner from "../../assets/banner.png";
import "./banner.css";

const Banner = () => {
  return (
    <>
      <section className="pt-[135px] pb-[135px] bg-[#F5FCFF]">
        <div className="container mx-auto">
          <div className="banner-parent flex justify-between items-center">
            <div className="banner-l">
              <h4 className="text-[22px] font-semibold">Hey, I am John</h4>
              <h1 className="text-[56px] font-bold pt-[22px]">
                I create <span className="text-[#5E3BEE]">product design</span>
                <br /> and brand experience
              </h1>
              <p className="text-[24px] pt-[22px] pb-[32px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <br />
                Suspendisse varius enim in eros elementum tristique.
              </p>
              <button className="bg-[#5E3BEE] text-[22px] text-[#FFFFFF] pt-[18px] pb-[18px] pl-[25px] pr-[25px] rounded-md">
                Get in touch
              </button>
            </div>
            <div className="banner-r">
              <img src={banner} alt="banner" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
