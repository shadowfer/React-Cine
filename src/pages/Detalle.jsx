import { Button } from '../components/Button';
import '../App.css'; 

// Importa la imagen que quieras usar de ejemplo
import dunaImg from '../assets/duna.jpg';

export function Detalle({ cambiarVista }) {
  return (
    // Reutilizamos el contenedor principal para centrar todo
    <main className="main-container">
      
      <div className="card-detalle">
        
        <h2 className="titulo-detalle">Duna: Parte Dos</h2>
        
        <img src={dunaImg} alt="Poster Duna" className="img-detalle" />
        
        <div className="sinopsis-container">
          <h3 className="subtitulo-sinopsis">SINOPSIS</h3>
          <p className="texto-sinopsis">
            Paul Atreides se une a Chani y a los Fremen mientras busca venganza 
            contra los conspiradores que destruyeron a su familia. Enfrentándose 
            a una elección entre el amor de su vida y el destino del universo conocido, 
            se esfuerza por evitar un futuro terrible que solo él puede prever.
          </p>
        </div>
      </div>

    </main>
  );
}