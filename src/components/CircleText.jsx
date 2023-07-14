import { useEffect, useState } from "react";
import ReactCurvedText from "react-curved-text";
import circle from "../assets/circle.png";
import { curve, lila } from "../constants";
const CircleText = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center max-w-screen overflow-x-hidden">
      <div className="-mb-60">
        <ReactCurvedText
          width="611"
          height="270"
          cx="320"
          cy="0"
          rx="213"
          ry="194"
          startOffset={width >= 768 ? "780" : "820"}
          reversed={true}
          text="Nos casamos"
          textProps={{
            style: { fontSize: width >= 768 ? "58" : "48", fontWeight: "900" },
          }}
          textPathProps={{ fill: lila }}
          tspanProps={{ dy: "-11" }}
          ellipseProps={null}
          svgProps={{ style: { transform: "rotate(172deg)" } }}
        />
      </div>
      <div className="mt-28 gap-10 -mb-14 flex flex-row items-center -z-10 max-w-screen">
        <img src={curve} alt="" className="hidden lg:flex" />
        <img src={circle} alt="" className="w-full -mt-10" />
        <img src={curve} alt="" className="hidden lg:flex -scale-x-100" />
      </div>
      <div className="-mt-60">
        <ReactCurvedText
          width="668"
          height="425"
          cx="330"
          cy="233"
          rx="217"
          ry="194"
          startOffset={width >= 768 ? "769" : "795"}
          reversed={false}
          text="Pol y Meli"
          textProps={{
            style: { fontSize: width >= 768 ? "58" : "48", fontWeight: "900" },
          }}
          textPathProps={{ fill: lila }}
          tspanProps={{ dy: "-11" }}
          ellipseProps={null}
          svgProps={{ style: { transform: "rotate(172deg)" } }}
        />
      </div>
    </div>
  );
};

export default CircleText;
