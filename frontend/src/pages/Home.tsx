import Hero from "../component/Hero";
import Subscribe from "../component/Subscribe";
import Stats from "../component/Stats";
import Donate from "../component/Donate";

const Home = () => {
  return (
    <>
      <Hero />
      <Stats />
      <Donate />
      <Subscribe />
    </>
  );
};

export default Home;
