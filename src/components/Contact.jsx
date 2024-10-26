import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaPhone, FaHome } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-gray-50 flex flex-col items-center justify-center py-12 md:py-16 px-4 md:px-6 text-gray-800"
    >
      <h2 className="text-2xl md:text-3xl font-semibold mb-12 md:mb-16 text-center relative">
        Get in Touch
        <span className="block h-1 bg-gray-800 rounded mt-2 mx-auto w-12 md:w-16"></span>
      </h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center space-y-6 md:space-y-0 md:grid md:grid-cols-2 md:gap-8 max-w-md md:max-w-3xl w-full text-center"
      >
        {/* Email */}
        <motion.div
          whileHover={{ y: -5 }}
          className="flex flex-col items-center p-4 md:p-6 rounded-lg shadow-md bg-white hover:shadow-lg transition-shadow duration-300 w-full"
        >
          <FaEnvelope className="text-green-500 text-xl md:text-2xl mb-2" />
          <a
            href="mailto:nidhisharma1133@gmail.com"
            className="text-base md:text-lg font-medium hover:text-green-600"
          >
            nidhisharma1133@gmail.com
          </a>
        </motion.div>

        {/* LinkedIn */}
        <motion.div
          whileHover={{ y: -5 }}
          className="flex flex-col items-center p-4 md:p-6 rounded-lg shadow-md bg-white hover:shadow-lg transition-shadow duration-300 w-full"
        >
          <FaLinkedin className="text-blue-600 text-xl md:text-2xl mb-2" />
          <a
            href="https://www.linkedin.com/in/nidhisharma11"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base md:text-lg font-medium hover:text-blue-700"
          >
            www.linkedin.com/in/nidhisharma11
          </a>
        </motion.div>

        {/* Phone */}
        <motion.div
          whileHover={{ y: -5 }}
          className="flex flex-col items-center p-4 md:p-6 rounded-lg shadow-md bg-white hover:shadow-lg transition-shadow duration-300 w-full"
        >
          <FaPhone className="text-gray-600 text-xl md:text-2xl mb-2" />
          <span className="text-base md:text-lg font-medium">
            +91 7042918917
          </span>
        </motion.div>

        {/* Address */}
        <motion.div
          whileHover={{ y: -5 }}
          className="flex flex-col items-center p-4 md:p-6 rounded-lg shadow-md bg-white hover:shadow-lg transition-shadow duration-300 w-full"
        >
          <FaHome className="text-red-500 text-xl md:text-2xl mb-2" />
          <span className="text-base md:text-lg font-medium">Delhi, India</span>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
