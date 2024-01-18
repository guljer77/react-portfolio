import React, { useState } from "react";
import Container from "../../Components/Container";
import Content from "../../../public/all_product";
import BannerHead from "../../Components/Banner/BannerHead";

function Project() {
  const [project, setProject] = useState(Content);
  const toggler = id => {
    const items = Content.filter(item => item.category === id);
    setProject(items);
  };

  return (
    <div>
      <BannerHead title={"Welcome to My Project"} subTitle={"Project"} />
      <Container>
        <div className="py-10">
          <div className="border shadow-lg rounded-full lg:w-[50%] sm:w-[70%] w-full mx-auto">
            <div className="flex items-center justify-between">
              <div onClick={() => setProject(Content)}>
                <button
                  className={`lg:px-7 px-3 rounded-full inline-block text-center lg:py-3 py-1 text-[14px]`}
                >
                  All
                </button>
              </div>
              <div onClick={() => toggler("React Js")}>
                <button
                  className={`lg:px-7 px-3 rounded-full inline-block text-center lg:py-3 py-1 text-[14px]`}
                >
                  React Js
                </button>
              </div>
              <div onClick={() => toggler("Next.JS")}>
                <button
                  className={`lg:px-7 px-3 rounded-full inline-block text-center lg:py-3 py-1 text-[14px]`}
                >
                  Next.Js
                </button>
              </div>
              <div onClick={() => toggler("Full Stack")}>
                <button
                  className={`lg:px-7 px-3 rounded-full ${
                    project === "Full Stack" ? "bg-primary text-white" : ""
                  } inline-block text-center lg:py-3 py-1 text-[14px]`}
                >
                  Full Stack
                </button>
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-3 gap-5 pt-10">
            {project.map((items, i) => (
              <div key={i} className="p-5 rounded-md bg-gray-100 shadow-lg">
                <img src={items?.image} alt="" className="w-full h-auto" />
                <h4 className="my-3 text-[18px] font-semibold">
                  {items?.name}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Project;
