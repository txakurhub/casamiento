import CallToAction from "../sections/CallToAction";
import Counter from "../sections/Counter";
import Hero from "../sections/Hero";
import { Location } from "../sections/Location";
import Navbar from "../sections/Navbar";

const Home = () => {
  return (
    <div className="font-custom">
      <Navbar />
      <Hero />
      <Counter />
      <Location />
      <CallToAction />
    </div>
  );
};

export default Home;
