export interface IUser {
  username: string;
  password?: string;
  role: "buyer" | "seller";
  hasProducts?: ReadonlyArray<IProduct>;
  transactions?: ReadonlyArray<ITransaction>;
}

export interface IProduct {
  name: string;
  price: number;
  category: "laptop" | "phone";
}

export interface IRepository {
  users: ReadonlyArray<IUser>;
}

export interface ITransaction {
  type: "+" | "-";
  amount: number;
}
