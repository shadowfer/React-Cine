import { useNavigate } from "react-router-dom"
import { MovieCard } from "../components/MovieCard"
// Importamos los datos del JSON
import peliculas from "../detalles.json"

// Importar todas las imágenes necesarias para la cartelera
import intensaImg from '../assets/intensamente.jpg';
import zooImg from '../assets/zootopia.jpg';
import avatarImg from '../assets/avatar.jpg';
import pandaImg from '../assets/kunfu.jpg';
import dunaImg from '../assets/duna.jpg';

// Objeto de mapeo de imágenes
const imagenes = {
  "intensamente.jpg": intensaImg,
  "zootopia.jpg": zooImg,
  "avatar.jpg": avatarImg,
  "kunfu.jpg": pandaImg,
  "duna.jpg": dunaImg
}

function Cartelera() {
  const navigate = useNavigate()

  // Función de navegación programática a detalle
  function irADetalle(id) {
    navigate(`/pelicula/${id}`)
  }

  return (
    <>
      <section style={{ textAlign: "center", marginBottom: "40px", marginTop: "80px" }}>
        <h2 style={{ color: "#ffffff", fontSize: "2.5rem", fontWeight: "800", position: "relative", display: "inline-block" }}>
          Cartelera
          <div style={{ position: "absolute", bottom: "-10px", left: "25%", width: "50%", height: "4px", backgroundColor: "var(--accent-blue)", borderRadius: "2px" }}></div>
        </h2>
      </section>
      <main
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          justifyItems: "center",
          gap: "40px",
          padding: "40px 20px"
        }}
      >
        {/* Usamos el JSON importado para renderizar todas las películas */}
        {peliculas.map((pelicula) => (
          <MovieCard
            key={pelicula.id}
            title={pelicula.titulo}
            // Obtenemos la imagen del objeto de mapeo
            image={imagenes[pelicula.imagen]}
            // Navegamos a la ruta de detalle con el id de la película
            onVerDetalle={() => irADetalle(pelicula.id)}
          />
        ))}
      </main>
    </>
  )
}

export default Cartelera