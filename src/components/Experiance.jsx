import React from "react";
import java from "../../public/java.png";
import reactt from "../../public/reactt.png";
import j_s from "../../public/j_s.svg";
//import iot from "../../public/iot.jpg";
//import h_tml from "../../public/html.jpg";
import boot from "../../public/boot.png";
import css from "../../public/css.jpg";
import express from "../../public/express.png";
import html from "../../public/html.png";
import mongodb from "../../public/mongodb.jpg";
import spring from "../../public/spring.png";
import springBoot from "../../public/springBoot.jpg";
import python from "../../public/python.webp";
import oracle from "../../public/oracle.png";
import node from "../../public/node.png";

function Experiance() {
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
      logo: boot,
      name: "BootStrap",
    },
    {
      id: 5,
      logo: css,
      name: "CSS",
    },
    {
      id: 6,
      logo: express,
      name: "Express",
    },
    {
      id: 7,
      logo: spring,
      name: "spring",
    },
    {
      id: 8,
      logo: springBoot,
      name: "SpringBoot",
    },
    {
      id: 9,
      logo: mongodb,
      name: "MongoDb",
    },
    {
      id: 10,
      logo: html,
      name: "HTML5",
    },
    {
      id: 11,
      logo: node,
      name: "NodeJS",
    },
    {
      id: 12,
      logo: python,
      name: "Python",
    },
    {
      id: 13,
      logo: oracle,
      name: "Oracle",
    },
  ];
  return (
    <div
      name="Experience"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Experience</h1>
        <p className="underline font-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
          consectetur.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
          {carditem.map(({ id, logo, name }) => (
            <div
              className="flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] shadow-md p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img src={logo} className="w-[150px]   rounded-full " alt="" />
              <div>
                <div className="">{name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    //<h1 className="text-3xl font-bold mb-5">About</h1>
  );
}

export default Experiance;
