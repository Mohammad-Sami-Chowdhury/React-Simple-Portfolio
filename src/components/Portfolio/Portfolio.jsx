import React from "react";
import { FaDribbble } from "react-icons/fa";
import "./portfolio.css";
import portfolio1 from "../../assets/portfolio1.png";
import portfolio2 from "../../assets/portfolio2.png";
import portfolio3 from "../../assets/portfolio3.png";
import { GoArrowDownRight } from "react-icons/go";

const Portfolio = () => {
  return (
    <>
      <section className="pt-[150px] pb-[150px] bg-[#ffffff]">
        <div className="container mx-auto">
          <div className="portfolio-top flex justify-between items-center">
            <div className="head">
              <h2 className="text-[22px] font-bold pt-[22px]">
                Recents Projects
              </h2>
              <h5 className="text-[64px] font-bold">My Portfolio</h5>
            </div>
            <div className="button flex items-center relative h-0 ">
              <FaDribbble
                size={32}
                color="white"
                className="icon absolute top-[-15px] left-[10px]"
              />
              <button className="text-white text-[22px] rounded-lg pt-[22px] pb-[22px] pr-[22px] pl-[50px] bg-[#E62872] border-[1px] border-[]">
                Visit My Dribble
              </button>
            </div>
          </div>
          <div className="portfolio-bottom flex justify-between pt-[105px]">
            <div className="portfolio">
              <img src={portfolio1} alt="portfolio1" />
              <div className="bg-white w-[500px] rounded-b-lg shadow-xl pt-[32px] pb-[32px] pl-[32px] pr-[32px]">
                <h6 className="text-[32px] font-bold pb-[10px]">Ahuse</h6>
                <p className="text-[22px] pb-[32px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros.
                </p>
                <button className="port-btn">
                  <div className="a flex">
                    <a href="#" className="text-[18px] pb-[10px]">View In Dribbble</a>
                    <GoArrowDownRight size={22} className="arrow" />
                  </div>
                  <div className="line bg-[#5e3bee] h-[2px] w-0"></div>
                </button>
              </div>
            </div>
            <div className="portfolio">
              <img src={portfolio2} alt="portfolio1" />
              <div className="bg-white shadow-xl rounded-b-lg  w-[500px] pt-[32px] pb-[32px] pl-[32px] pr-[32px]">
                <h6 className="text-[32px] font-bold pb-[10px]">App Dashboard</h6>
                <p className="text-[22px] pb-[32px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros.
                </p>
                <button className="port-btn">
                  <div className="a flex">
                    <a href="#" className="text-[18px] pb-[10px]">View In Dribbble</a>
                    <GoArrowDownRight size={22} className="arrow" />
                  </div>
                  <div className="line bg-[#5e3bee] h-[2px] w-0"></div>
                </button>
              </div>
            </div>
            <div className="portfolio">
              <img src={portfolio3} alt="portfolio1" />
              <div className="bg-white shadow-xl rounded-b-lg w-[500px] pt-[32px] pb-[32px] pl-[32px] pr-[32px]">
                <h6 className="text-[32px] font-bold pb-[10px]">Easy Rent</h6>
                <p className="text-[22px] pb-[32px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros.
                </p>
                <button className="port-btn">
                  <div className="a flex">
                    <a href="#" className="text-[18px] pb-[10px]">View In Dribbble</a>
                    <GoArrowDownRight size={22} className="arrow" />
                  </div>
                  <div className="line bg-[#5e3bee] h-[2px] w-0"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
