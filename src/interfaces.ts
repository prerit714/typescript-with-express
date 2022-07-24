export interface IUser {
  username: string;
  password?: string;
  role: "buyer" | "seller";
  cart?: ReadonlyArray<IProduct>;
  wishList?: ReadonlyArray<IProduct>;
  transactions?: ReadonlyArray<ITransaction>;
}

export interface IProduct {
  name: string;
  price: number;
  category: "laptop" | "phone";
  soldTo?: IUser;
  soldBy?: IUser;
}

export interface IRepository {
  users: ReadonlyArray<IUser>;
  products: ReadonlyArray<IProduct>;
}

export interface ITransaction {
  type: "+" | "-";
  amount: number;
}
