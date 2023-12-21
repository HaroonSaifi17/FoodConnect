import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [navStatus, setNavStatus] = useState(false);
  const toggleNav = () => {
    setNavStatus(!navStatus);
  };
  const homeClass = location.pathname === "/" ? "active" : "";
const donateClass = location.pathname.match(/^\/#donate/) ? "active" : "";
const loginClass = location.pathname.match(/^\/login/) ? "active" : "";
const contactClass = location.pathname.match(/^\/contact/) ? "active" : "";

  return (
    <nav id="home">
      <div className="max-w-screen-2xl  mx-auto py-4 px-[5vw] flex gap-2 justify-between items-center">
              <Link  to="/">
          <i className="fa-solid fa-plate-wheat mx-2 text-orange-500"></i>Food
          Connect
        </Link>
        <div className={`max-md:fixed max-md:w-[50vw] z-10 max-md:h-full max-md:bg-gray-50 max-md:shadow duration-100 max-md:top-0 ${
            navStatus ? 'right-0' : '-right-[50vw]'
          }`}>
          <ul className="flex gap-4 max-md:flex-col justify-center items-center max-md:h-full">
            <li className="hover:text-orange-500">
              <Link className={homeClass} onClick={toggleNav} to="/">Home</Link>
            </li>
            <li className="hover:text-orange-500">
              <Link className={contactClass} onClick={toggleNav} to="/contact">Contact</Link>
            </li>
            <li className="hover:text-orange-500">
              <Link className={loginClass} onClick={toggleNav} to="/login">Login</Link>
            </li>
            <li className="hover:text-orange-500">
              <Link className={donateClass} onClick={toggleNav} to="/">Donate</Link>
            </li>
          </ul>
        </div>
        <a onClick={toggleNav} className="hidden max-md:block p-2 relative z-20">
          <i className="fa-solid fa-bars fa-xl"></i>
        </a>
      </div>
    </nav>
  );
};
export default Navbar
