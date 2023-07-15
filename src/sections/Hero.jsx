import CircleText from "../components/CircleText";
import {
  planta,
  planta1,
  planta2,
  planta3,
  planta4,
  planta5,
} from "../constants";

const Hero = () => {
  return (
    <div className="pt-20 w-full flex items-center justify-center h-full py-20 relative overflow-hidden">
      <CircleText />
      {/* DESKTOP */}
      <div className="hidden lg:block tracking-in-expand -z-10 motion-reduce:animate-pulse">
        <img
          src={planta}
          alt=""
          className="absolute right-20 -bottom-60 rotate-90 -scale-100 opacity-50 "
        />
        <img
          src={planta}
          alt=""
          className="absolute -left-60 top-60 opacity-70"
        />

        <img
          src={planta1}
          alt=""
          className="absolute -left-20 -bottom-10 -mb-20 opacity-30"
        />
        <img
          src={planta1}
          alt=""
          className="absolute -left-40 top-10 -mb-20 rotate-45 opacity-30"
        />
        <img
          src={planta1}
          alt=""
          className="absolute -right-40 top-20 -scale-100 opacity-50"
        />

        <img
          src={planta2}
          alt=""
          className="absolute right-0 top-0 -scale-100 -mr-40 opacity-50"
        />
        <img
          src={planta2}
          alt=""
          className="absolute right-60 -top-32 -scale-100 -rotate-12 -mr-40 opacity-30"
        />
        <img
          src={planta2}
          alt=""
          className="absolute -left-40 bottom-22 -rotate-12 opacity-50"
        />

        <img
          src={planta3}
          alt=""
          className="absolute -top-6 rotate-6 -left-40 opacity-50"
        />
        <img
          src={planta3}
          alt=""
          className="absolute -bottom-6 rotate-45 -right-80  -scale-100 opacity-50"
        />

        <img
          src={planta4}
          alt=""
          className="absolute -left-20 top-0 -scale-100 -rotate-12  opacity-70"
        />
        <img
          src={planta4}
          alt=""
          className="absolute left-0 -bottom-52 -scale-100 -rotate-45 opacity-50"
        />
        <img
          src={planta4}
          alt=""
          className="absolute -right-40 bottom-0 rotate-12 opacity-50"
        />
      </div>

      {/* MOBILE */}

      <div className="block lg:hidden -z-10">
        <img
          src={planta}
          alt=""
          className="absolute -left-40 -top-14 opacity-40"
        />
        <img
          src={planta}
          alt=""
          className="absolute -right-40 -rotate-12 -top-20 opacity-20 -scale-100"
        />

        <img
          src={planta2}
          alt=""
          className="absolute -right-48 -bottom-10 -scale-100 rotate-90 opacity-50"
        />
        <img
          src={planta2}
          alt=""
          className="absolute -left-48 -bottom-10 -scale-100 rotate-90 opacity-20"
        />

        <img
          src={planta3}
          alt=""
          className="absolute -left-48 bottom-80 -scale-100 rotate-90 opacity-40"
        />

        <img
          src={planta4}
          alt=""
          className="absolute -right-56 bottom-20 -scale-100 rotate-45 opacity-40 z-50"
        />
      </div>

      <img
        src={planta5}
        alt=""
        className="absolute -bottom-2 lg:-bottom-6 lg:-mb-14 opacity-70 -z-10"
      />
    </div>
  );
};

export default Hero;
