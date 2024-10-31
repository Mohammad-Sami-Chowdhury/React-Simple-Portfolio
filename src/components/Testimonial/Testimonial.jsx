import React from "react";
import { FaStar } from "react-icons/fa6";
import avatar1 from "../../assets/avatar1.png";
import avatar2 from "../../assets/avatar2.png";
import avatar3 from "../../assets/avatar3.png";
import "./testimonial.css";

const Testimonial = () => {
  return (
    <>
      <section className="pt-[150px] pb-[150px] bg-[#F5FCFF]">
        <div className="container mx-auto">
          <div className="top">
            <h6 className="text-[22px] font-semibold pb-[22px]">
              Clients Feedback
            </h6>
            <h3 className="text-[64px] font-bold">Customer testimonials</h3>
          </div>
          <div className="main mt-[107px] flex justify-between">
            <div className="test rounded-lg w-[500px] pt-[42px] pb-[42px] pl-[42px] pr-[42px] border-2 border-[#006B6A]">
              <div className="star flex mb-[43px]">
                <FaStar size={25} color="#006B6A" className="icon" />
                <FaStar size={25} color="#006B6A" className="icon" />
                <FaStar size={25} color="#006B6A" className="icon" />
                <FaStar size={25} color="#006B6A" className="icon" />
                <FaStar size={25} color="#006B6A" className="icon" />
              </div>
              <p className="text-[22px] pb-[43px]">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra."
              </p>
              <div className="flex items-center">
                <img src={avatar1} alt="avatar1" />
                <div className="pl-[22px]">
                  <h6 className="text-[22px] font-bold text-[#000000]">
                    Dianne Russell
                  </h6>
                  <h5 className="text-[22px] text-[#000000]">Starbucks</h5>
                </div>
              </div>
            </div>
            <div className="test rounded-lg w-[500px] pt-[42px] pb-[42px] pl-[42px] pr-[42px] border-2 border-[#006B6A]">
              <div className="star flex mb-[43px]">
                <FaStar size={25} color="#006B6A" className="icon" />
                <FaStar size={25} color="#006B6A" className="icon" />
                <FaStar size={25} color="#006B6A" className="icon" />
                <FaStar size={25} color="#006B6A" className="icon" />
                <FaStar size={25} color="#006B6A" className="icon" />
              </div>
              <p className="text-[22px] pb-[43px]">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra."
              </p>
              <div className="flex items-center">
                <img src={avatar2} alt="avatar1" />
                <div className="pl-[22px]">
                  <h6 className="text-[22px] font-bold text-[#000000]">
                    Kristin Watson
                  </h6>
                  <h5 className="text-[22px] text-[#000000]">Louis Vuitton</h5>
                </div>
              </div>
            </div>
            <div className="test rounded-lg w-[500px] pt-[42px] pb-[42px] pl-[42px] pr-[42px] border-2 border-[#006B6A]">
              <div className="star flex mb-[43px]">
                <FaStar size={25} color="#006B6A" className="icon" />
                <FaStar size={25} color="#006B6A" className="icon" />
                <FaStar size={25} color="#006B6A" className="icon" />
                <FaStar size={25} color="#006B6A" className="icon" />
                <FaStar size={25} color="#006B6A" className="icon" />
              </div>
              <p className="text-[22px] pb-[43px]">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra."
              </p>
              <div className="flex items-center">
                <img src={avatar3} alt="avatar1" />
                <div className="pl-[22px]">
                  <h6 className="text-[22px] font-bold text-[#000000]">
                    Kathryn Murphy
                  </h6>
                  <h5 className="text-[22px] text-[#000000]">McDonald's</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
