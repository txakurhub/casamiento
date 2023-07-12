import About from "../sections/About";
import CallToAction from "../sections/CallToAction";
import Hero from "../sections/Hero";
import Navbar from "../sections/Navbar";
import OurPortfolio from "../sections/OurPortfolio";

const Home = () => {
  return (
    <div className="font-custom">
      <Navbar />
      <Hero />
      <About />
      <CallToAction />
      <OurPortfolio />
    </div>
  );
};

export default Home;
