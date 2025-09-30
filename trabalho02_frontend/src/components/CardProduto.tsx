import type { Produto } from "../types";

interface CardProdutoProps {
  produto: Produto;
  onEdit: (produto: Produto) => void;
  onDelete: (id: number) => void;
}

export default function CardProduto({ produto, onEdit, onDelete }: CardProdutoProps) {
  return (
    <div className="border p-4 rounded shadow hover:shadow-lg transition flex justify-between items-center">
      <div>
        <h2 className="font-bold text-lg">{produto.nome}</h2>
        <p>Preço: R$ {produto.preco}</p>
        <p>Marca ID: {produto.marca_id}</p>
      </div>
      <div className="flex gap-2">
        <button onClick={() => onEdit(produto)} className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
          Edit
        </button>
        <button onClick={() => onDelete(produto.id)} className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
          Delete
        </button>
      </div>
    </div>
  );
}
