import { MovieCard } from '../components/MovieCard';
import '../App.css'; 
import dunaImg from '../assets/duna.jpg';
import pandaImg from '../assets/kunfu.jpg'; 

export function Home({ cambiarVista }) {
  return (
    <main className="main-container">
      <MovieCard 
        title="Duna: Parte Dos" 
        image={dunaImg} 
        onVerDetalle={() => cambiarVista('detalle')}
      />
      <MovieCard 
        title="Kung Fu Panda 4" 
        image={pandaImg} 
        onVerDetalle={() => cambiarVista('detalle')}
      />
    </main>
  );
}