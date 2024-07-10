import React from "react";
import java from "../../public/java.png";
import reactt from "../../public/reactt.png";
import j_s from "../../public/j_s.svg";
import iot from "../../public/iot.jpg";

function Portfolio() {
  const carditem = [
    {
      id: 1,
      logo: java,
      name: "Java",
    },
    {
      id: 2,
      logo: j_s,
      name: "JavaScript",
    },
    {
      id: 3,
      logo: reactt,
      name: "React",
    },
    {
      id: 4,
      logo: iot,
      name: "Iot",
    },
  ];
  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Portfolio</h1>
        <span className="underline font-bold">Featured Projects</span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5">
          {carditem.map(({ id, logo, name }) => (
            <div
              className="md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img
                src={logo}
                className="w-[120px] h-[12opx] p-1 rounded-full border-[2px]"
                alt=""
              />
              <div>
                <div className="px-2 font-bold text-xl mb-2">{name}</div>
                <p className="px-2 text-gray-700">
                  Lorem ipsum dolor sit amet.
                </p>
              </div>
              <div className="justify-around px-6 py-4 space-x-3">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded">
                  video
                </button>
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded">
                  Source Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    //<h1 className="text-3xl font-bold mb-5">About</h1>
  );
}

export default Portfolio;
