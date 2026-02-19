import { useState } from "react"
import '../App.css';

// Vista de detalle de una película
function Detalle({ pelicula }) {

  // Estados para el formulario
  const [nombre, setNombre] = useState("")
  const [cantidadBoletos, setCantidadBoletos] = useState(1)
  const [mensaje, setMensaje] = useState("")

  // En el caso que no se seleccione ninguna película
  if (!pelicula) {
    return (
      <main style={{ padding: "80px", textAlign: "center", color: "white" }}>
        <h2>No hay película seleccionada</h2>
      </main>
    )
  }

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
          src={pelicula.imagen}
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