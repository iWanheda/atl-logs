import { useState } from "react";
import DropDown from "./DropDown";

const MapTypes = [
  ["Bagageira", "#FF005C", "text-white"],
  ["Inventário", "#29FBC8", "text-secondary"],
  ["Casa", "#FBE629", "text-secondary"],
];

/*
  1 -> Pôr
  2 -> Tirar
*/

const MainScreen = ({ logs }) => {
  const [isGoncalo, setIsGoncalo] = useState(false);

  const handleGoncalo = () => {
    setIsGoncalo(!isGoncalo);
  };

  return (
    <div className="relative w-full h-full text-white p-8 py-16 space-y-4">
      <div className="w-full h-max flex justify-between" id="top-bar">
        <span className="text-3xl font-semibold">Logs</span>
        <div className="flex space-x-4">
          <DropDown />
          <button
            onClick={() => handleGoncalo()}
            className={`flex items-center px-4 p-2 transition-all duration-600 ${
              isGoncalo ? "bg-green-500" : "bg-red-500"
            } rounded-md`}
          >
            <span>Gonçalo?</span>
          </button>
        </div>
      </div>
      <div className="overflow-auto space-y-3 flex flex-col">
        {logs &&
          logs.map(
            (
              { player, ids, type, item, quantity, action, timestamp, plate },
              _
            ) => (
              <div
                key={_}
                className="w-full h-12 bg-secondary rounded-md flex items-center px-4"
              >
                <div
                  className={`w-28 h-max px-4 p-px font-semibold rounded-full text-center ${MapTypes[type][3]}`}
                  style={{ backgroundColor: MapTypes[type][1] }}
                >
                  <span>{MapTypes[type][0]}</span>
                </div>
                <div className="w-full flex items-center px-10">
                  <div className="relative cursor-pointer group flex items-center">
                    <span>{player}</span>
                  </div>
                  <div className="w-full grid grid-cols-3 gap-4">
                    <div className="col-span-1 text-center flex flex-shrink-0 items-center justify-center">
                      {action === 1 ? (
                        isGoncalo === false ? (
                          <svg
                            width="24px"
                            height="24px"
                            viewBox="0 -6.5 38 38"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                          >
                            <title>right-arrow</title>
                            <desc>Created with Sketch.</desc>
                            <defs>
                              <linearGradient
                                x1="50%"
                                y1="0%"
                                x2="50%"
                                y2="100%"
                                id="linearGradient-1"
                              >
                                {/* f73325 -> 75120b */}
                                {/* 1DD47F -> 0DA949 */}
                                <stop stopColor={"#1DD47F"} offset="0%"></stop>
                                <stop stopColor={"#0DA949"}></stop>
                              </linearGradient>
                            </defs>
                            <g
                              id="icons"
                              stroke="none"
                              strokeWidth="1"
                              fill="none"
                              fillRule="evenodd"
                            >
                              <g
                                id="ui-gambling-website-lined-icnos-casinoshunter"
                                transform="translate(-211.000000, -1910.000000)"
                                fill="url(#linearGradient-1)"
                                fillRule="nonzero"
                              >
                                <g
                                  id="4"
                                  transform="translate(50.000000, 1871.000000)"
                                >
                                  <path
                                    d="M187.812138,39.5802109 L198.325224,50.0042713 L198.41312,50.0858421 C198.764883,50.4346574 198.96954,50.8946897 199,51.4382227 L198.998248,51.6209428 C198.97273,52.0514917 198.80819,52.4628128 198.48394,52.8313977 L198.36126,52.9580208 L187.812138,63.4197891 C187.031988,64.1934036 185.770571,64.1934036 184.990421,63.4197891 C184.205605,62.6415481 184.205605,61.3762573 184.990358,60.5980789 L192.274264,53.3739093 L162.99947,53.3746291 C161.897068,53.3746291 161,52.4850764 161,51.3835318 C161,50.2819872 161.897068,49.3924345 162.999445,49.3924345 L192.039203,49.3917152 L184.990421,42.4019837 C184.205605,41.6237427 184.205605,40.3584519 184.990421,39.5802109 C185.770571,38.8065964 187.031988,38.8065964 187.812138,39.5802109 Z"
                                    id="right-arrow"
                                  ></path>
                                </g>
                              </g>
                            </g>
                          </svg>
                        ) : (
                          <span className="text-[#1DD47F]">Colocou</span>
                        )
                      ) : isGoncalo === false ? (
                        <svg
                          width="24px"
                          height="24px"
                          viewBox="0 -6.5 38 38"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          className="rotate-180"
                        >
                          <title>right-arrow</title>
                          <desc>Created with Sketch.</desc>
                          <defs>
                            <linearGradient
                              x1="50%"
                              y1="0%"
                              x2="50%"
                              y2="100%"
                              id="linearGradient-2"
                            >
                              {/* f73325 -> 75120b */}
                              {/* 1DD47F -> 0DA949 */}
                              <stop stopColor={"#f73325"} offset="0%"></stop>
                              <stop stopColor={"#75120b"}></stop>
                            </linearGradient>
                          </defs>
                          <g
                            id="icons"
                            stroke="none"
                            strokeWidth="1"
                            fill="none"
                            fillRule="evenodd"
                          >
                            <g
                              id="ui-gambling-website-lined-icnos-casinoshunter"
                              transform="translate(-211.000000, -1910.000000)"
                              fill="url(#linearGradient-2)"
                              fillRule="nonzero"
                            >
                              <g
                                id="4"
                                transform="translate(50.000000, 1871.000000)"
                              >
                                <path
                                  d="M187.812138,39.5802109 L198.325224,50.0042713 L198.41312,50.0858421 C198.764883,50.4346574 198.96954,50.8946897 199,51.4382227 L198.998248,51.6209428 C198.97273,52.0514917 198.80819,52.4628128 198.48394,52.8313977 L198.36126,52.9580208 L187.812138,63.4197891 C187.031988,64.1934036 185.770571,64.1934036 184.990421,63.4197891 C184.205605,62.6415481 184.205605,61.3762573 184.990358,60.5980789 L192.274264,53.3739093 L162.99947,53.3746291 C161.897068,53.3746291 161,52.4850764 161,51.3835318 C161,50.2819872 161.897068,49.3924345 162.999445,49.3924345 L192.039203,49.3917152 L184.990421,42.4019837 C184.205605,41.6237427 184.205605,40.3584519 184.990421,39.5802109 C185.770571,38.8065964 187.031988,38.8065964 187.812138,39.5802109 Z"
                                  id="right-arrow"
                                ></path>
                              </g>
                            </g>
                          </g>
                        </svg>
                      ) : (
                        <span className="text-[#f73325]">Retirou</span>
                      )}
                    </div>
                    <div className="col-span-1 flex flex-shrink-0 items-center justify-center">
                      <span>
                        {item} x{quantity}
                      </span>
                    </div>
                    <div className="flex flex-shrink-0 items-center justify-center">
                      <div className="col-span-1">{plate}</div>
                    </div>
                  </div>
                  <div className="space-x-6 italic">
                    <span>
                      {new Date(timestamp).toLocaleTimeString("PT-pt")}
                    </span>
                    <span>
                      {new Date(timestamp).toLocaleDateString("PT-pt")}
                    </span>
                  </div>
                </div>
              </div>
            )
          )}
      </div>
    </div>
  );
};

export default MainScreen;
