import React, { useState } from "react";
import Container from "../../Components/Container";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import Project from "../../../public/all_product";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import {  Autoplay, Pagination, Navigation } from "swiper/modules";

function Latest() {
  const [filter, setFilter] = useState(Project);
  return (
    <div className="py-10 bg-gray-50">
      <Container>
        <div className="lg:flex items-center justify-between gap-7">
          <div className="lg:w-[30%] w-full lg:text-left text-center">
            <div className="">
              <h2 className="text-[28px] font-semibold">Latest Project</h2>
              <hr className="w-[70px] border-primary border lg:mx-0 mx-auto" />
              <p className="py-3 text-[14px] font-extralight w-3/4 lg:mx-0 mx-auto lg:block hidden">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Tenetur nesciunt qui ad recusandae
              </p>
              <Link
                to="/project"
                className="px-5 py-2 rounded-md text-white text-[16px] bg-primary mt-3 inline-block"
              >
                All Project
              </Link>
            </div>
          </div>
          <div className="lg:w-[70%] w-full lg:pt-0 pt-10">
            <Swiper
              pagination={{
                type: "progressbar",
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              navigation={true}
              modules={[Autoplay,Pagination, Navigation]}
              className="mySwiper"
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                520: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
              }}
            >
              {filter.map((item, i) => (
                <SwiperSlide key={i}>
                  <div className="p-2 bg-gray-200 rounded-md shadow-lg my-10">
                    <img src={item?.image} alt="" className="w-full" />
                    <h4 className="pt-5 text-[16px] font-semibold">{item.name}</h4>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Latest;
