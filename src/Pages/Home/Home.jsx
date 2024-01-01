import React from "react";
import Banner from "./Banner";
import About from "./About";
import Service from "./Service";
import Latest from "./Latest";
import Idea from "./Idea";

function Home() {
  return (
    <div>
      <Banner />
      <About />
      <Service />
      <Latest />
      <Idea />
    </div>
  );
}

export default Home;
