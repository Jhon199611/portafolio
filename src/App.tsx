// src/App.tsx
import Navbar from "./components/Navbar";
import Hero  from "./sections/Hero";
import  {Skills}  from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import { postMensaje } from "./services/messageService";
import type { mensaje, mensajeParcial } from "./types/index";
import { useState,} from "react";
import Footer from "./components/Footer";

function App() {
  const [mensajes, setMensajes] = useState<mensaje[]>([]);

  const agregarMensaje = async (message: mensajeParcial) => {
    try {
      const nuevoMensaje = await postMensaje(message);
      setMensajes([...mensajes, nuevoMensaje]);
    } catch (error) {
      console.error("❌ Error al agregar comentario:", error);
    }
  };

  return (
    <main className="bg-white text-gray-800 min-h-screen font-sans">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Contact agregarMensaje={agregarMensaje}/>
      <Footer />
      {/* Aquí irá el resto de las secciones */}
    </main>
  );
}

export default App;
