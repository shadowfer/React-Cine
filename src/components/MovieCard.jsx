import { useState } from 'react';
import { Button } from './Button';
import '../App.css';

export function MovieCard({ title, image, onVerDetalle }) {
  // Estado para manejar si es favorita o no
  const [esFavorito, setEsFavorito] = useState(false);

  const toggleFavorito = () => {
    setEsFavorito(!esFavorito);
  };

  return (
    <div className="card">
      <div className="card-image-container">
        <img src={image} alt={title} className="card-img" />
        
        {/* Botón de Corazón (Favorito) */}
        <button 
          className={`heart-btn ${esFavorito ? 'active' : ''}`} 
          onClick={toggleFavorito}
          title={esFavorito ? "Quitar de favoritos" : "Agregar a favoritos"}
        >
          {esFavorito ? '❤️' : '🤍'}
        </button>
      </div>

      <h3>{title}</h3>
      <Button text="Ver horarios" onClick={onVerDetalle} />
    </div>
  );
}