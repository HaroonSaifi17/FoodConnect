import { useState } from "react";

const Navbar = () => {
  const [navStatus, setNavStatus] = useState(false);
  const toggleNav = () => {
    setNavStatus(!navStatus);
  };
  return (
    <nav id="home">
      <div className="max-w-screen-2xl  mx-auto p-4 flex gap-2 justify-between items-center">
        <a href="#Home">
          <i className="fa-solid fa-plate-wheat mx-2 text-orange-500"></i>Food
          Connect
        </a>
        <div className={`max-md:fixed max-md:w-[40vw] z-10 max-md:h-full max-md:bg-orange-50 max-md:shadow duration-100 max-md:top-0 ${
            navStatus ? '-right-[40vw]' : 'right-0'
          }`}>
          <ul className="flex gap-4 max-md:flex-col justify-center items-center max-md:h-full">
            <li className="hover:text-orange-500">
              <a href="/">Home</a>
            </li>
            <li className="hover:text-orange-500">
              <a href="/contact">Contact</a>
            </li>
            <li className="hover:text-orange-500">
              <a href="/login">Login</a>
            </li>
            <li className="hover:text-orange-500">
              <a href="/">Donate</a>
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
