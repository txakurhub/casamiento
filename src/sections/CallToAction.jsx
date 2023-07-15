import { flores } from "../constants";

const CallToAction = () => {
  return (
    <section
      className="lg:w-6/12 w-full py-10 relative -z-10 flex items-center justify-center font-bold overflow-hidden"
      id="team"
    >
      <img
        src={flores}
        alt=""
        className="absolute top-0 lg:-mt-14 lg:left-72 lg:rotate-90 scale-150 "
      />
      <div className="w-10/12 h-full bg-lilaclaro opacity-80 flex text-center justify-center items-center flex-col ">
        <div className="p-5 bg-white opacity-100 flex flex-col gap-5">
          <div className="text-3xl ">
            <p className="pb-2">Ese día queremos que nos acompañes <br/> sin condición</p>
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
          <p className="text-2xl">Además ese día habrá un buzón si lo deseas!</p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
