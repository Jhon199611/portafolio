// src/components/Footer.tsx
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white text-center py-6 shadow-inner border-t border-gray-200 mt-10"
    >
      <p className="text-gray-600 text-sm">
        © {new Date().getFullYear()} Jhon Mario Díaz. Todos los derechos reservados.
      </p>
    </motion.footer>
  );
};

export default Footer;