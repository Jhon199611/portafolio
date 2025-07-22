// src/sections/Skills.tsx
import { useState } from "react";
import { motion } from "framer-motion";
import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiSupabase,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiGithub,
  SiFigma,
  SiVite,
  SiNodedotjs,
  SiVuedotjs,
} from "react-icons/si";

const technologies = [
  {
    name: "React",
    icon: <SiReact size={80} className="text-blue-500" />,
    category: "front",
  },
  {
    name: "Vue",
    icon: <SiVuedotjs size={80} className="text-teal-600" />,
    category: "front",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript size={80} className="text-blue-700" />,
    category: "front",
  },
  {
    name: "Tailwind",
    icon: <SiTailwindcss size={80} className="text-teal-400" />,
    category: "front",
  },
  {
    name: "Supabase",
    icon: <SiSupabase size={80} className="text-green-500" />,
    category: "back",
  },
  {
    name: "JavaScript",
    icon: <SiJavascript size={80} className="text-yellow-400" />,
    category: "front",
  },
  {
    name: "HTML",
    icon: <SiHtml5 size={80} className="text-orange-500" />,
    category: "front",
  },
  {
    name: "CSS",
    icon: <SiCss3 size={80} className="text-blue-500" />,
    category: "front",
  },
  {
    name: "GitHub",
    icon: <SiGithub size={80} className="text-black" />,
    category: "other",
  },
  {
    name: "Figma",
    icon: <SiFigma size={80} className="text-pink-500" />,
    category: "other",
  },
  {
    name: "Vite",
    icon: <SiVite size={80} className="text-purple-500" />,
    category: "front",
  },
  {
    name: "Node.js",
    icon: <SiNodedotjs size={80} className="text-green-700" />,
    category: "back",
  },
];

export const Skills = () => {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("all");
  const [verMas, setVerMas] = useState(false);

  const tecnologiasFiltradas =
    categoriaSeleccionada === "all"
      ? technologies
      : technologies.filter((tech) => tech.category === categoriaSeleccionada);

  const tecnologiasMostradas = verMas
    ? tecnologiasFiltradas
    : tecnologiasFiltradas.slice(0, 6);

  return (
    <section id="habilidades" className="py-20 px-6 bg-gray-50 text-center">
      {/* Título */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-6xl font-bold text-[#4B0082] mb-14"
      >
        Habilidades
      </motion.h2>

      {/* Menú de categorías */}
      <div className="flex justify-center gap-4 mb-14 flex-wrap">
        {["all", "front", "back", "other"].map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={(e) => {
              e.preventDefault();
              setCategoriaSeleccionada(cat);
              setVerMas(false); // reiniciar al cambiar categoría
            }}
            className={`px-4 py-2 rounded-full border border-[#4B0082] text-[#4B0082] font-semibold hover:bg-[#4B0082] hover:text-white transition ${
              categoriaSeleccionada === cat ? "bg-[#4B0082] text-white" : ""
            }`}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      {/* Grid de tecnologías */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 max-w-6xl mx-auto mb-10">
        {tecnologiasMostradas.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-4 p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition"
          >
            {tech.icon}
            <p className="text-xl font-semibold text-gray-700">{tech.name}</p>
          </motion.div>
        ))}
      </div>

      {/* Botón Ver más / Ver menos */}
      {tecnologiasFiltradas.length > 6 && (
        <motion.button
          type="button"
          onClick={() => setVerMas((prev) => !prev)}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="px-6 py-3 text-lg font-semibold rounded-full bg-[#4B0082] text-white hover:bg-[#3a0066] transition shadow-lg hover:shadow-xl"
        >
          {verMas ? "Ver menos" : "Ver más"}
        </motion.button>
      )}
    </section>
  );
};
