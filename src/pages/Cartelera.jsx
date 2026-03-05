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
    <main
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "16px",
        padding: "16px"
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
  )
}

export default Cartelera