import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import '../App.css';

export function SwiperCarousel({ peliculas, imagenes, onVerDetalle }) {
  return (
    <div className="swiper-section redesign">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="carousel-container-new"
      >
        {peliculas.map((pelicula) => (
          <SwiperSlide key={pelicula.id}>
            <div className="carousel-slide-new">
              {/* CONTENIDO PRINCIPAL (Info + Poster) */}
              <div className="carousel-content-new">
                <div className="carousel-info-new">
                  <h2 className="carousel-title-new">{pelicula.titulo}</h2>
                  <p className="carousel-desc-new">
                    {pelicula.descripcion.substring(0, 150)}...
                  </p>
                  <button
                    className="btn-comprar-new"
                    onClick={() => onVerDetalle(pelicula.id)}
                  >
                    Comprar boletos
                  </button>
                </div>

                <div className="carousel-poster-container-new">
                  <img
                    src={imagenes[pelicula.imagen]}
                    alt={pelicula.titulo}
                    className="carousel-poster-new"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
