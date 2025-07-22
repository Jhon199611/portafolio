import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false); // Cierra el menú al hacer clic en un link
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.1 }}
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 
        px-6 md:px-10 py-3 w-[90%] max-w-5xl rounded-3xl shadow-xl backdrop-blur-md 
        transition-all duration-300
        ${scrolled ? "bg-white/70 scale-90" : "bg-white/90"}`}
    >
      <div className="flex justify-between items-center">
        {/* Nombre de la página */}
        <div className="text-xl font-bold text-[#4B0082]">JDR</div>

        {/* Botón hamburguesa (solo visible en móvil) */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X className="text-[#4B0082]" /> : <Menu className="text-[#4B0082]" />}
          </button>
        </div>

        {/* Menú en escritorio */}
        <ul className="hidden md:flex gap-8 font-semibold text-base md:text-lg text-[#4B0082]">
          <li>
            <a href="#inicio" onClick={handleLinkClick} className="hover:underline transition">
              Inicio
            </a>
          </li>
          <li>
            <a href="#habilidades" onClick={handleLinkClick} className="hover:underline transition">
              Habilidades
            </a>
          </li>
          <li>
            <a href="#proyectos" onClick={handleLinkClick} className="hover:underline transition">
              Proyectos
            </a>
          </li>
          <li>
            <a href="#contact" onClick={handleLinkClick} className="hover:underline transition">
              Contacto
            </a>
          </li>
        </ul>
      </div>

      {/* Menú móvil */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex flex-col mt-4 gap-4 font-semibold text-base text-[#4B0082] md:hidden"
          >
            <li>
              <a href="#inicio" onClick={handleLinkClick} className="hover:underline transition">
                Inicio
              </a>
            </li>
            <li>
              <a href="#habilidades" onClick={handleLinkClick} className="hover:underline transition">
                Habilidades
              </a>
            </li>
            <li>
              <a href="#proyectos" onClick={handleLinkClick} className="hover:underline transition">
                Proyectos
              </a>
            </li>
            <li>
              <a href="#contact" onClick={handleLinkClick} className="hover:underline transition">
                Contacto
              </a>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;