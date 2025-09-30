import { api } from "./api";

export const getProdutos = async () => {
  const res = await api.get("/produtos");
  return res.data;
};

/*************  ✨ Windsurf Command ⭐  *************/
/**
 * Cria um novo produto
 * @param produto - objeto com os dados do produto
 * @returns Promise que resolve com o produto criado
 */
/*******  0ba41dd6-a4e5-4238-9100-d85e9ff799ed  *******/
export const createProduto = async (produto: {
  nome: string;
  preco: number;
  marcaId: number;
}) => {
  const res = await api.post("/produtos", produto);
  return res.data;
};

export const updateProduto = async (
  id: number,
  produto: { nome: string; preco: number; marcaId: number }
) => {
  const res = await api.put(`/produtos/${id}`, produto);
  return res.data;
};

export const deleteProduto = async (id: number) => {
  await api.delete(`/produtos/${id}`);
};