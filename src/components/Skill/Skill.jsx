import React from "react";
import skill1 from "../../assets/skill1.png";
import skill2 from "../../assets/skill2.png";
import skill3 from "../../assets/skill3.png";
import skill4 from "../../assets/skill4.png";
import "./skill.css";

const Skill = () => {
  return (
    <>
      <section className="pt-[150px] pb-[150px] bg-[#ffffff]">
        <div className="container mx-auto">
          <div className="skill-top">
            <h2 className="text-[22px] font-semibold pb-[22px]">My Skills</h2>
            <h3 className="text-[64px] font-bold pb-[107px]">My Expertise</h3>
          </div>
          <div className="skills flex justify-between">
            <div className="skill z-[+1] relative w-[360px] rounded-md bg-[#F5FCFF] pb-[32px] pt-[32px] pr-[32px] pl-[32px]">
              <div className="extra z-[-1] absolute w-[100%] h-[2%]"></div>
              <div>
                <img src={skill1} alt="skill1" />
                <h4 className="text-[32px] font-bold">Strategy & Direction</h4>
                <p className="text-[22px] w-[330px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique.
                </p>
              </div>
            </div>
            <div className="skill z-[+1] relative w-[360px] rounded-md bg-[#F5FCFF] pb-[32px] pt-[32px] pr-[32px] pl-[32px]">
              <div className="extra z-[-1] absolute w-[100%] h-[2%]"></div>
              <div>
                <img src={skill2} alt="skill2" />
                <h4 className="text-[32px] font-bold">Branding & Logo</h4>
                <p className="text-[22px] w-[330px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique.
                </p>
              </div>
            </div>
            <div className="skill z-[+1] relative w-[360px] rounded-md bg-[#F5FCFF] pb-[32px] pt-[32px] pr-[32px] pl-[32px]">
              <div className="extra z-[-1] absolute w-[100%] h-[2%]"></div>
              <div>
                <img src={skill3} alt="skill3" />
                <h4 className="text-[32px] font-bold">UI & UX Design</h4>
                <p className="text-[22px] w-[330px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique.
                </p>
              </div>
            </div>
            <div className="skill z-[+1] relative w-[360px] rounded-md bg-[#F5FCFF] pb-[32px] pt-[32px] pr-[32px] pl-[32px]">
              <div className="extra z-[-1] absolute w-[100%] h-[2%]"></div>
              <div>
                <img src={skill4} alt="skill4" />
                <h4 className="text-[32px] font-bold">Webflow Development</h4>
                <p className="text-[22px] w-[330px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skill;
