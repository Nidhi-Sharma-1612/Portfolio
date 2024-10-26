import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      id="footer"
      className="h-32 bg-gray-900 text-white flex items-center justify-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <p>&copy; 2024 Nidhi Sharma. All rights reserved.</p>
    </motion.footer>
  );
};

export default Footer;
