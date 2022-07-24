export interface IUser {
  username: string;
  password?: string;
  role: "buyer" | "seller";
  cart?: ReadonlyArray<IProduct>;
  wishList?: ReadonlyArray<IProduct>;
  transactions?: ReadonlyArray<ITransaction>;
}

export interface IProduct {
  id: string;
  name: string;
  price: number;
  soldTo?: IUser;
  soldBy?: IUser;
}

export interface IRepository {
  products: ReadonlyArray<IProduct>;
}

export interface ITransaction {
  type: "+" | "-";
  amount: number;
}
