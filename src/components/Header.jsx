import '../App.css'; 

export function Header({ cambiarVista }) {
  return (
    <header className="header">
      <h1>CINE!!</h1>
      <nav className="nav-container">
        <span className="nav-item" onClick={() => cambiarVista('home')}>
          Inicio
        </span>
        <span className="nav-item" onClick={() => cambiarVista('cartelera')}>
          Cartelera
        </span>
        <span className="nav-item" onClick={() => cambiarVista('alimentos')}>
          Alimentos
        </span>
        <span className="nav-item" onClick={() => cambiarVista('otros')}>
          Otros
        </span>
      </nav>
    </header>
  );
}