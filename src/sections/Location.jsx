import Map from "../components/Map";
import { planta, planta2, planta3, planta4 } from "../constants";

export const Location = () => {
  return (
    <div className="lg:w-6/12 w-full flex flex-col lg:gap-5 items-center justify-center py-10 bg-blue z-50 relative overflow-hidden">
        <h1 className="text-2xl lg:text-6xl font-black text-white  z-10 ">
        Salón La Guadalupe
      </h1>
      <h1 className="text-xl lg:text-4xl font-black text-lila z-10 py-2">
        Cómo llegar:
      </h1>
      <Map />
      <h4 className="font-bold text-white text-2xl py-5 lg:text-4xl text-center">
        Hora 12:30 hs.
        <br /> Se ruega puntualidad
      </h4>

      <div className="hidden lg:block">
        <img
          src={planta}
          alt=""
          className="absolute -z-10 -bottom-40 -right-20 rotate-12 -scale-100"
        />

        <img
          src={planta2}
          alt=""
          className="absolute -z-10 -left-60 bottom-20"
        />
        <img
          src={planta2}
          alt=""
          className="absolute -z-10 -right-60 bottom-20 rotate-180"
        />

        <img
          src={planta3}
          alt=""
          className="absolute -z-10 -bottom-20 -left-80 -rotate-45"
        />

        <img
          src={planta4}
          alt=""
          className="absolute -z-10 -top-40 -right-40 -rotate-45 opacity-50"
        />
        <img
          src={planta4}
          alt=""
          className="absolute -z-10 -top-60 -left-40 -rotate-45 -scale-100 opacity-50"
        />
      </div>
      <div className="block lg:hidden">
        <img
          src={planta}
          alt=""
          className="absolute -z-10 -top-20 -right-20 rotate-12 -scale-100"
        />

        <img
          src={planta2}
          alt=""
          className="absolute -z-10 -bottom-20 -left-28 -rotate-45"
        />
        <img
          src={planta3}
          alt=""
          className="absolute -z-10 -bottom-10 -right-32 rotate-12 -scale-100 opacity-30"
        />
      </div>
    </div>
  );
};
