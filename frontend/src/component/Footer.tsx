import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-orange-50 border-t-[5px] border-orange-100">
      <div className="max-w-screen-lg mx-auto w-[90vw] py-5">
        <div className="flex  gap-5 max-sm:gap-1 max-sm:flex-col  max-sm:text-center justify-between my-2 text-gray-600">
          <div className=" my-2 sm:max-w-[160px]">
            <h3 className="font-semibold text-xl text-black">Contact Number</h3>
            <div>
              <a className="hover:text-orange-500" href="tel:9199999999">
                +91 9988776655
              </a>
            </div>
            <div>
              <a className="hover:text-orange-500" href="tel:91999999999">
                +91 9922334455
              </a>
            </div>
          </div>
          <div className=" my-2 sm:max-w-[160px]">
            <h3 className="font-semibold text-xl text-black">Address</h3>
            <a
              href="#"
              className="hover:text-orange-500 inline-block max-w-[250px]"
            >
              H.No. 154 Yamuna Vihar near Taj Mahal Delhi-110006
            </a>
          </div>
          <div className=" my-2 sm:max-w-[160px]">
            <h3 className="font-semibold text-xl text-black">Navigate</h3>
            <div>
              <Link to="/login" className="hover:text-orange-500">Login Page</Link>
            </div>
            <div>
              <Link to="/" className="hover:text-orange-500">Home Page</Link>
            </div>
          </div>
          <div className=" my-2 sm:max-w-[160px]">
            <h3 className="font-semibold text-xl text-black">LINKS</h3>
            <a className="hover:text-orange-500" href="#">
              <i className="fa-brands fa-youtube fa-xl mr-2"></i>
            </a>
            <a className="hover:text-orange-500" href="#">
              <i className="fa-brands fa-instagram fa-xl"></i>
            </a>
          </div>
        </div>
        <p className="text-center text-black text-sm mt-3">
          © 2023 FoodConnect. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
