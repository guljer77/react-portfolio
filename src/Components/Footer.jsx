import React from "react";
import Container from "./Container";
import { FaLinkedinIn, FaGithub, FaFacebookSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="pt-5 lg:pb-5 pb-[60px] bg-gray-300">
      <Container>
        <div className="text-center">
          <div className="flex items-center justify-center mb-5 space-x-3 mt-7">
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
          <p className="text-[15px] font-light">
            Copyright &copy;Guljer Hossain All right reserved
          </p>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
