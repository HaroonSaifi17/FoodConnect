import { Link } from "react-router-dom";
import heroImage from "./../assets/hero.svg";

const Hero = () => {
  return (
    <div className="bg-orange-50 py-9">
      <div className="flex px-[5vw] items-center mx-auto gap-5 max-md:flex-col justify-center  max-w-screen-2xl mt-8">
        <div className="max-w-lg">
          <h1 className="text-5xl font-semibold">Feed the Hungery</h1>
          <p className="mt-4">
            FoodConnect is a unified platform which facilitates food and
            emergency support by connecting the govt., non-govt entities,
            individual donors, volunteers and the ones in need all across India.
          </p>
          <div className="flex text-sm flex-wrap gap-2 mt-5">
          <Link className="py-2 px-4 rounded-full bg-orange-500 text-white" to="/need">NEED FOOD</Link>
          <a className="py-2 px-4 rounded-full bg-emerald-500 text-white" href="#donate">I WANT TO HELP</a>
          </div>
        </div>
        <img src={heroImage} className="w-1/3 max-md:w-full" alt="Hero" />
      </div>
    </div>
  );
};
export default Hero;
