import ReactCurvedText from "react-curved-text";
import circle from "../assets/circle.png";
import { curve, lila } from "../constants";
const CircleText = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="-mb-60">
        <ReactCurvedText
          width="611"
          height="270"
          cx="320"
          cy="0"
          rx="213"
          ry="194"
          startOffset="780"
          reversed={true}
          text="Nos casamos"
          textProps={{ style: { fontSize: "58", fontWeight: "900" } }}
          textPathProps={{ fill: lila }}
          tspanProps={{ dy: "-11" }}
          ellipseProps={null}
          svgProps={{ style: { transform: "rotate(172deg)" } }}
        />
      </div>
      <div className="mt-28 gap-10 -mb-14 flex flex-row items-center -z-10">
        <img src={curve} alt="" className="" />
        <img src={circle} alt="" className="w-full -mt-10" />
        <img src={curve} alt="" className="-scale-x-100" />
      </div>
      <div className="-mt-60">
        <ReactCurvedText
          width="668"
          height="415"
          cx="340"
          cy="213"
          rx="217"
          ry="194"
          startOffset="769"
          reversed={false}
          text="Pol y Meli"
          textProps={{ style: { fontSize: "58", fontWeight: "900" } }}
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
