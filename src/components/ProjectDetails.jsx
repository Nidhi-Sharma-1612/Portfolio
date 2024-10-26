import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { projects } from "../data/projects";

const ProjectDetails = () => {
  const { projectName } = useParams();

  // Find the project that matches the route parameter
  const project = projects.find(
    (proj) => proj.title.replace(/\s+/g, "-").toLowerCase() === projectName
  );

  // Scroll to the top when the component is mounted
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return <p className="text-center mt-20">Project not found</p>;
  }

  return (
    <section className="min-h-screen bg-white py-12 md:py-16 px-4 md:px-6 pt-20 md:pt-32">
      <div className="max-w-2xl md:max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 md:mb-6 text-center">
          {project.title}
        </h2>
        <p className="text-base md:text-lg text-gray-600 mb-4 text-center">
          {project.description}
        </p>

        {/* Image Container */}
        <div className="w-full flex justify-center mb-6 md:mb-8">
          <div className="w-full max-w-sm md:max-w-md">
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-auto object-contain rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="text-base md:text-lg text-gray-700 mb-6 md:mb-8">
          <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-3 md:mb-4 text-left">
            Technologies Used
          </h3>
          <ul className="flex flex-wrap gap-2 md:gap-4 text-left">
            {project.technologies.map((tech, index) => (
              <li
                key={index}
                className="bg-gray-200 px-3 md:px-4 py-1 md:py-2 rounded-full text-gray-800 text-sm md:text-base"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>

        <div className="text-base md:text-lg text-gray-700">
          <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-3 md:mb-4 text-left">
            Project Details
          </h3>
          <ul className="list-disc list-inside space-y-2 md:space-y-3 text-left">
            {project.details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
