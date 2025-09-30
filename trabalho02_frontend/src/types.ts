export interface Produto {
  id: number;
  nome: string;
  preco: number;
  marca_id: number;
}

export interface Cliente {
  id: number;
  nome: string;
  email: string;
  telefone: string;
}

export interface Pedido {
  id: number;
  cliente_id: number;
  data: string;
  itens: {
    produto_id: number;
    quantidade: number;
    preco_unitario: number;
  }[];
}
