import { useEffect, useState } from "react";
import api from "../api/api";
import type { Cliente } from "../types";

export default function Clientes() {
  const [clientes, setClientes] = useState<Cliente[]>([]);

  useEffect(() => {
    api.get<Cliente[]>("/clientes")
       .then(res => setClientes(res.data))
       .catch(err => console.log(err));
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Clientes</h1>
      <ul>
        {clientes.map(c => (
          <li key={c.id}>
            {c.nome} - {c.email} - {c.telefone}
          </li>
        ))}
      </ul>
    </div>
  );
}