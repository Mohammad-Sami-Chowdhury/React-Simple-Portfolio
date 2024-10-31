import React from "react";
import { useState } from "react";
import "./contact.css";

const Contact = () => {
  // for number
  {
    const [inputNumber, setInputNumber] = useState("");
    const [errorr, setError] = useState("");

    const handleNumber = (event) => {
      const value = event.target.value;

      if (/^[0-9]*$/.test(value)) {
        setInputNumber(value);
        setError("");
      } else {
        setError("Please enter only numbers");
      }
    };

    //

    {
      const [inputText, setInputText] = useState("");
      const [error, setError] = useState("");

      const handleText = (event) => {
        const value = event.target.value;

        if (/^[a-zA-Z\s]*$/.test(value)) {
          setInputText(value);
          setError("");
        } else {
          setError("Please enter only text");
        }
      };
      {
        const [inputLast, setInputLast] = useState("");
        const [errorl, setError] = useState("");

        const handleLast = (event) => {
          const value = event.target.value;

          if (/^[a-zA-Z\s]*$/.test(value)) {
            setInputLast(value);
            setError("");
          } else {
            setError("Please enter only text");
          }
        };

        //

        {
          const [Email, setEmail] = useState("");
          const [errore, setError] = useState("");

          const handleEmail = (event) => {
            const value = event.target.value;
            setEmail(value);

            const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (value && !emailFormat.test(value)) {
              setError("");
            } else {
              setError("Please enter a valid email");
            }
          };

          {
            const [Faka, setFaka] = useState("");
            const [errorf, setError] = useState("");

            const handleFaka = (event) => {
              setFaka(event.target.value);
              setError("");
            };

            const handleBlur = () => {
              if (Faka.trim() === "") {
                setError("Please enter a message");
              }
            };

            return (
              <>
                <section className="bg-[#ffffff] pt-[150px] pb-[150px]">
                  <div className="container mx-auto">
                    <div className="top">
                      <h2 className="text-center text-[22px] font-semibold pb-[22px]">
                        Get In Touch
                      </h2>
                      <h3 className="text-center text-[64px] font-bold pb-[32px]">
                        Contact me
                      </h3>
                      <p className="text-center text-[22px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                    <div className="bottom pt-[64px]">
                      <div className="flex justify-between w-[1050px] mx-auto pb-[32px]">
                        <div>
                          <p className="text-[22px] pb-[11px]">First name</p>
                          <input
                            value={inputText}
                            onChange={handleText}
                            type="text"
                            className="border-[1px] rounded-md w-[496px] border-[#5e3bee] pt-[15px] pb-[15px] pr-[10px] pl-[15px]"
                          />
                          {error && <p style={{ color: "red" }}>{error}</p>}
                        </div>
                        <div>
                          <p className="text-[22px] pb-[11px]">Last name</p>
                          <input
                            value={inputLast}
                            onChange={handleLast}
                            type="text"
                            className="border-[1px] rounded-md w-[496px] border-[#5e3bee] pt-[15px] pb-[15px] pr-[10px] pl-[15px]"
                          />
                          {errorl && <p style={{ color: "red" }}>{errorl}</p>}
                        </div>
                      </div>
                      <div className="flex justify-between w-[1050px] mx-auto pb-[32px]">
                        <div>
                          <p className="text-[22px] pb-[11px]">Email</p>
                          <input
                            value={Email}
                            onChange={handleEmail}
                            type="text"
                            className="border-[1px] rounded-md w-[496px] border-[#5e3bee] pt-[15px] pb-[15px] pr-[10px] pl-[15px]"
                          />
                          {errore && <p style={{ color: "red" }}>{errore}</p>}
                        </div>
                        <div>
                          <p className="text-[22px] pb-[11px]">Number</p>
                          <input
                            value={inputNumber}
                            onChange={handleNumber}
                            type="text"
                            className="border-[1px] rounded-md w-[496px] border-[#5e3bee] pt-[15px] pb-[15px] pr-[10px] pl-[15px]"
                          />
                          {errorr && <p style={{ color: "red" }}>{errorr}</p>}
                        </div>
                      </div>
                      <div className="w-[1050px] mx-auto pb-[32px]">
                        <p className="text-[22px] pb-[11px]">Choose a topic</p>
                        <select
                          id="options"
                          className="border-[1px] placeholder:text-[#000000cd] rounded-md w-[100%] border-[#5e3bee] pt-[15px] pb-[15px] pr-[10px] pl-[15px]"
                        >
                          <option value="default">Select one...</option>
                          <option value="option1">Option 1</option>
                          <option value="option2">Option 2</option>
                          <option value="option3">Option 3</option>
                        </select>
                      </div>
                      <div className="w-[1050px] mx-auto">
                        <p className="text-[22px] pb-[11px]">Message</p>
                        <input
                          type="text"
                          value={Faka}
                          onChange={handleFaka}
                          onBlur={handleBlur}
                          placeholder="Type your message..."
                          className="border-[1px] placeholder:top-[20px] placeholder:absolute rounded-md w-[100%] h-[200px] border-[#5e3bee] pt-[15px] pb-[15px] pr-[10px] pl-[15px]"
                        />
                        {errorf && <p style={{ color: "red" }}>{errorf}</p>}
                      </div>
                      <div className="flex pt-[20px] pl-[240px]">
                        <input type="checkbox" />
                        <p className="pl-[10px]">I accept the terms</p>
                      </div>
                      <button className="contact-btn flex rounded-lg text-[#5e3bee] mx-auto mt-[32px] pt-[18px] pl-[51px] pr-[51px] pb-[18px] border-[1px] border-[#5e3bee]">Submit</button>
                    </div>
                  </div>
                </section>
              </>
            );
          }
        }
      }
    }
  }
};
export default Contact;
