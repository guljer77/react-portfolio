import React, { useState } from "react";
import Container from "../../Components/Container";
import BannerHead from "../../Components/BannerHead";
import ImageProject from '../../assets/1.png';

function Project() {
  const [project, setProject] = useState(0);
  const toggler = (id) =>{
    setProject(id);
  }
  return (
    <div>
      <BannerHead title={"My Project"} subTitle={"Project"} />
      <Container>
        <div className="py-10">
          <div className="border shadow-lg rounded-full lg:w-[50%] w-full mx-auto">
            <div className="flex items-center justify-between">
              <div onClick={()=> toggler(0)}>
                <button
                  className={`lg:px-7 px-3 rounded-full ${project === 0 ? "bg-primary text-white":""} inline-block text-center lg:py-3 py-1 text-[14px]`}
                >
                  All
                </button>
              </div>
              <div onClick={()=> toggler(1)}>
                <button
                  className={`lg:px-7 px-3 rounded-full ${project === 1 ? "bg-primary text-white":""} inline-block text-center lg:py-3 py-1 text-[14px]`}
                >
                  React Js
                </button>
              </div>
              <div onClick={()=> toggler(2)}>
                <button
                  className={`lg:px-7 px-3 rounded-full ${project === 2 ? "bg-primary text-white":""} inline-block text-center lg:py-3 py-1 text-[14px]`}
                >
                  Next.Js
                </button>
              </div>
              <div onClick={()=> toggler(3)}>
                <button
                  className={`lg:px-7 px-3 rounded-full ${project === 3 ? "bg-primary text-white":""} inline-block text-center lg:py-3 py-1 text-[14px]`}
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
