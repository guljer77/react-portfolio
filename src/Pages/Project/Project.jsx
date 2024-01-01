import React from "react";
import Container from "../../Components/Container";
import BannerHead from "../../Components/BannerHead";
import ImageProject from '../../assets/1.png';

function Project() {
  return (
    <div>
      <BannerHead title={"My Project"} subTitle={"Project"} />
      <Container>
        <div className="py-10">
          <div className="border shadow-lg rounded-full lg:w-[50%] w-full mx-auto w-full">
            <div className="flex items-center justify-between">
              <div>
                <button
                  className={`lg:px-7 px-3 rounded-full inline-block text-center lg:py-3 py-1 text-[14px]`}
                >
                  All
                </button>
              </div>
              <div>
                <button
                  className={`lg:px-7 px-3 rounded-full inline-block text-center lg:py-3 py-1 text-[14px]`}
                >
                  React Js
                </button>
              </div>
              <div>
                <button
                  className={`lg:px-7 px-3 rounded-full inline-block text-center lg:py-3 py-1 text-[14px]`}
                >
                  Next.Js
                </button>
              </div>
              <div>
                <button
                  className={`lg:px-7 px-3 rounded-full inline-block text-center lg:py-3 py-1 text-[14px]`}
                >
                  Full Stack
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Project;
