import Container from "./Container";
import { Link, NavLink } from "react-router-dom";
import Headroom from "react-headroom";
import { FaEnvira } from "react-icons/fa";

function Nav() {
  return (
    <div>
      <Headroom
        style={{
          webkitTransition: "all .5s ease-in-out",
          mozTransition: "all .5s ease-in-out",
          oTransition: "all .5s ease-in-out",
          transition: "all .5s ease-in-out",
        }}
      >
        <div className="py-5 shadow-lg bg-white lg:block hidden">
          <Container>
            <div className="flex items-center justify-between">
              <div>
                <Link to="/" className="text-[22px] font-semibold uppercase">
                  Web<span className="text-primary">Dev</span>
                </Link>
              </div>
              <div className="flex items-center space-x-7">
                <ul className="flex items-center space-x-7">
                  <li className="text-[16px] font-normal">
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li className="text-[16px] font-normal">
                    <NavLink to="/project">My Project</NavLink>
                  </li>
                  <li className="text-[16px] font-normal">
                    <NavLink to="/contact">Contact</NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </Container>
        </div>
      </Headroom>
      <div className="lg:hidden block">
        <div className="w-[90%] my-5 mx-auto">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-[22px] font-semibold uppercase">
              Web<span className="text-primary">Dev</span>
            </Link>
            <div>
              <Link
                to="/contact"
                className="flex lg:text-[15px] text-[14px] items-center lg:gap-3 gap-1 lg:px-5 px-3 py-2 rounded-md bg-primary text-white"
              >
                Contact Me <FaEnvira />
              </Link>
            </div>
          </div>
        </div>
        <div className="fixed bottom-0 lg:bottom-8 w-full overflow-hidden z-50">
          <div className="container mx-auto">
            <div className="bg-[#11235A] text-white w-[90%] h-[50px] backdrop-blur rounded-full max-w-[460px] mx-auto px-5 flex justify-between items-center text-2xl">
              <ul className="flex items-center w-full justify-center space-x-7">
                <li className="text-[14px] font-normal">
                  <NavLink to="/">Home</NavLink>
                </li>
                <li className="text-[14px] font-normal">
                  <NavLink to="/project">My Project</NavLink>
                </li>
                <li className="text-[14px] font-normal">
                  <NavLink to="/contact">Contact</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
