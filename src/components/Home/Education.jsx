import React, { useState, useRef } from "react";
import { ChevronDown } from "lucide-react";

const AccordionItem = ({ title, description, courses, date }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  return (
    <div className="border-b border-gray-200 overflow-hidden">
      <button
        className="flex justify-between items-center w-full py-3 px-5 bg-white hover:bg-gray-100 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex justify-between w-full pr-5" >
          <span className="text-lg font ">{title}</span>
          <span>{date}</span>
        </div>
        <span
          className="transition-transform transform duration-500 ease-in-out"
          style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          <ChevronDown />
        </span>
      </button>
      <div
        ref={contentRef}
        className="transition-max-height duration-500 ease-in-out bg-gray-50 flex flex-col gap-4"
        style={{
          maxHeight: isOpen ? `${contentRef.current.scrollHeight}px` : "0",
        }}
      >
        <div className="px-5 pt-5 text-justify ">{description}</div>
        <div className="px-5 pb-5">
          <span>Courses: </span>
          <span>{courses}</span>
        </div>
      </div>
    </div>
  );
};

const Education = ({ data }) => {
  return (
    <div className="mx-auto w-3/4">
      <div className="mx-auto mb-24 max-w-2xl text-center lg:max-w-5xl">
        <h1 className="mb-8 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
          Education
        </h1>
      </div>
      {data.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          description={item.content}
          courses={item.courses}
          date={item.date}
        />
      ))}
    </div>
  );
};

export default Education;
