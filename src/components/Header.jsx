import { NavLink } from 'react-router-dom';
import '../App.css'; 

export function Header() {
  return (
    <header className="header">
      <h1>CINE!!</h1>
      <nav className="nav-container">
        <NavLink to="/" className="nav-item">
          Inicio
        </NavLink>
        <NavLink to="/cartelera" className="nav-item">
          Cartelera
        </NavLink>
        <NavLink to="/alimentos" className="nav-item">
          Alimentos
        </NavLink>
        <NavLink to="/otros" className="nav-item">
          Otros
        </NavLink>
      </nav>
    </header>
  );
}