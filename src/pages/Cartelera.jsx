import { MovieCard } from '../components/MovieCard';
import '../App.css';
import intensaImg from '../assets/intensamente.jpg';
import zooImg from '../assets/zootopia.jpg';
import avatarImg from '../assets/avatar.jpg';
import pandaImg from '../assets/kunfu.jpg';
import dunaImg from '../assets/duna.jpg';


export function Cartelera({ cambiarVista }) {
  return (
    <main className="main-container">
      <MovieCard 
        title="Intensamente 2" 
        image={intensaImg} 
        onVerDetalle={() => cambiarVista('detalle')}
      />
      <MovieCard 
        title="Zootopia 2" 
        image={zooImg} 
        onVerDetalle={() => cambiarVista('detalle')}
      />
      <MovieCard 
        title="Avatar" 
        image={avatarImg} 
        onVerDetalle={() => cambiarVista('detalle')}
      />
            <MovieCard 
        title="Kung Fu Panda 4" 
        image={pandaImg} 
        onVerDetalle={() => cambiarVista('detalle')}
      />
            <MovieCard 
        title="Dune: Parte Dos" 
        image={dunaImg} 
        onVerDetalle={() => cambiarVista('detalle')}
      />
    </main>
  );
}