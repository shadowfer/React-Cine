import '../App.css';

export function Button({ text, onClick }) {
  return (
    <button className="btn-amarillo" onClick={onClick}>
      {text}
    </button>
  );
}