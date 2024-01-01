import React, { useState } from "react";
import Container from "../../Components/Container";
import Profile from "../../assets/developer.png";
import {
  FaGraduationCap,
  FaUserCheck,
  FaPhoneAlt,
  FaEnvelopeOpen,
  FaHome,
} from "react-icons/fa";
import { CiCalendarDate } from "react-icons/ci";

function About() {
  const [active, setActive] = useState(1);
  const toggler = id => {
    setActive(id);
  };
  return (
    <div className="py-10 w-full bg-gray-50">
      <Container>
        <div className="text-center lg:pb-10 pb-5">
          <h2 className="text-[28px] font-semibold">About</h2>
          <hr className="w-[70px] mx-auto border-primary border" />
        </div>
        <div className="lg:flex items-center justify-between">
          <div className="lg:w-[50%] w-full lg:pb-0 pb-5 lg:block hidden">
            <img src={Profile} alt="" className="w-3/4 mx-auto" />
          </div>
          <div className="lg:w-[50%] w-full lg:pt-0 pt-5">
            <div className="bg-gray-200 shadow-lg rounded-full lg:w-[80%] w-full">
              <div className="flex items-center justify-between">
                <div onClick={() => toggler(1)}>
                  <button
                    className={`lg:px-7 px-3 ${
                      active === 1 ? "bg-primary text-white" : ""
                    } rounded-full inline-block text-center lg:py-3 py-1 text-[14px]`}
                  >
                    Skills
                  </button>
                </div>
                <div onClick={() => toggler(2)}>
                  <button
                    className={`lg:px-7 px-3 ${
                      active === 2 ? "bg-primary text-white" : ""
                    } rounded-full inline-block text-center lg:py-3 py-1 text-[14px]`}
                  >
                    Qualification
                  </button>
                </div>
                <div onClick={() => toggler(3)}>
                  <button
                    className={`lg:px-7 px-3 ${
                      active === 3 ? "bg-primary text-white" : ""
                    } rounded-full inline-block text-center lg:py-3 py-1 text-[14px]`}
                  >
                    Personal Info
                  </button>
                </div>
              </div>
            </div>
            <div className="p-5">
              <div className={active === 1 ? "block" : "hidden"}>
                <div>
                  <h4 className="lg:text-[24px] text-[20px] font-semibold pb-5">
                    Tools I Use Everyday
                  </h4>
                  <h6 className="text-[16px] font-semibold">Skills</h6>
                  <hr />
                  <div className="py-5">
                    <h6 className="text-[14px] pb-2">
                      <span className="font-bold">Expertise:</span> HTML, CSS,
                      Tailwind CSS, Bootstrap, Javascript, React Js, Firebase,
                      Rest API
                    </h6>
                    <h6 className="text-[14px] pb-2">
                      <span className="font-bold">Comfortable:</span> ES6,
                      ExpressJs, MongoDb
                    </h6>
                    <h6 className="text-[14px] pb-2">
                      <span className="font-bold">Familiar:</span> Nodejs, JWT,
                      Stripe, Redux Toolkit,
                    </h6>
                  </div>
                  <h6 className="text-[16px] font-semibold">Tools</h6>
                  <hr />
                  <div className="pt-5">
                    <h6 className="text-[14px]">
                      Visual Studio, Notepad++, Figma, Git, PostMan, Dev Tools,
                      npm/yarn, Netlify, Firebase
                    </h6>
                  </div>
                </div>
              </div>
              <div className={active === 2 ? "block" : "hidden"}>
                <div>
                  <h4 className="lg:text-[24px] text-[20px] font-semibold pb-5">
                    My Awesome Journey
                  </h4>
                  <h6 className="text-[16px] font-semibold text-primary">
                    <FaGraduationCap size={24} className="inline-block" />{" "}
                    Skills
                  </h6>
                  <div className="pt-5">
                    <h4 className="text-[15px] font-medium">
                      Dhaka International University
                    </h4>
                    <h6 className="text-[14px] font-light">
                      Bachelor of Science
                    </h6>
                    <p className="text-[14px] font-light pt-2 text-primary">
                      <CiCalendarDate className="inline-block" /> 2022 - Running
                      6th semester
                    </p>
                  </div>
                  <div className="pt-5">
                    <h4 className="text-[15px] font-medium">
                      Dinajpur Polytechnic Institute
                    </h4>
                    <h6 className="text-[14px] font-light">
                      Diploma In Engineering
                    </h6>
                    <p className="text-[14px] font-light pt-2 text-primary">
                      <CiCalendarDate className="inline-block" /> 2016 - 2020
                    </p>
                  </div>
                </div>
              </div>
              <div className={active === 3 ? "block" : "hidden"}>
                <div>
                  <h4 className="lg:text-[24px] text-[20px] font-semibold pb-5">
                    About My Shelf
                  </h4>
                  <div className="lg:flex items-center justify-between gap-5 py-10">
                    <div className="lg:w-[50%] w-full">
                      <p className="flex items-center gap-3 text-[14px] font-light pb-2">
                        <FaUserCheck />
                        Md. Guljer Hossain
                      </p>
                      <p className="flex items-center gap-3 text-[14px] font-light pb-2">
                        <FaEnvelopeOpen />
                        guljer.net@gmail.com
                      </p>
                      <p className="flex items-center gap-3 text-[14px] font-light pb-2">
                        <FaGraduationCap />
                        BSc in CSE
                      </p>
                    </div>
                    <div className="lg:w-[50%] w-full">
                      <p className="flex items-center gap-3 text-[14px] font-light pb-2">
                        <FaPhoneAlt />
                        +880 1792790977
                      </p>
                      <p className="flex items-center gap-3 text-[14px] font-light pb-2">
                        <CiCalendarDate />
                        Born on 15 June, 1998
                      </p>
                      <p className="flex items-center gap-3 text-[14px] font-light pb-2">
                        <FaHome />
                        Dhaka
                      </p>
                    </div>
                  </div>
                  <h6 className="text-[16px] font-semibold">Language</h6>
                  <hr />
                  <div className="pt-5">
                    <h6 className="text-[14px] font-light">Bangla, English, Hindi</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default About;
