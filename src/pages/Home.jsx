import CallToAction from "../sections/CallToAction";
import Counter from "../sections/Counter";
import Date from "../sections/Date";
import Footer from "../sections/Footer";
import Hero from "../sections/Hero";
import { Location } from "../sections/Location";
// import Navbar from "../sections/Navbar";

const Home = () => {
  return (
    <div className="font-custom min-h-screen">
      {/* <Navbar /> */}
      <Hero />
      <Counter />
      <Date />
      <div className="flex flex-col lg:flex-row w-full justify-around">
        <CallToAction />
        <Location />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
