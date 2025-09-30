import type { Pedido } from "../types";

interface CardPedidoProps {
  pedido: Pedido;
}

export default function CardPedido({ pedido }: CardPedidoProps) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "10px",
        padding: "1rem",
        marginBottom: "1rem",
        background: "#fff",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        transition: "transform 0.2s",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <h2>Pedido #{pedido.id}</h2>
      <p>Cliente: {pedido.cliente_id}</p>
      <p>Data: {pedido.data}</p>
    </div>
  );
}
