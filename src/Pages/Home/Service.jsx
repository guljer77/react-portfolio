import React from "react";
import Container from "../../Components/Container";
import { GoNote } from "react-icons/go";
import { MdDashboardCustomize } from "react-icons/md";
import { IoDiamondSharp } from "react-icons/io5";

const Services = [
  {
    name: "UI/UX Design",
    icon: <GoNote />,
    title: " Lorem ipsum dolor sit amet consectetur adipisicing elit. At distinctio minus architecto, accusantium esse laboriosam qui amet laborum id culpa",
  },
  {
    name: "Web Design",
    icon: <MdDashboardCustomize />,
    title: " Lorem ipsum dolor sit amet consectetur adipisicing elit. At distinctio minus architecto, accusantium esse laboriosam qui amet laborum id culpa",
  },
  {
    name: "Web Development",
    icon: <IoDiamondSharp />,
    title: " Lorem ipsum dolor sit amet consectetur adipisicing elit. At distinctio minus architecto, accusantium esse laboriosam qui amet laborum id culpa",
  },
];

function Service() {
  return (
    <div className="py-10">
      <Container>
        <div className="text-center lg:pb-10 pb-5">
          <h2 className="text-[28px] font-semibold">My Services</h2>
          <hr className="w-[70px] mx-auto border-primary border" />
        </div>
        <div className="lg:grid grid-cols-3 gap-7 pt-5">
          {
            Services.map((service, i)=><div key={i} className="lg:mb-0 mb-10 shadow-lg text-center p-5 rounded-md bg-gray-100">
              <span className="inline-block text-[60px] font-light text-primary relative -top-[47px]">{service?.icon}</span>
              <h4 className="lg:text-[22px] text-[18px] font-semibold pb-3">{service?.name}</h4>
              <p className="text-[14px] font-light">{service?.title}</p>
            </div>)
          }
        </div>
      </Container>
    </div>
  );
}

export default Service;
