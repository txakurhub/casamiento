import mapa from "../assets/mapa.png";

function Map() {
  return (
    <div className="w-4/4 z-0">
      <a
        href="https://www.google.com/maps/place/La+Guadalupe/@-33.0468159,-68.8083339,17z/data=!3m1!4b1!4m6!3m5!1s0x967e0b1a81309d4b:0x588836c1de0b0390!8m2!3d-33.0468159!4d-68.8083339!16s%2Fg%2F11fj9c41ph?entry=ttu"
        target="_blank"
        rel="noopener noreferrer"
        className="block aspect-w-3 aspect-h-4"
      >
        <img
          src={mapa}
          alt="Map"
          className="object-cover max-w-full h-full px-2"
        />
      </a>
    </div>
  );
}

export default Map;
