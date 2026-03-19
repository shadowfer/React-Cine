import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Cartelera from "../pages/Cartelera";
import Detalle from "../pages/Detalle";
import { Alimentos } from "../pages/Alimentos";
import { Otros } from "../pages/Otros";
import Contacto from "../pages/Contacto";

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cartelera" element={<Cartelera />} />
      <Route path="/pelicula/:id" element={<Detalle />} />
      <Route path="/alimentos" element={<Alimentos />} />
      <Route path="/otros" element={<Otros />} />
      <Route path="/contacto" element={<Contacto />} />
    </Routes>
  );
}
