import { ArrowUpRight, ExternalLink, Github, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import React from "react";

export default function Card({ i, title, description, github, link, image }) {
  return (
    <div className="flex w-2/3 rounded-md border ">
      {/* Left side image */}
      {i % 2 === 0 ? <Image image={image} /> : null}

      {/* Content Section */}
      <div className="flex flex-col w-2/3 justify-between py-2">
        <h1 className="text-4xl text-center w-full font-semibold">{title}</h1>
        <p className="text-sm w-full text-justify px-2 text-gray-600">
          {description}
        </p>

        {/* Buttons */}
        <div className="flex gap-5 justify-center w-full ">
          <Link to={github} target="blank">
            <button
              type="button"
              className="rounded-full bg-black px-3 py-3 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              <Github className="h-4 w-4" />
            </button>
          </Link>

          <Link to={link} target="blanl">
            <button
              type="button"
              className="rounded-full bg-black px-3 py-3 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              <ExternalLink className="h-4 w-4" />
            </button>
          </Link>
        </div>
      </div>

      {/* Right side image */}
      {i % 2 !== 0 ? <Image image={image} /> : null}
    </div>
  );
}

function Image({ image }) {
  return (
    <div className="w-1/3 h-full">
      <img
        src={image}
        alt="Laptop"
        className="h-full w-full rounded-md object-cover"
      />
    </div>
  );
}
