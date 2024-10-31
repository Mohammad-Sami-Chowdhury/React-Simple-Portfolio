import React from "react";
import about from "../../assets/about.png";

const About = () => {
  return (
    <>
      <section className="bg-[#F5FCFF] pt-[134px] pb-[134px]">
        <div className="container mx-auto">
          <div className="about-main flex justify-between items-center">
            <img src={about} alt="about" />
            <div className="about-r">
              <h4 className="text-[22px] font-bold">About</h4>
              <h3 className="text-[64px] font-bold">About me</h3>
              <p className="text-[24px] w-[821px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                varius faucibus massa sollicitudin amet augue. Nibh metus a
                semper purus mauris duis. Lorem eu neque, tristique quis duis.
                Nibh scelerisque ac adipiscing velit non nulla in amet
                pellentesque.
              </p>
              <p className="text-[24px] w-[821px] pt-[20px]">
                Sit turpis pretium eget maecenas. Vestibulum dolor mattis
                consectetur eget commodo vitae. Amet pellentesque sit pulvinar
                lorem mi a, euismod risus r.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
