import { Product } from "./classes";

export interface IUser {
  username: string;
  password: string;
  role: "buyer" | "seller";
}

export interface IRepository {
  products: Array<Product>;
}
