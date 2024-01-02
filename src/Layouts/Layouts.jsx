import Nav from "../Components/Nav";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";

function Layouts() {
  return (
    <div>
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layouts;
