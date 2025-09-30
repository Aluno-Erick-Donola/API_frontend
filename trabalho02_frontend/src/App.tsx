import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Produtos from "./pages/Produtos";
import Pedidos from "./pages/Pedidos";
import Clientes from "./pages/Clientes";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  return (
    <Router>
      <Header />
      <nav style={{ padding: "1rem", background: "#f3f4f6" }}>
        <Link to="/" style={{ marginRight: "1rem" }}>Home</Link>
        <Link to="/produtos" style={{ marginRight: "1rem" }}>Produtos</Link>
        <Link to="/pedidos" style={{ marginRight: "1rem" }}>Pedidos</Link>
        <Link to="/clientes">Clientes</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/pedidos" element={<Pedidos />} />
        <Route path="/clientes" element={<Clientes />} />
      </Routes>
      <Footer />
    </Router>
  );
}
