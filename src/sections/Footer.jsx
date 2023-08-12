import { planta, planta2 } from "../constants";

const Footer = () => {
  return (
    <section className="bg-black w-full h-full z-50 overflow-hidden relative">
      <h4 className="font-bold text-2xl lg:text-5xl p-10 text-center text-lilaclaro leading-relaxed z-50 tracking-wider">
        Queremos guardar cada recuerdo <br /> nos encantaria que si subis fotos
        nos etiquetes a <br />
        <a
          href="https://instagram.com/bodapolmeli"
          className="text-white"
        >
          @bodapolmeli
        </a>
      </h4>

      {/* PLANTAS DESKTOP */}
      <div className="hidden lg:block -z-10">
        <img
          src={planta}
          alt=""
          className="absolute z-0 -right-40 -bottom-0 rotate-45 -scale-100 opacity-50"
        />
        <img
          src={planta2}
          alt=""
          className="absolute z-0 right-0 top-20 -scale-100 -mr-40 opacity-50"
        />

        <img
          src={planta}
          alt=""
          className="absolute z-0 -left-72 -bottom-0 -rotate-45  opacity-50"
        />
        <img
          src={planta2}
          alt=""
          className="absolute z-0 -left-40 top-20 -mr-40 opacity-50"
        />
      </div>

      {/* PLANTAS MOBILE */}

      <div className="flex lg:hidden -z-10">
        <img
          src={planta}
          alt=""
          className="absolute z-0 -right-60 -bottom-0 rotate-45 -scale-100 opacity-50"
        />
     

        <img
          src={planta}
          alt=""
          className="absolute z-0 right-40 -bottom-10 rotate-45 -scale-100 opacity-50"
        />
      </div>
    </section>
  );
};

export default Footer;
