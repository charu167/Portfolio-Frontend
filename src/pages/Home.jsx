import React, { useEffect, useState } from "react";

//Importing componnets
import Hero from "../components/Home/Hero";
import Card from "../components/Home/Card";
import Skills from "../components/Home/Skills";
import Contact from "../components/Home/Contact";
import HomeNav from "../components/Home/HomeNav";
import Education from "../components/Home/Education";

//Importing static data
import { projects } from "../assets/data/projects";
import { education } from "../assets/data/education";

export default function Home() {
  const [y, setY] = useState(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", function () {
      setY(this.window.scrollY);
    });
  });

  return (
    <>
      {/* Navbar */}
      {/* <div className={y < 120 ? "mt-10" : null}>
        <HomeNav />
      </div> */}

      <div className="flex flex-col gap-40 font-serif">
        {/* Hero */}
        <div>
          <Hero />
        </div>

        {/* Skills */}
        <div className="m-10">
          <Skills />
        </div>

        {/* Projects */}
        <div className="m-10">
          <div className="mx-auto mb-24 max-w-2xl text-center lg:max-w-5xl">
            <h1 className="mb-8 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
              Best of my Projects
            </h1>
          </div>
          <div className=" mt-10 flex flex-col justify-evenly items-center gap-10 ">
            {projects.map((e, i) => (
              <Card
                key={i}
                i={i}
                title={e.title}
                description={e.description}
                github={e.github}
                link={e.link}
                image={e.image}
              />
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <Education data={education} />
        </div>

        {/* Contact/Footer */}
        <Contact />
        {/* End */}
      </div>
    </>
  );
}
