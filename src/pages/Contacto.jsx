import { useState } from "react"
import '../styles/App.css'

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: ""
  })
  const [enviado, setEnviado] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setEnviado(true)
    setFormData({ nombre: "", email: "", mensaje: "" })
  }

  return (
    <main style={{ padding: "80px 40px", maxWidth: "800px", margin: "0 auto", color: "white" }}>
      <h2 style={{ color: "#ffffff", fontSize: "2.5rem", fontWeight: "800", marginBottom: "20px" }}>Contacto</h2>
      <p style={{ marginBottom: "20px" }}>¿Tienes alguna duda o sugerencia? ¡Escríbenos!</p>

      <div className="detalle-compra-widget" style={{ maxWidth: "100%" }}>
        {enviado ? (
          <div className="mensaje-exito">
            ¡Gracias por tu mensaje! Te contactaremos pronto.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="form-compra">
            <div className="form-group">
              <label>Nombre</label>
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                placeholder="Tu nombre"
                required
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="tu@email.com"
                required
              />
            </div>
            <div className="form-group">
              <label>Mensaje</label>
              <textarea
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                placeholder="Escribe tu mensaje aquí..."
                required
                style={{
                  width: "100%",
                  padding: "12px",
                  borderRadius: "8px",
                  backgroundColor: "rgba(0, 0, 0, 0.3)",
                  color: "white",
                  border: "1px solid var(--card-border)",
                  minHeight: "120px",
                  fontFamily: "inherit",
                  fontSize: "1rem"
                }}
              ></textarea>
            </div>
            <button type="submit" className="btn-amarillo btn-full">
              Enviar Mensaje
            </button>
          </form>
        )}
      </div>

      <div style={{ marginTop: "60px", padding: "30px", background: "var(--card-bg)", borderRadius: "16px", border: "1px solid var(--card-border)", textAlign: "left" }}>
        <h3 style={{ color: "var(--accent-blue)", marginBottom: "20px" }}>Nuestras Oficinas</h3>
        <p style={{ margin: "10px 0", display: "flex", gap: "10px" }}><span>📍</span> Av. Cine 123, Ciudad Película</p>
        <p style={{ margin: "10px 0", display: "flex", gap: "10px" }}><span>📞</span> +52 (55) 1234-5678</p>
        <p style={{ margin: "10px 0", display: "flex", gap: "10px" }}><span>📧</span> soporte@cine-app.com</p>
      </div>
    </main>
  )
}
