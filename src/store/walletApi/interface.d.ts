interface ITransaction {
  id: string;
  from_wallet: string;
  type: string;
  amount: number;
  currency: string;
  timestamp: string;
}

interface IAllTransaction {
  transactions: ITransaction[];
}

interface IBalance {
  balance: number;
  currency: string;
}
