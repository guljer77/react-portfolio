import React from "react";
import Container from "../../Components/Container";
import { Link } from "react-router-dom";

function Latest() {
  return (
    <div className="py-10 bg-gray-50">
      <Container>
        <div className="lg:flex items-center justify-between gap-7">
          <div className="lg:w-[30%] w-full">
            <div className="">
              <h2 className="text-[28px] font-semibold">Latest Project</h2>
              <hr className="w-[70px] border-primary border" />
              <p className="py-3 text-[14px] font-extralight w-3/4">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Tenetur nesciunt qui ad recusandae
              </p>
              <Link to="/project" className="px-5 py-2 rounded-md text-white text-[16px] bg-primary mt-3 inline-block">
                All Project
              </Link>
            </div>
          </div>
          <div className="lg:w-[70%] w-full">
            
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Latest;
