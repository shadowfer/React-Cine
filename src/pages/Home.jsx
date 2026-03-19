import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { MovieCard } from "../components/MovieCard"
import { SwiperCarousel } from "../components/SwiperCarousel"
import peliculas from "../data/detalles.json"
import '../styles/App.css'; // Aseguramos importar los estilos

// Importar todas las imágenes necesarias para el Home
import dunaImg from "../assets/duna.jpg"
import pandaImg from "../assets/kunfu.jpg"
import intensaImg from '../assets/intensamente.jpg';
import zooImg from '../assets/zootopia.jpg';
import avatarImg from '../assets/avatar.jpg';

// Objeto de mapeo de imágenes
const imagenes = {
  "duna.jpg": dunaImg,
  "kunfu.jpg": pandaImg,
  "intensamente.jpg": intensaImg,
  "zootopia.jpg": zooImg,
  "avatar.jpg": avatarImg
}

function Home() {
  const navigate = useNavigate()

  // Estado para guardar las noticias
  const [noticias, setNoticias] = useState([])

  // Función de navegación programática a detalle
  function irADetalle(id) {
    navigate(`/pelicula/${id}`)
  }

  // useEffect que SIMULA el consumo de una API
  useEffect(() => {
    // Simulamos una petición con datos locales para que sean noticias de cine reales
    const obtenerNoticias = () => {
      const datosFalsos = [
        {
          id: 1,
          title: "¡Preventa de Avengers: Secret Wars iniciada!",
          body: "Corre por tus boletos para el evento cinematográfico de la década. Disponibles en taquilla y app."
        },
        {
          id: 2,
          title: "Nuevo trailer de Superman",
          body: "James Gunn revela el primer vistazo oficial al hombre de acero. El reinicio del DCU promete ser épico."
        },
        {
          id: 3,
          title: "Festival de Cine Francés",
          body: "Disfruta de la selección oficial durante todo el mes de octubre. Consulta la cartelera especial."
        },
        {
          id: 4,
          title: "Promoción Martes 2x1",
          body: "Recuerda que todos los martes tenemos 2x1 en todas las funciones tradicionales presentando tu tarjeta Club."
        }
      ]
      setNoticias(datosFalsos)
    }

    obtenerNoticias()
  }, [])


  return (
    <>
      <section style={{ textAlign: "center", marginBottom: "40px", marginTop: "40px" }}>
        <h2 style={{ color: "#ffffff", fontSize: "2.5rem", fontWeight: "800" }}>Estrenos Exclusivos</h2>
      </section>

      <SwiperCarousel 
        peliculas={peliculas} 
        imagenes={imagenes} 
        onVerDetalle={irADetalle} 
      />


      {/* Resto de peliculas en grilla */}
      <section style={{ textAlign: "center", marginBottom: "40px", marginTop: "80px" }}>
        <h2 style={{ color: "#ffffff", fontSize: "2.5rem", fontWeight: "800", position: "relative", display: "inline-block" }}>
          Cartelera completa
          <div style={{ position: "absolute", bottom: "-10px", left: "25%", width: "50%", height: "4px", backgroundColor: "var(--accent-blue)", borderRadius: "2px" }}></div>
        </h2>
      </section>

      <main
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "24px",
          padding: "16px"
        }}
      >
        {peliculas.map((pelicula) => (
          <MovieCard
            key={pelicula.id}
            title={pelicula.titulo}
            image={imagenes[pelicula.imagen]} 
            onVerDetalle={() => irADetalle(pelicula.id)}
          />
        ))}
      </main>

      {/*  sección de Noticias del Cine */}
      <section
        style={{
          maxWidth: "1000px",
          margin: "60px auto 40px",
          padding: "20px"
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "40px", fontSize: "2.2rem", color: "#ffffff", fontWeight: "800" }}>
          Noticias del Cine
        </h2>
        
        <div style={{ display: "grid", gap: "20px" }}>
          {noticias.map((noticia) => (
            <article
              key={noticia.id}
              style={{
                borderLeft: "4px solid var(--accent-blue)",
                padding: "24px",
                borderRadius: "12px",
                background: "var(--card-bg)",
                backdropFilter: "blur(5px)",
                border: "1px solid var(--card-border)",
                boxShadow: "0 10px 20px rgba(0,0,0,0.2)"
              }}
            >
              <h3 style={{ margin: "0 0 10px 0", color: "#e8e8e8", fontSize: "1.3rem" }}>{noticia.title}</h3>
              <p style={{ margin: "0", color: "#a0a0a0", lineHeight: "1.5" }}>{noticia.body}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

export default Home