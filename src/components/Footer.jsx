import { Link } from 'react-router-dom';
import '../styles/App.css';

export function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-column">
          <h4>Explorar</h4>
          <ul>
            <li><Link to="/cartelera">Cartelera</Link></li>
            <li><Link to="/">Próximos Estrenos</Link></li>
            <li><Link to="/otros">Promociones</Link></li>
          </ul>
        </div>
        
        <div className="footer-column">
          <h4>Soporte / Ayuda</h4>
          <ul>
            <li><Link to="/contacto">Preguntas Frecuentes</Link></li>
            <li><Link to="/contacto">Contacto / Soporte técnico</Link></li>
            <li><Link to="/otros">Facturación</Link></li>
          </ul>
        </div>
        
        <div className="footer-column">
          <h4>Legal</h4>
          <ul>
            <li><Link to="/otros">Términos y Condiciones</Link></li>
            <li><Link to="/otros">Aviso de Privacidad</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>Copyright © 2026 Cinema App. Todos los derechos reservados.</p>
        <div className="social-icons">
          <a href="#" aria-label="Facebook">FB</a>
          <a href="#" aria-label="X (Twitter)">X</a>
          <a href="#" aria-label="Instagram">IG</a>
          <a href="#" aria-label="LinkedIn">IN</a>
        </div>
      </div>
    </footer>
  );
}
