import { motion } from "framer-motion";
import img1 from "../assets/img1.jpg";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="min-h-screen flex flex-col items-center justify-center px-6 gap-10 bg-white text-gray-800 py-12"
    >
      {/* Contenedor principal con imagen y texto */}
      <div className="flex flex-col md:flex-row items-center gap-10 w-full max-w-6xl">
        {/* Imagen a la izquierda */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-shrink-0"
        >
          <img
            src={img1}
            alt="Foto de perfil"
            className="w-48 h-48 md:w-64 md:h-64 rounded-full shadow-lg object-contain"
          />
        </motion.div>

        {/* Texto a la derecha */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center md:text-left space-y-5 mt-20"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-[#4B0082]">
            ¡Hola! Soy Jhon Mario
          </h1>
          <h2 className="text-2xl md:text-3xl text-purple-700 font-semibold">
            Desarrollador de software enfocado en crear soluciones eficientes, claras y funcionales.
          </h2>
          <p className="text-gray-600 text-lg max-w-xl">
            Me encanta construir experiencias web modernas con React, Vue
            TypeScript, Tailwind CSS y Supabase.
          </p>
          <div className="flex gap-4 justify-center md:justify-start pt-4">
            <a
              href="/images/hvjhondiaz.pdf"
              download
              className="px-6 py-3 bg-[#4B0082] text-white rounded-lg font-semibold hover:bg-purple-800 transition"
            >
              Descargar CV
            </a>
            <a
              href="#proyectos"
              className="px-6 py-3 border-2 border-[#4B0082] text-[#4B0082] rounded-lg font-semibold hover:bg-[#4B0082] hover:text-white transition"
            >
              Ver Proyectos
            </a>
          </div>
        </motion.div>
      </div>

      {/* Tarjetas informativas */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 w-full max-w-6xl"
      >
        {/* Tarjeta 1 */}
        <div className="bg-white shadow-md rounded-xl p-6 border-t-4 border-[#4B0082] transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
          <h3 className="text-xl font-bold text-[#4B0082]">+10 Tecnologías</h3>
          <p className="text-gray-600 mt-2">Dominadas profesionalmente</p>
        </div>

        {/* Tarjeta 2 */}
        <div className="bg-white shadow-md rounded-xl p-6 border-t-4 border-[#4B0082] transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
          <h3 className="text-xl font-bold text-[#4B0082]">+5 Proyectos</h3>
          <p className="text-gray-600 mt-2">Completados con éxito</p>
        </div>

        {/* Tarjeta 3 */}
        <div className="bg-white shadow-md rounded-xl p-6 border-t-4 border-[#4B0082] transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
          <h3 className="text-xl font-bold text-[#4B0082]">+2 Años</h3>
          <p className="text-gray-600 mt-2">De experiencia real</p>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
