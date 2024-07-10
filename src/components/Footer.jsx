import React from "react";

import { ReactTyped, Typed } from "react-typed";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

function Footer() {
  return (
    // <div>Footer</div>
    <>
      <hr />
      <footer className="py-12">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 ">
          <div className="items-center justify-center flex flex-col">
            <div className="flex space-x-4">
              <FaLinkedin size={24} />
              <FaGithub size={24} />
              <FaTwitter size={24} />
              <FaInstagramSquare size={24} />
            </div>
            <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
              <p className="text-sm">
                &copy; 2024 My Company. All Rights Reserved
              </p>
              <p className="text-sm">Created by ❤️ Aditya</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
