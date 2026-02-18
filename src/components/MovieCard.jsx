import { Button } from './Button';
import '../App.css';

export function MovieCard({ title, image, onVerDetalle }) {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-img" />
      <h3>{title}</h3>
      <Button text="Ver horarios" onClick={onVerDetalle} />
    </div>
  );
}