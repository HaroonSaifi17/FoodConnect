import { Link } from "react-router-dom";

const Donate = () => {
  return (
    <div id="donate">
      <div className=" px-[5vw] max-w-screen-2xl mx-auto  py-5">
        <h2 className="font-semibold text-3xl">Become a Hunger Fighter</h2>
        <div className="flex max-md:flex-col gap-8 mt-6 flex-wrap">
          <div className="flex-1">
            <h4 className="font-semibold text-xl"><i className="fa-solid fa-lg text-orange-500 mr-2 fa-money-bill"></i>DONATE</h4>
            <p className="py-2 mb-2">
              Make a one-time gift or sign-up to be a recurring donor. Every $1
              donated provides 7 meals.
            </p>
            <a
              className="py-2 px-4 whitespace-nowrap rounded-lg text-white bg-rose-500 "
              href=""
            >
              MAKE A DONATION
            </a>
          </div>
          <div className="flex-1">
            <h4 className="font-semibold text-xl"><i className="fa-solid fa-person fa-lg text-orange-500 mr-2"></i>VOLUNTEER</h4>
            <p className="py-2 mb-2">
              Whether you’re a group or individual there are many opportunities
              to volunteer.
            </p>
            <Link
              className="py-2 px-4 whitespace-nowrap rounded-lg text-white bg-emerald-500 "
              to="/login"
            >
              VOLUNTEER NOW
            </Link>
          </div>
          <div className="flex-1">
            <h4 className="font-semibold text-xl"><i className="fa-solid fa-people-line fa-lg text-orange-500 mr-2"></i>RAISE FOOD</h4>
            <p className="py-2 mb-2">
              Drives can be conducted by any organization or dedicated group of
              hunger fighters!
            </p>
            <a
              className="py-2 px-4 whitespace-nowrap rounded-lg text-white bg-blue-500 "
              href=""
            >COLLAB WITH US</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;
