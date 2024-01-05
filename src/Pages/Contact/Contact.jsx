import React, { useRef } from "react";
import Container from "../../Components/Container";
import { FaPhoneAlt, FaEnvelopeOpen, FaHome } from "react-icons/fa";
import BannerHead from "../../Components/Banner/BannerHead";
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_15g98s9', 'template_vd6vvih', form.current, 'Qnvc3sOufhKner1iS')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div className="">
      <BannerHead title={"Contact With Us"} subTitle={"Contact"} />
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
            <form action="" ref={form} onSubmit={sendEmail}>
              <div className="pb-5">
                <input type="text" name="user_name" placeholder="Enter Your Name" className="w-full rounded-md py-2 pl-3 outline-0 border border-primary" />
              </div>
              <div className="pb-5">
                <input type="email" name="user_email" placeholder="Enter Your Email" className="w-full rounded-md py-2 pl-3 outline-0 border border-primary" />
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
