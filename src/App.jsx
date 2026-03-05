import { Routes, Route } from "react-router-dom"
import { Header } from "./components/Header"

// Importar las vistas que mostraremos según la navegación
import Home from "./pages/Home"
import Cartelera from "./pages/Cartelera"
import Detalle from "./pages/Detalle"
import { Alimentos } from "./pages/Alimentos"
import { Otros } from "./pages/Otros"

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
      </Routes>
    </div>
  )
}

export default App