import React from "react";
import pic from "../../public/pic.jpeg";

import { ReactTyped, Typed } from "react-typed";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
// working
import { FaJava } from "react-icons/fa";
import { SiSpring } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiSpringboot } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";

function Home() {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-xl">Welcome In My Feed</span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1>Hello, I'm a</h1>
              <ReactTyped
                className="text-red-700 font-bold"
                //   typedRef={setTyped}
                strings={["Developer", "Programmer", "Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
              {/* <span className="text-red-700 font-bold">Developer</span> */}
            </div>
            <br />
            <p className="text-sm text-justify md:text-md">
              "Aspiring Software Engineer | Passionate about Technology & Innovation |
              VIIT Student"
            </p>
            <br />
            {/* social media icons */}
            <div className="flex flex-col md:flex-row justify-between space-y-6 md:space-y-0 items-center">
              <div className="space-y-2">
                <h1 className="font-bold ">Available On</h1>
                <ul className="flex cursor-pointer space-x-5">
                  <li>
                    <a href="https://www.linkedin.com/in/aditya-walke-666aw/">
                      <FaLinkedin className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/imadiwalke16">
                      <FaGithub className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://x.com/im_adiwalke">
                      <FaTwitter className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/im_adiwalke/">
                      <FaInstagramSquare className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <h1 className="font-bold">Currently Working On</h1>
                <div className="flex space-x-5">
                  <FaJava className="text-2xl cursor-pointer" />
                  <SiSpringboot className="text-2xl cursor-pointer" />
                  <IoLogoJavascript className="text-2xl cursor-pointer" />
                  <FaReact className="text-2xl cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1">
            <img src={pic} className="rounded-full " alt="" />
          </div>
        </div>
      </div>

      <hr />
    </>
  );
}

export default Home;
