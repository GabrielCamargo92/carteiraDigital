interface TransactionType {
  id: number;
  tipo: string;
  valor?: number;
  data?: string;
  remetente?: string;
  destinatario?: string;
}

// interface EntradaType {
//   id: number;
//   valor?: number;
//   Data?: string;
//   Remetente: string;
// }
export default TransactionType;
