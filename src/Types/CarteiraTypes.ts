import Entrada from './TransactionType';
import Saida from './SaidaType';

interface CarteiraTypes {
  saldo: number;
  entradas: Entrada[];
  saidas: Saida[];
}

export default CarteiraTypes;
