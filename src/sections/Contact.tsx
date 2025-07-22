// src/sections/Contact.tsx
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import img1 from "../assets/img1.jpg";
import { useState, useEffect } from "react";
import type { mensajeParcial } from "../types/index";

type Props = {
  agregarMensaje: (message: mensajeParcial) => void;
};

const Contact = ({ agregarMensaje }: Props) => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [mensajeEnviado, setMensajeEnviado] = useState(false);

  const [errores, setErrores] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const erroresNuevos = {
      nombre: "",
      email: "",
      mensaje: "",
    };

    if (!nombre.trim()) erroresNuevos.nombre = "Este campo es obligatorio";
    if (!email.trim()) erroresNuevos.email = "Este campo es obligatorio";
    if (!mensaje.trim()) erroresNuevos.mensaje = "Este campo es obligatorio";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.trim() && !emailRegex.test(email)) {
      erroresNuevos.email = "Correo electrónico inválido";
    }

    if (erroresNuevos.nombre || erroresNuevos.email || erroresNuevos.mensaje) {
      setErrores(erroresNuevos);
      return;
    }

    const message = {
      name: nombre,
      email: email,
      body: mensaje,
    };

    agregarMensaje(message);

    // Limpiar campos
    setNombre("");
    setEmail("");
    setMensaje("");
    setErrores({ nombre: "", email: "", mensaje: "" });

    // Mostrar mensaje de éxito
    setMensajeEnviado(true);
  };

  useEffect(() => {
    if (mensajeEnviado) {
      const timer = setTimeout(() => {
        setMensajeEnviado(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [mensajeEnviado]);

  return (
    <section id="contact" className="py-20 bg-white text-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-[#4B0082]">
          Contáctame
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Formulario */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-xl p-8 space-y-6 border border-gray-200"
          >
            <div>
              <input
                type="text"
                placeholder="Nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                className={`w-full p-3 rounded-xl border ${
                  errores.nombre ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-[#4B0082]`}
              />
              {errores.nombre && (
                <p className="text-red-500 text-sm mt-1">{errores.nombre}</p>
              )}
            </div>

            <div>
              <input
                type="email"
                placeholder="Correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full p-3 rounded-xl border ${
                  errores.email ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-[#4B0082]`}
              />
              {errores.email && (
                <p className="text-red-500 text-sm mt-1">{errores.email}</p>
              )}
            </div>

            <div>
              <textarea
                placeholder="Mensaje"
                rows={5}
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
                className={`w-full p-3 rounded-xl border ${
                  errores.mensaje ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-[#4B0082]`}
              />
              {errores.mensaje && (
                <p className="text-red-500 text-sm mt-1">{errores.mensaje}</p>
              )}
            </div>

            <button
              type="submit"
              className="bg-gradient-to-r from-[#4B0082] to-indigo-700 text-white px-6 py-3 rounded-xl hover:scale-105 transition-transform"
            >
              Enviar mensaje
            </button>

            {/* ✅ Mensaje de confirmación */}
            {mensajeEnviado && (
              <p className="text-green-600 text-center font-semibold">
                ✅ ¡Mensaje enviado correctamente!
              </p>
            )}
          </motion.form>

          {/* Perfil lateral */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center text-center"
          >
            <img
              src={img1}
              alt="Foto de perfil"
              className="w-48 h-48 rounded-full object-cover shadow-lg mb-4"
            />
            <span className="text-sm bg-green-100 text-green-600 px-3 py-1 rounded-full mb-4">
              Disponible para trabajar
            </span>
            <p className="text-gray-600 mb-4 max-w-md">
              ¿Tienes una idea o necesitas un desarrollador frontend? Estoy
              listo para ayudarte a construir algo genial.
            </p>
            <div className="flex gap-4 text-2xl text-[#4B0082]">
              <a
                href="https://www.linkedin.com/in/jhon-mario-d%C3%ADaz-ricardo-1a1827211/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="hover:scale-110 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
