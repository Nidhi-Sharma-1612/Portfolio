import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { projects } from "../data/projects";

const Portfolio = () => {
  const navigate = useNavigate();

  return (
    <section
      id="portfolio"
      className="min-h-screen bg-white flex flex-col items-center justify-center py-16 md:py-28 px-4"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-12 md:mb-16 text-center relative">
        Portfolio
        <span className="block h-1 w-12 md:w-16 bg-gray-800 rounded mt-2 mx-auto"></span>
      </h2>

      <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-4xl md:max-w-5xl">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="shadow-lg p-4 rounded-lg bg-gray-100 cursor-pointer"
            onClick={() =>
              navigate(
                `/portfolio/${project.title.replace(/\s+/g, "-").toLowerCase()}`
              )
            }
          >
            <img
              src={project.img}
              alt={project.title}
              className="rounded-lg w-full h-40 sm:h-48 object-cover"
            />
            <h3 className="text-xl sm:text-2xl font-bold mt-4">
              {project.title}
            </h3>
            <p className="text-gray-600 mt-2 text-sm sm:text-base">
              {project.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Portfolio;
