import React from "react";
import { Link } from "react-router-dom";
import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  Twitter,
} from "lucide-react";

const contact = [
  { icon: <Mail />, text: "charupot08@gmail.com" },
  { icon: <Phone />, text: "+1 (602) 552-2779" },
];

const socials = [
  { icon: <Linkedin />, link: "https://www.linkedin.com/in/c-potdar/" },
  { icon: <Github />, link: "https://github.com/charu167" },
  { icon: <Twitter />, link: "https://twitter.com/Charudatta16278" },
  { icon: <Instagram />, link: "https://www.instagram.com/charu_0802/" },
];

export default function Contact() {
  return (
    <>
      <div>
        <hr />
        <div className="flex m-10 gap-5 flex-col items-center ">
          <div>
            <h1 className="text-3xl font-light font-serif ">
              Charudatta Potdar
            </h1>
          </div>
          <div>
            <ul className="flex gap-5">
              {contact.map((e) => (
                <li key={e} className="flex gap-1">
                  {e.icon}
                  {e.text}
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full">
            <ul className="flex w-full justify-center gap-12 ">
              {socials.map((e) => (
                <li>
                  <a href={e.link} target="blank">
                    {e.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
