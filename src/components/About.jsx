import React from "react";

function About() {
  return (
    <>
      <div
        name="About"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
      >
        <div>
          <h1 className="text-3xl font-bold mb-5">About</h1>
          <p>
            Hello! I'm Aditya Walke, a passionate and dedicated Java Developer
            with one year of professional experience. As a B.Tech IT student, I
            have honed my skills in various technologies, making me proficient
            in both backend and frontend development.
          </p>
          <br />
          <h1 className="text-green-500 text-xl font-bold">Education</h1>
          <span>
            <h1 className="font-bold text-xl">
              Vishwakarma Institue Of Information Technology{" "}
            </h1>
            <p className="text-md font-thin">
              Btech-Information Technology <br />
              Grade-7.52 <br /> Graduation Year-2026
            </p>
            <br />
            <h1 className="py- text-xl font-bold">
              Jaywantrao Sawant Polytechnic{""}
            </h1>
            <p className="text-md font-thin">
              Diploma-Information Technology <br /> Grade-9.82 <br />
              Graduation Year-2023
            </p>
          </span>
          <br />
          <br />
          {/* <h1 className="text-green-500 text-xl font-bold ">Skills</h1>
          <span></span>
          <br />
          <br /> */}
          <h1 className="text-green-500 text-xl font-bold">Experience</h1>
          <span>
            <h1 className="font-bold text-xl">Developer Intern</h1>
            <p className="text-md font-thin">Organisation-TechnoArtz</p>
            <p className="text-md font-thin">Duration-Present</p>
          </span>
          <br />
          <br />
          <h1 className="text-green-500 text-xl font-bold">Achivements</h1>
          <span>
            <h1 className="text-xl font-bold">
              1st Rank holder MIT School of Computing Project Expo2k23
            </h1>
            <p className="text-md font-thin">
              Issued by MIT SCHOOL OF COMPUTING LONI PUNE · Feb 2023
            </p>
          </span>
          <br />
          <br />
          {/* <h1 className="text-green-500 text-xl font-bold">
            Proficient Languages
          </h1>
          <span>
            <ul className="items-center">
              <li className="text-sm font-thin">English</li>
              <li className="text-sm font-thin">Hindi</li>
              <li className="text-sm font-thin">Marathi</li>
            </ul>
          </span> */}
        </div>
      </div>
      <hr />
    </>
  );
}

export default About;
