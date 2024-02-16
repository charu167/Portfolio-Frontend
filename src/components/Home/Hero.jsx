import React from "react";
import { ArrowRight } from "lucide-react";
import Hex from "./Hex/Hex";

export default function Hero() {
  return (
    <div className="relative w-full bg-white">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6">
          <h1 className="mt-0 text-3xl tracking-wide flex gap-8 items-center font-bold  text-black md:text-4xl lg:text-4xl">
            <img
              className="inline-block h-36 w-36 rounded-full aspect-auto"
              src="https://cdn.pixabay.com/photo/2018/01/20/05/26/plane-3093859_1280.jpg"
              alt="Dan_Abromov"
            />
            <span>Charudatta Potdar</span>
          </h1>
          <p className="mt-8 text-lg text-justify text-gray-700">
            Hello! I'm Charu, a dynamic Full-Stack Web Developer with a
            comprehensive background in Computer Science. Driven by a passion
            for crafting end-to-end solutions, I specialize in developing
            complex websites, deploying them seamlessly to the cloud, and
            ensuring their ongoing maintenance. My expertise extends beyond
            traditional web development to include knowledge in Artificial
            Intelligence and Machine Learning, enabling me to deliver innovative
            and intelligent web solutions. Let's build something amazing
            together!
          </p>
          {/* <button
            type="button"
            className="mt-8 text-center w-fit inline-flex items-center rounded-md bg-black px-3 py-2 text-sm font-semibold text-white hover:bg-black/80"
          >
            Checkout Demos
            <ArrowRight className="ml-2 h-4 w-4" />
          </button> */}
        </div>

        {/* RIGHT HEXAGONS */}
        <div
          // style={{
          //   background: "#922822",
          // }}
          className="relative mt-36 pb-52 py-20 flex flex-col items-center justify-center  lg:col-span-5 lg:-mr-8 xl:col-span-6  gap-y-12"
        >
          <div className="grid grid-cols-3 gap-x-1 ">
            <Hex title={"SDE"} />
            <Hex title={"WebDev"} />
            <Hex title={"AI/ML"} />
          </div>
          <div className="grid grid-cols-2 gap-x-1 ">
            <Hex title={"DevOps"} />
            <Hex title={"Cloud"} />
          </div>
          <div className="grid grid-cols-1 gap-1 ">
            <Hex title={"QA"} />
          </div>
        </div>
      </div>
    </div>
  );
}
