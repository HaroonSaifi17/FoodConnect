import Hero from "../component/Hero";
import Subscribe from "../component/Subscribe";
import Stats from "../component/Stats";
import Donate from "../component/Donate";
import Contact from "../component/Contact";

const Home = () => {
  return (
    <>
      <Hero />
      <Stats />
      <Donate />
      <Subscribe />
      <Contact />
    </>
  );
};

export default Home;
