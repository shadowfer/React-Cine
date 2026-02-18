import '../App.css';

// ========================================
// INSTRUCCIONES: Coloca tus imágenes en src/assets/
// y asegúrate de que los nombres coincidan con estos imports.
// ========================================
import refrescoImg from '../assets/refresco.jpg';
import comboImg from '../assets/combo.jpg';
import cafeImg from '../assets/cafe.jpg';

import hotdogImg from '../assets/hotdog.jpg';
import nachosImg from '../assets/nachos.jpg';
import pizzaImg from '../assets/pizza.jpg';

import chocolateImg from '../assets/chocolate.jpg';
import gomitasImg from '../assets/gomitas.jpg';
import muffinImg from '../assets/muffin.jpg';

// Íconos para títulos de sección
import bebidasIcon from '../assets/icon-bebidas.jpg';
import comestiblesIcon from '../assets/icon-comestibles.jpg';
import snacksIcon from '../assets/icon-snacks.jpg';

const bebidas = [
  { id: 1, imagen: refrescoImg, nombre: 'Refresco Grande', desc: 'Coca-Cola, Sprite o Fanta de 32oz', precio: '$65' },
  { id: 2, imagen: comboImg, nombre: 'Combo Palomitas + Refresco', desc: 'Palomitas grandes + refresco de 32oz', precio: '$120' },
  { id: 3, imagen: cafeImg, nombre: 'Café Americano', desc: 'Café recién preparado 12oz', precio: '$45' },
];

const comestibles = [
  { id: 4, imagen: hotdogImg, nombre: 'Hot Dog Clásico', desc: 'Salchicha con pan, cátsup y mostaza', precio: '$55' },
  { id: 5, imagen: nachosImg, nombre: 'Nachos con Queso', desc: 'Totopos crujientes con queso cheddar', precio: '$70' },
  { id: 6, imagen: pizzaImg, nombre: 'Pizza Personal', desc: 'Pizza de pepperoni recién horneada', precio: '$85' },
];

const snacks = [
  { id: 7, imagen: chocolateImg, nombre: 'Chocolate', desc: 'Barra de chocolate con leche', precio: '$35' },
  { id: 8, imagen: gomitasImg, nombre: 'Gomitas Surtidas', desc: 'Bolsa de gomitas de sabores', precio: '$30' },
  { id: 9, imagen: muffinImg, nombre: 'Muffin de Arándano', desc: 'Muffin horneado con arándanos frescos', precio: '$40' },
];

function SeccionAlimentos({ titulo, icono, productos }) {
  return (
    <section>
      <h2 className="section-title">
        <img src={icono} alt={titulo} className="section-title-icon" />
        {titulo}
      </h2>
      <div className="main-container">
        {productos.map((prod) => (
          <div className="card-producto" key={prod.id}>
            <img src={prod.imagen} alt={prod.nombre} className="producto-img" />
            <h3 className="producto-nombre">{prod.nombre}</h3>
            <p className="producto-desc">{prod.desc}</p>
            <span className="producto-precio">{prod.precio}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Alimentos() {
  return (
    <main>
      <SeccionAlimentos titulo="Bebidas" icono={bebidasIcon} productos={bebidas} />
      <SeccionAlimentos titulo="Comestibles" icono={comestiblesIcon} productos={comestibles} />
      <SeccionAlimentos titulo="Snacks" icono={snacksIcon} productos={snacks} />
    </main>
  );
}
