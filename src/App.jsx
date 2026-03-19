import { Routes, Route } from "react-router-dom"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"

// Importar las vistas que mostraremos según la navegación
import Home from "./pages/Home"
import Cartelera from "./pages/Cartelera"
import Detalle from "./pages/Detalle"
import { Alimentos } from "./pages/Alimentos"
import { Otros } from "./pages/Otros"
import Contacto from "./pages/Contacto"

function App() {
  return (
    <div style={{ minHeight: "100vh" }}>
      {/* Header siempre visible */}
      <Header />

      {/* Configuración de rutas */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cartelera" element={<Cartelera />} />
        <Route path="/pelicula/:id" element={<Detalle />} />
        <Route path="/alimentos" element={<Alimentos />} />
        <Route path="/otros" element={<Otros />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>

      {/* Footer siempre visible al final */}
      <Footer />
    </div>
  )
}

export default App