import axios from "axios";
import type { Cliente } from "../types";

const API_URL = "http://localhost:3000"; // ajuste para a URL da sua API

export const getClientes = async (): Promise<Cliente[]> => {
  const res = await axios.get(`${API_URL}/clientes`);
  return res.data;
};

export const getClienteById = async (id: number): Promise<Cliente> => {
  const res = await axios.get(`${API_URL}/clientes/${id}`);
  return res.data;
};

export const createCliente = async (cliente: Omit<Cliente, "id">): Promise<Cliente> => {
  const res = await axios.post(`${API_URL}/clientes`, cliente);
  return res.data;
};

export const updateCliente = async (id: number, cliente: Partial<Cliente>): Promise<Cliente> => {
  const res = await axios.put(`${API_URL}/clientes/${id}`, cliente);
  return res.data;
};

export const deleteCliente = async (id: number): Promise<void> => {
  await axios.delete(`${API_URL}/clientes/${id}`);
};
