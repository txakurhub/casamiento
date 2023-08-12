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
    <div className="w-full h-full flex flex-col items-center justify-center max-w-screen overflow-hidden lg:py-10 vibrate-1">
      <div className="-mb-60 tracking-in-expand2">
        <ReactCurvedText
          width="611"
          height="270"
          cx="320"
          cy="0"
          rx="213"
          ry="194"
          startOffset={width >= 768 ? "780" : "850"}
          reversed={true}
          text="Nos casamos"
          textProps={{
            style: { fontSize: width >= 768 ? "78" : "48", fontWeight: "900" },
          }}
          textPathProps={{ fill: lila }}
          tspanProps={{ dy: "-11" }}
          ellipseProps={null}
          svgProps={{ style: { transform: "rotate(172deg)" } }}
        />
      </div>
      <div className="mt-28 gap-10 -mb-14 flex flex-row items-center -z-50 max-w-screen">
        <img src={curve} alt="" className="hidden lg:flex" />
        <img src={circle} alt="" className="w-full -mt-10 heartbeat -z-50" />
        <img src={curve} alt="" className="hidden lg:flex -scale-x-100" />
      </div>
      <div className="-mt-60 tracking-in-expand3">
        <ReactCurvedText
          width="668"
          height="425"
          cx="330"
          cy="233"
          rx="217"
          ry="194"
          startOffset={width >= 768 ? "680" : "785"}
          reversed={false}
          text="Pol y Meli"
          textProps={{
            style: {
              fontSize: width >= 768 ? "78" : "48",
              fontWeight: "900",
              letterSpacing: width >= 768 ? "0.8rem" : "0.4rem",
            },
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
