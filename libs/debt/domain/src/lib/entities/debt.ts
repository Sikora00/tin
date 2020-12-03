import {Debtor} from "./debtor";
import {Payment} from "./payment";

export interface Debt {
  id: number;
  title: string;
  description: string;
  summaryAmount: number;
  debtors: Debtor[];
  payments: Payment[]
}
