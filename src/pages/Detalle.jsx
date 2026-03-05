import { useState } from "react"
import { useParams } from "react-router-dom"
import '../App.css';

// Importar datos y mapeo de imágenes
import peliculas from "../detalles.json"
import dunaImg from "../assets/duna.jpg"
import pandaImg from "../assets/kunfu.jpg"
import intensaImg from '../assets/intensamente.jpg';
import zooImg from '../assets/zootopia.jpg';
import avatarImg from '../assets/avatar.jpg';

const imagenes = {
  "duna.jpg": dunaImg,
  "kunfu.jpg": pandaImg,
  "intensamente.jpg": intensaImg,
  "zootopia.jpg": zooImg,
  "avatar.jpg": avatarImg
}

// Vista de detalle de una película
function Detalle() {
  // Obtenemos el id de la URL
  const { id } = useParams()

  // Buscamos la película por id en el JSON
  const pelicula = peliculas.find(p => p.id === Number(id))

  // Estados para el formulario
  const [nombre, setNombre] = useState("")
  const [cantidadBoletos, setCantidadBoletos] = useState(1)
  const [mensaje, setMensaje] = useState("")

  // En el caso que no se encuentre la película
  if (!pelicula) {
    return (
      <main style={{ padding: "80px", textAlign: "center", color: "white" }}>
        <h2>No hay película seleccionada</h2>
      </main>
    )
  }

  // Resolvemos la imagen internamente
  const imagenResuelta = imagenes[pelicula.imagen]

  // Evento submit/enviar
  function manejarCompra(e) {
    e.preventDefault()
    setMensaje(`¡Gracias ${nombre}! Compraste ${cantidadBoletos} boleto(s) para ${pelicula.titulo}.`)
    setNombre("")
    setCantidadBoletos(1)
  }

  return (
    <main className="detalle-container">
      {/* Columna Izquierda: Póster */}
      <div className="detalle-left">
        <img
          src={imagenResuelta}
          alt={pelicula.titulo}
          className="detalle-poster"
        />
      </div>

      {/* Columna Derecha: Información + Formulario */}
      <div className="detalle-right">
        <h2 className="detalle-titulo">{pelicula.titulo}</h2>
        <p className="detalle-descripcion">{pelicula.descripcion}</p>

        <div className="detalle-compra-widget">
          <h3 className="widget-titulo">Compra tus boletos</h3>
          
          <form onSubmit={manejarCompra} className="form-compra">
            <div className="form-group">
              <label>Nombre</label>
              <input
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                placeholder="Tu nombre completo"
                required
              />
            </div>

            <div className="form-group">
              <label>Boletos</label>
              <input
                type="number"
                min="1"
                max="10"
                value={cantidadBoletos}
                onChange={(e) => setCantidadBoletos(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="btn-amarillo btn-full">
              Comprar Ahora
            </button>
          </form>

          {mensaje && (
            <div className="mensaje-exito">
              {mensaje}
            </div>
          )}
        </div>
      </div>
    </main>
  )
}

export default Detalle