import { useEffect, useState } from "react";
import {
  getProdutos,
  createProduto,
  updateProduto, // ✅ agora existe
  deleteProduto,
} from "../api/produtos";

type Produto = {
  id: number;
  nome: string;
  preco: number;
  marcaId: number;
};

export default function Produtos() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [novoProduto, setNovoProduto] = useState({
    nome: "",
    preco: 0,
    marcaId: 1,
  });

  useEffect(() => {
    fetchProdutos();
  }, []);

  const fetchProdutos = async () => {
    const data = await getProdutos();
    setProdutos(data);
  };

  const handleCreate = async () => {
    await createProduto(novoProduto);
    setNovoProduto({ nome: "", preco: 0, marcaId: 1 });
    fetchProdutos();
  };

  const handleUpdate = async (id: number) => {
    const produtoAtualizado = {
      nome: prompt("Novo nome do produto:") || "Sem nome",
      preco: Number(prompt("Novo preço:") || 0),
      marcaId: 1,
    };
    await updateProduto(id, produtoAtualizado);
    fetchProdutos();
  };

  const handleDelete = async (id: number) => {
    await deleteProduto(id);
    fetchProdutos();
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Gerenciar Produtos</h1>

      {/* Formulário */}
      <div className="flex gap-2 mb-6">
        <input
          type="text"
          placeholder="Nome"
          value={novoProduto.nome}
          onChange={(e) =>
            setNovoProduto({ ...novoProduto, nome: e.target.value })
          }
          className="border p-2 rounded"
        />
        <input
          type="number"
          placeholder="Preço"
          value={novoProduto.preco}
          onChange={(e) =>
            setNovoProduto({ ...novoProduto, preco: Number(e.target.value) })
          }
          className="border p-2 rounded"
        />
        <button
          onClick={handleCreate}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Adicionar
        </button>
      </div>

      {/* Lista */}
      <ul>
        {produtos.map((p) => (
          <li key={p.id} className="flex justify-between items-center mb-2">
            <span>
              {p.nome} - R${p.preco}
            </span>
            <div className="flex gap-2">
              <button
                onClick={() => handleUpdate(p.id)}
                className="bg-blue-500 text-white px-3 py-1 rounded"
              >
                Editar
              </button>
              <button
                onClick={() => handleDelete(p.id)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Excluir
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
