import React from "react";
import { Link } from "react-router-dom";

const HomeNav = () => {
  return (
    <nav className=" flex  justify-center  text-black   ">
      <div className="inline-flex fixed z-50 space-x-4 px-5 bg-custom-2 py-3 w-2/3 justify-evenly rounded-full shadow border border-gray-200">
        <Link to="/connect" className="hover:underline">
          Connect
        </Link>
        <Link to="/hire" className="hover:underline">
          Hire
        </Link>
        <Link to="/dashboard" className="hover:underline">
          Explore
        </Link>
        
      </div>
    </nav>
  );
};

export default HomeNav;
