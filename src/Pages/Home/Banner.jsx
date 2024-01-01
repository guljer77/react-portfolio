import React from "react";
import Container from "../../Components/Container";
import { Link } from "react-router-dom";
import Image from "../../assets/developer.png";
import {
  FaEnvira,
  FaLinkedinIn,
  FaGithub,
  FaFacebookSquare,
} from "react-icons/fa";
import { MdOutlineCloudDownload } from "react-icons/md";

function Banner() {
  return (
    <div>
      <Container>
        <div className="lg:flex w-full lg:py-0 py-10 lg:h-screen h-auto items-center justify-between gap-10">
          <div className="lg:w-[50%] w-full">
            <h6 className="uppercase text-primary lg:text-[16px] text-[15px] font-medium tracking-widest">
              Web Developer
            </h6>
            <h4 className="lg:w-[60%] h-full py-3 leading-tight lg:text-[42px] text-[28px] font-bold">
              My Name Is Guljer Hossain
            </h4>
            <p className="text-[14px] font-light py-3 w-3/4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              inventore quasi quod hic corporis quae, commodi debitis ea quam.
              Ea.
            </p>
            <div className="flex items-center space-x-5 my-4">
              <div>
                <Link className="flex lg:text-[15px] text-[14px] items-center lg:gap-3 gap-1 lg:px-5 px-3 py-2 rounded-md bg-primary text-white">
                  Contact Me <FaEnvira />
                </Link>
              </div>
              <div>
                <Link className="flex lg:text-[15px] text-[14px] items-center lg:gap-3 gap-1 lg:px-5 px-3 py-2 rounded-md bg-primary text-white">
                  Download CV <MdOutlineCloudDownload />
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-3 mt-7">
              <li className="flex items-center transition-all duration-300 hover:text-primary p-[9px] bg-gray-200 rounded-full shadow-lg">
                <Link className="bg-gray-100 p-2 rounded-full">
                  <FaLinkedinIn />
                </Link>
              </li>
              <li className="flex items-center transition-all duration-300 hover:text-primary p-[9px] bg-gray-200 rounded-full shadow-lg">
                <Link className="bg-gray-100 p-2 rounded-full">
                  <FaGithub />
                </Link>
              </li>
              <li className="flex items-center transition-all duration-300 hover:text-primary p-[9px] bg-gray-200 rounded-full shadow-lg">
                <Link className="bg-gray-100 p-2 rounded-full">
                  <FaFacebookSquare />
                </Link>
              </li>
            </div>
          </div>
          <div className="lg:w-[50%] w-full">
            <img src={Image} alt="" />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Banner;
