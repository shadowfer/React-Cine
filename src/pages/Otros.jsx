import '../App.css';

// ========================================
// INSTRUCCIONES: Coloca tus imágenes en src/assets/
// y asegúrate de que los nombres coincidan con estos imports.
// ========================================
import promo2x1Img from '../assets/promo-2x1.jpg';
import comboFamiliarImg from '../assets/combo-familiar.jpg';
import nocheEstrenoImg from '../assets/noche-estreno.jpg';

import goldImg from '../assets/membresia-gold.jpg';
import platinumImg from '../assets/membresia-platinum.jpg';
import estudianteImg from '../assets/plan-estudiante.jpg';

import avengersImg from '../assets/preventa-avengers.jpg';
import harryImg from '../assets/preventa-harry.jpg';
import interstellarImg from '../assets/preventa-interstellar.jpg';

// Íconos para títulos de sección
import promocionesIcon from '../assets/icon-promociones.jpg';
import membresiasIcon from '../assets/icon-membresias.jpg';
import preventasIcon from '../assets/icon-preventas.jpg';

const promociones = [
  { id: 1, imagen: promo2x1Img, titulo: '2x1 en Boletos', desc: 'Todos los martes, lleva dos boletos por el precio de uno en cualquier función.', badge: '¡Oferta!', boton: 'Ver funciones' },
  { id: 2, imagen: comboFamiliarImg, titulo: 'Combo Familiar', desc: '4 boletos + palomitas gigantes + 4 refrescos por un precio especial.', badge: 'Popular', boton: 'Comprar combo' },
  { id: 3, imagen: nocheEstrenoImg, titulo: 'Noche de Estreno', desc: 'Accede a preestrenos exclusivos con descuento del 20%.', badge: 'Exclusivo', boton: 'Reservar' },
];

const membresias = [
  { id: 4, imagen: goldImg, titulo: 'Membresía Gold', desc: 'Acceso ilimitado a funciones regulares, 10% de descuento en alimentos.', boton: 'Suscribirse' },
  { id: 5, imagen: platinumImg, titulo: 'Membresía Platinum', desc: 'Todo lo de Gold + salas VIP, estrenos anticipados y palomitas gratis.', boton: 'Suscribirse' },
  { id: 6, imagen: estudianteImg, titulo: 'Plan Estudiante', desc: '50% de descuento en funciones de lunes a jueves con credencial vigente.', boton: 'Verificar' },
];

const preventas = [
  { id: 7, imagen: avengersImg, titulo: 'Avengers: Secret Wars', desc: 'Preventa disponible a partir del 15 de marzo. ¡Asegura tu lugar!', boton: 'Pre-comprar' },
  { id: 8, imagen: harryImg, titulo: 'Harry Potter: Reboot', desc: 'El regreso del mundo mágico. Preventa exclusiva para miembros.', boton: 'Pre-comprar' },
  { id: 9, imagen: interstellarImg, titulo: 'Interstellar 2', desc: 'La secuela más esperada. Funciones IMAX disponibles en preventa.', boton: 'Pre-comprar' },
];

function SeccionOtros({ titulo, icono, items }) {
  return (
    <section>
      <h2 className="section-title">
        <img src={icono} alt={titulo} className="section-title-icon" />
        {titulo}
      </h2>
      <div className="main-container">
        {items.map((item) => (
          <div className="card-producto" key={item.id}>
            <img src={item.imagen} alt={item.titulo} className="producto-img" />
            {item.badge && <span className="badge-promo">{item.badge}</span>}
            <h3 className="producto-nombre">{item.titulo}</h3>
            <p className="producto-desc">{item.desc}</p>
            <button className="btn-amarillo">{item.boton}</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Otros() {
  return (
    <main>
      <SeccionOtros titulo="Promociones" icono={promocionesIcon} items={promociones} />
      <SeccionOtros titulo="Membresías" icono={membresiasIcon} items={membresias} />
      <SeccionOtros titulo="Preventas" icono={preventasIcon} items={preventas} />
    </main>
  );
}
