import { motion } from "framer-motion";
import profilePic from "../assets/images/profile-pic.jpeg";

const About = () => {
  return (
    <section
      id="about"
      className="py-16 md:py-32 h-auto md:h-screen bg-gray-100 flex flex-col items-center justify-center px-4 md:px-6"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-16 md:mb-32 text-center relative">
        About Me
        <span className="block h-1 w-12 md:w-16 bg-gray-800 rounded mt-2 mx-auto"></span>
      </h2>

      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl md:max-w-4xl items-center"
      >
        {/* Profile Picture */}
        <div className="flex justify-center">
          <img
            src={profilePic}
            alt="Nidhi Sharma"
            className="rounded-lg w-48 h-48 md:w-72 md:h-72 object-cover shadow-lg"
          />
        </div>

        {/* About Text */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl md:text-4xl text-gray-800 font-bold">
            Hi, I&apos;m{" "}
            <span className="animated-gradient-text animate-gradient-animation">
              Nidhi Sharma
            </span>
          </h2>
          <p className="mt-4 text-base md:text-lg text-gray-700 leading-relaxed">
            I&apos;m a frontend developer with a passion for building
            interactive, responsive, and user-friendly web applications. Skilled
            in <span className="font-semibold text-[#06b6d4]">HTML</span>,{" "}
            <span className="font-semibold text-[#3b82f6]">CSS</span>,{" "}
            <span className="font-semibold text-[#9333ea]">TailwindCSS</span>,{" "}
            <span className="font-semibold text-[#f43f5e]">JavaScript</span>,{" "}
            <span className="font-semibold text-[#f59e0b]">React.js</span>, and{" "}
            <span className="font-semibold text-[#ec4899]">Next.js</span>. I
            enjoy creating digital experiences that bring ideas to life. I’m
            constantly learning and staying updated with the latest trends and
            technologies in frontend development.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
