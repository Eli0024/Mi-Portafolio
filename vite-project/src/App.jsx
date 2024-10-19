import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { Inicio, Sobre, Estudios, Servicios, Proyectos, Contacto } from "./pages";
import Navbar from './components/Navbar/Navbar';



function App() {
  

  return (
    <>
      <Navbar />
      <Inicio />
      <Sobre />
      <Estudios />
      <Proyectos />
      <Servicios />
      <Contacto /> 
      </>
  )
}

export default App
