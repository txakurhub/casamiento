import { Toast } from "../components/AlertCheck";
import { planta, planta2, planta3, planta4 } from "../constants";

const CallToAction = () => {
  const handleCBU = () => {
    console.log("CBU copiado al portapapeles");
    navigator.clipboard
      .writeText("3108100900010003332198")
      .then(() => {
        Toast.fire({
          icon: "success",
          title: "CBU copiado al portapapeles",
        });
      })
      .catch((error) => {
        console.error("Error al copiar el ID: ", error);
      });
  };

  const handleAlias = () => {
    console.log("Alias copiado al portapapeles");
    navigator.clipboard
      .writeText("boda.pol.meli")
      .then(() => {
        Toast.fire({
          icon: "success",
          title: "Alias copiado al portapapeles",
        });
      })
      .catch((error) => {
        console.error("Error al copiar el ID: ", error);
      });
  };

  return (
    <section className="lg:w-6/12 w-full py-10 relative -z-10 flex items-center justify-center font-bold overflow-hidden star">
      {/* PLANTAS DESKTOP */}
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
      {/* PLANTAS MOBILE */}
      <div className="flex lg:hidden ">
        <img
          src={planta3}
          alt=""
          className="absolute top-60 -rotate-90 opacity-20"
        />
        <img
          src={planta2}
          alt=""
          className="absolute -bottom-20 -left-4 0 -rotate-90 opacity-40"
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

      <div className="w-9/12 h-full opacity-80 flex text-center justify-center items-center flex-col text-2xl lg:text-4xl tracking-widest">
        <div className="p-5 lg:bg-black opacity-100 flex flex-col gap-5 text-blue lg:text-lilaclaro rounded-xl h-full items-center justify-center">
          <p className="pb-2 text-center ">
            ESE DÍA QUEREMOS QUE NOS ACOMPAÑES SIN CONDICIÓN. EL MEJOR
            REGALO TU PRESENCIA PERO SI QUERÉS AYUDARNOS CON NUESTRO SUEÑO...
          </p>
          <div className="text-3xl lg:text-5xl flex flex-col items-center justify-center gap-2 text-black lg:text-white">
            <button
              onClick={() => {
                console.log("1"), handleCBU();
              }}
            >
              CBU: 3108100900010003332198
            </button>
            <button onClick={handleAlias}>ALIAS: boda.pol.meli</button>
          </div>
          <p >ADEMÁS ESE DIA HABRÁ UN BUZÓN SI LO DESEAS!</p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
