// src/sections/Projects.tsx
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "CRUD Coments",
    description:
      "CRUD sencillo donde puedes ingresar un comentario, verlo, editarlo y eliminarlo tambien cuenta con sus respectivas validaciones el formulario.",
    year: 2025,
    technologies: ["Reactjs", "Supabase", "Tailwind", "Typescript", "css"],
    image: "/images/proyecto1.png",
    link: "https://commets.netlify.app/",
  },
  {
    id: 2,
    title: "ERP",
    description: "Desarrollando un ERP web desde cero , enfocado en gestión de inventario y punto de venta. Aplicando buenas prácticas, estructura modular y experiencia de usuario moderna",
    year: 2025,
    technologies: ["Reactjs", "Supabase", "Tailwind", "Typescript","css"],
    image: "/images/proyecto3.png",
    link: "https://posreact.netlify.app/",
  },
];

const Projects = () => {
  return (
    <section
      id="proyectos"
      className="py-20 bg-white text-gray-900 px-4 md:px-20"
    >
      <h2 className="text-4xl font-bold mb-12 text-center text-purple-800">
        Proyectos Personales
      </h2>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300 border hover:shadow-2xl"
          >
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover rounded-t-2xl"
              />
            </a>
            <div className="p-5">
              <h3 className="text-xl font-semibold text-purple-800">
                {project.title}
              </h3>
              <p className="text-sm mt-2 text-gray-700">
                {project.description}
              </p>
              <div className="mt-3">
                <span className="text-sm font-medium text-gray-600">
                  Tecnologías:
                </span>
                <ul className="flex flex-wrap gap-2 mt-1 text-xs text-gray-700">
                  {project.technologies.map((tech) => (
                    <li
                      key={tech}
                      className="bg-purple-100 text-purple-800 px-2 py-0.5 rounded-md"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-right text-xs font-semibold mt-4 text-gray-500">
                {project.year}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
