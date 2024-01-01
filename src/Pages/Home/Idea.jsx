import React from "react";
import Container from "../../Components/Container";
import { Link } from "react-router-dom";

function Idea() {
  return (
    <div className="py-10">
      <Container>
        <div className="text-center">
          <h4 className="lg:text-[28px] text-[22px] font-bold lg:w-2/4 w-full pb-3 mx-auto">Prepared to turn your ideas into reality? I am here to help</h4>
          <Link to="/contact" className="px-5 py-2 rounded-md text-white text-[16px] bg-primary mt-3 inline-block">
            Contact
          </Link>
        </div>
      </Container>
    </div>
  );
}

export default Idea;
