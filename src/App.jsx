import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { AppRouter } from "./routes/AppRouter"

function App() {
  return (
    <div style={{ minHeight: "100vh" }}>
      {/* Header siempre visible */}
      <Header />

      {/* Configuración de rutas */}
      <AppRouter />

      {/* Footer siempre visible al final */}
      <Footer />
    </div>
  )
}

export default App