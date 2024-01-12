import { Link } from "react-router-dom";

import { CTA, Footer } from "../components";
import { projects } from "../constants";
import { arrow } from "../assets/icons";

const Projects = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        My{" "}
        <span className="blue-gradient_text drop-shadow font-semibold">
          Projects
        </span>
      </h1>

      <p className="text-slate-500 mt-2 leading-relaxed">
        I've embarked on numerous projects throughout the years in order to
        learn new technologies with great depth. These are the Major projects I
        worked on. This include both, my personal projects and academic
        projects. Github repos for my projects contain intro, pictures, video
        demo links and instruction to setup the project locally. Feel free to
        explore and contribute your ideas for further enhancements. Your
        feedback is highly valued!
      </p>

      <div className="flex flex-wrap my-20 gap-16">
        {projects.map((project) => (
          <div className="lg:w-[400px] w-full" key={project.name}>
            <div className="block-container w-12 h-12">
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={project.iconUrl}
                  alt="threads"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>

            <div className="mt-5 flex flex-col">
              <h4 className="text-2xl font-poppins font-semibold">
                {project.name}
              </h4>
              <p className="mt-2 text-slate-500">{project.description}</p>
              <div className="flex items-center gap-5">
                <div className="mt-5 flex items-center gap-2 font-poppins">
                  <Link
                    to={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-blue-600"
                  >
                    Github Link
                  </Link>
                  <img
                    src={arrow}
                    alt="arrow"
                    className="w-4 h-4 object-contain"
                  />
                </div>

                {project.liveLink && (
                  <div className="mt-5 flex items-center gap-2 font-poppins">
                    <Link
                      to={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-blue-600"
                    >
                      Live Link
                    </Link>
                    <img
                      src={arrow}
                      alt="arrow"
                      className="w-4 h-4 object-contain"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className="border-slate-200" />

      <CTA />
    </section>
  );
};

export default Projects;
