import { planta, planta2, planta3, planta4 } from "../constants";

const CallToAction = () => {
  return (
    <section className="lg:w-6/12 w-full py-10 relative -z-10 flex items-center justify-center font-bold overflow-hidden">
      <div className="hidden lg:flex ">
        <img
          src={planta3}
          alt=""
          className="absolute top-60 -right-96 -rotate-90 opacity-20"
        />
        <img
          src={planta2}
          alt=""
          className="absolute -bottom-20 -left-60 -rotate-90 opacity-40"
        />
         <img
          src={planta}
          alt=""
          className="absolute -bottom-20 left-20 -rotate-90 opacity-40"
        />
              <img
          src={planta4}
          alt=""
          className="absolute -top-20 -left-20 -rotate-90 opacity-40"
        />
      </div>
      <div className="w-10/12 h-full opacity-80 flex text-center justify-center items-center flex-col">
        <div className="p-5 bg-white opacity-100 flex flex-col gap-5 text-blue rounded-xl">
          <div className="text-3xl ">
            <p className="pb-2">
              Ese día queremos que nos acompañes <br /> sin condición
            </p>
            <div className="flex flex-col gap-5 lg:flex-row items-center justify-center lg:w-full text-3xl pb-2">
              <p>Tu mejor regalo, es</p>
              <p className="text-lg font-bold"> TU PRESENCIA</p>
            </div>
            <p>pero si querés ayudarnos con nuestro sueño...</p>
          </div>
          <div className="text-3xl py-5 flex flex-col items-center justify-center gap-2">
            <p>CBU: 3108100900010003332198</p>
            <p>Alias: boda.pol.meli</p>
          </div>
          <p className="text-2xl">
            Además ese día habrá un buzón si lo deseas!
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
