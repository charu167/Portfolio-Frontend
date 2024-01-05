import React from "react";

export default function Home() {
  return (
    <div className="container p-11 bg-black mx-auto  ">
      {/* <div>1. Home page</div>
      <div>2. Tailwind CSS</div>
      <div>3. Drag and Drop</div>
      <div>4. React Routing</div>
      <div>5. Authentication</div>
      <h1 className="bg-green-400 text-black p-4 rounded-xl">Tailwind Test</h1> */}
      <div className="container mx-auto bg-slate-900 text-slate-50">
        <div className="container flex align-middle justify-start">
          <img
            src="https://cdn.pixabay.com/photo/2023/04/28/07/16/man-7956041_1280.jpg"
            alt="profile pic "
            className="h-16 rounded-full m-6"
          />
          <div className="">Charudatta Potdar</div>
        </div>

        <div>
          Software Developer, Computer Programmer and amateur Machine Learning
          Enthusiast
        </div>
      </div>
    </div>
  );
}
