import { BrowserRouter, Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";
import './App.css';
import { Inicio, Sobre, Estudios, Servicios, Proyectos, Contacto } from "./pages";
import Navbar from './components/Navbar/Navbar';
import Skils from './components/Skils';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div id="inicio"><Inicio /></div>
      <div id="sobre"><Sobre /></div>
      <div id="skils"><Skils /></div>
      <div id="estudios"><Estudios /></div>
      <div id="proyectos"><Proyectos /></div>
      <div id="servicios"><Servicios /></div>
      <div id="contacto"><Contacto /></div>
    </BrowserRouter>
  );
}

const PageWrapper = ({ component: Component }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }} // Iniciar fuera de la vista
      animate={{ opacity: 1, x: 0 }}   // Finalizar en la vista
      exit={{ opacity: 0, x: -100 }}    // Salir hacia la izquierda
      transition={{ duration: 0.5 }}     // Duración de la animación
    >
      <Component />
    </motion.div>
  );
};

export default App;
