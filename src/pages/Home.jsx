import { useState, useEffect } from "react"
import { MovieCard } from "../components/MovieCard"
import peliculas from "../detalles.json"
import '../App.css'; // Aseguramos importar los estilos

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

function Home({ verDetalle }) {
  // Estado para guardar las noticias
  const [noticias, setNoticias] = useState([])
  
  // Estado para el índice del carrusel
  const [indiceActual, setIndiceActual] = useState(0)

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

  // useEffect para el Auto-Play del carrusel
  useEffect(() => {
    const intervalo = setInterval(() => {
      siguienteImagen()
    }, 4000) // Cambia cada 4 segundos

    return () => clearInterval(intervalo) // Limpia el intervalo al desmontar
  }, [indiceActual]) // Se ejecuta cuando cambia indiceActual

  // Funciones de control del carrusel
  const siguienteImagen = () => {
    setIndiceActual((previo) => (previo === peliculas.length - 1 ? 0 : previo + 1))
  }

  const anteriorImagen = () => {
    setIndiceActual((previo) => (previo === 0 ? peliculas.length - 1 : previo - 1))
  }

  return (
    <>
      <section style={{ textAlign: "center", marginBottom: "30px" }}>
        <h2 style={{ color: "#C6A664", fontSize: "2rem" }}>Estrenos Exclusivos</h2>
      </section>

      {/* Contenedor del Carrusel */}
      <div className="carousel-container">
        
        {/* Botón Anterior */}
        <button onClick={anteriorImagen} className="carousel-btn prev-btn">❮</button>

        {/* Cinta de películas que se mueve */}
        <div 
          className="carousel-track"
          style={{ transform: `translateX(-${indiceActual * 100}%)` }}
        >
          {peliculas.map((pelicula) => (
            <div key={pelicula.id} className="carousel-slide">
              
              {/* CAPA DE FONDO (Blurred) */}
              <div 
                className="carousel-bg-blur"
                style={{ backgroundImage: `url(${imagenes[pelicula.imagen]})` }}
              ></div>

              {/* CONTENIDO PRINCIPAL (Poster + Info) */}
              <div className="carousel-content">
                <img 
                  src={imagenes[pelicula.imagen]} 
                  alt={pelicula.titulo} 
                  className="carousel-poster"
                />
                
                <div className="carousel-info">
                  <h3>{pelicula.titulo}</h3>
                   <p className="carousel-desc-corta">{pelicula.descripcion.substring(0, 100)}...</p>
                  <button 
                    className="btn-amarillo" 
                    onClick={() => verDetalle({ ...pelicula, imagen: imagenes[pelicula.imagen] })}
                  >
                    Ver Detalles
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Botón Siguiente */}
        <button onClick={siguienteImagen} className="carousel-btn next-btn">❯</button>
      </div>

      {/* Indicadores (puntos abajo) */}
      <div className="carousel-indicators">
        {peliculas.map((_, idx) => (
          <span 
            key={idx} 
            className={`indicator ${indiceActual === idx ? "active" : ""}`}
            onClick={() => setIndiceActual(idx)}
          ></span>
        ))}
      </div>


      {/* Resto de peliculas en grilla */}
      <section style={{ textAlign: "center", marginBottom: "30px", marginTop: "60px" }}>
        <h2 style={{ color: "#C6A664", fontSize: "2rem" }}>Cartelera completa</h2>
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
            onVerDetalle={() => verDetalle({ ...pelicula, imagen: imagenes[pelicula.imagen] })}
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
        <h2 style={{ textAlign: "center", marginBottom: "30px", fontSize: "2rem", color: "#C6A664", borderBottom: "2px solid #C6A664", paddingBottom: "10px", display: "inline-block" }}>
          Noticias del Cine
        </h2>
        
        <div style={{ display: "grid", gap: "20px" }}>
          {noticias.map((noticia) => (
            <article
              key={noticia.id}
              style={{
                borderLeft: "4px solid #C6A664",
                padding: "20px",
                borderRadius: "0 8px 8px 0",
                backgroundColor: "#1E1E3F",
                boxShadow: "0 4px 6px rgba(0,0,0,0.3)"
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