import React from "react";

const skills = {
  "AI/ML": ["Python", "Keras", "SKLearn", "SciPy", "OpenCV"],
  Frontend: [
    "ReactJS",
    "NextJS",
    "HTML5",
    "CSS3",
    "JavaScript",
    "TypeScript",
    "Tailwind-CSS",
  ],

  DevOps: [
    "CI/CD",
    "Docker",
    "Kubernetes",
    "Terraform",
    "Git",
    "GitHub",
    "GitHub Actions",
  ],
  Backend: [
    "NodeJS",
    "ExpressJS",
    "REST APIs",
    "MongoDB",
    "SQL",
    "Python",
    "Django",
  ],

  Cloud: ["AWS", "AWS-IAM", "AWS EC2", "AWS S3", "RDS"],
  //   QA: ["Selenium WebDriver"],
};

export default function Skills() {
  return (
    <section className="relative overflow-hidden py-10">
      <div className="relative mx-auto max-w-7xl px-4">
        <div className="mx-auto mb-24 max-w-2xl text-center lg:max-w-5xl">
          <h1 className="mb-8 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
            Let's Build Your Dream Together
          </h1>
          <p className="text-lg text-gray-500">CODE - DEPLOY - MAINTAIN</p>
        </div>

        <div className="mx-auto max-w-5xl">
          <div className="flex  justify-evenly gap-10 ">
            {Object.keys(skills).map((e, i) => {
              return i % 2 === 0 ? (
                <div className="w-52 lg:-mr-2 lg:w-1/3 ">
                  <div className="mx-auto max-w-sm rounded-md border border-gray-200 bg-white pb-20 pl-5 pr-8 pt-6 lg:pb-8">
                    <span className="flex items-end">
                      <span className="text-4xl font-extrabold leading-none">
                        {e}
                      </span>
                    </span>
                    <div className="mt-7 border-t border-gray-100 pt-5">
                      <ul className="mb-0">
                        {skills[e].map((e1) => (
                          <li key={e1} className="mb-6 flex items-center">
                            <span className="ml-2 tex-base font-semibold text-gray-900">
                              {e1}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="w-52 lg:-mr-2 lg:w-1/3">
                  <div className="pt-22 relative mx-auto max-w-sm rounded-lg bg-black px-10 pb-9 ">
                    <span className="pt-6 flex items-end text-white">
                      <span className="text-4xl font-extrabold leading-none">
                        {e}
                      </span>
                    </span>
                    <div className="mt-7 border-t border-white pt-5">
                      <ul className="mb-0">
                        {skills[e].map((e1) => (
                          <li key={e1} className="mb-6 flex items-center">
                            <span className="ml-2 tex-base font-semibold text-white">
                              {e1}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
