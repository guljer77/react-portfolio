import React from "react";
import BannerHead from "../../Components/BannerHead";
import Container from "../../Components/Container";
import { FaPhoneAlt, FaEnvelopeOpen, FaHome } from "react-icons/fa";

function Contact() {
  return (
    <div className="">
      <BannerHead title={"Contact Us"} subTitle={"Contact"} />
      <Container>
        <div className="lg:flex items-center justify-between py-10">
          <div className="lg:w-[40%] w-full">
            <p className="flex items-center gap-3 text-[14px] font-light pb-5">
              <FaEnvelopeOpen />
              Md. Guljer Hossain
            </p>
            <p className="flex items-center gap-3 text-[14px] font-light pb-5">
              <FaHome />
              guljer.net@gmail.com
            </p>
            <p className="flex items-center gap-3 text-[14px] font-light pb-5">
              <FaPhoneAlt />
              BSc in CSE
            </p>
          </div>
          <div className="lg:w-[60%] w-full">
            <form action="">
              <div className="pb-5">
                <input type="text" name="name" placeholder="Enter Your Name" className="w-full rounded-md py-2 pl-3 outline-0 border border-primary" />
              </div>
              <div className="pb-5">
                <input type="email" name="email" placeholder="Enter Your Email" className="w-full rounded-md py-2 pl-3 outline-0 border border-primary" />
              </div>
              <div className="pb-7">
                <textarea name="message" id="" cols="30" rows="10" placeholder="Enter Your Message" className="w-full rounded-md py-2 pl-3 resize-none outline-0 border border-primary"></textarea>
              </div>
              <div>
                <input type="submit" value="Submit" className="px-5 py-2 rounded-md bg-primary text-white text-[16px]" />
              </div>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Contact;
