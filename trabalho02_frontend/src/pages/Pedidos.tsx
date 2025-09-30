import { useEffect, useState } from "react";
import api from "../api/api";
import type { Pedido } from "../types";
import CardPedido from "../components/CardPedido";

export default function Pedidos() {
  const [pedidos, setPedidos] = useState<Pedido[]>([]);

  useEffect(() => {
    api.get<Pedido[]>("/pedidos")
       .then(res => setPedidos(res.data))
       .catch(err => console.log(err));
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      {pedidos.map(p => <CardPedido key={p.id} pedido={p} />)}
    </div>
  );
}