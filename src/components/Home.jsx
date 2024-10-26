import { motion } from "framer-motion";
import coderImage from "../assets/images/coding-girl.webp";

const Home = () => {
  return (
    <section
      id="home"
      className="relative h-screen bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: `url(${coderImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center px-4"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
          Welcome to My Portfolio
        </h1>
        <p className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl">
          I&apos;m a passionate web developer.
        </p>
      </motion.div>
    </section>
  );
};

export default Home;
