import axios from "axios";
import type { Pedido } from "../types";

const API_URL = "http://localhost:3000"; // ajuste para a URL da sua API

export const getPedidos = async (): Promise<Pedido[]> => {
  const res = await axios.get(`${API_URL}/pedidos`);
  return res.data;
};

export const getPedidoById = async (id: number): Promise<Pedido> => {
  const res = await axios.get(`${API_URL}/pedidos/${id}`);
  return res.data;
};

export const createPedido = async (pedido: Omit<Pedido, "id">): Promise<Pedido> => {
  const res = await axios.post(`${API_URL}/pedidos`, pedido);
  return res.data;
};

export const updatePedido = async (id: number, pedido: Partial<Pedido>): Promise<Pedido> => {
  const res = await axios.put(`${API_URL}/pedidos/${id}`, pedido);
  return res.data;
};

export const deletePedido = async (id: number): Promise<void> => {
  await axios.delete(`${API_URL}/pedidos/${id}`);
};
