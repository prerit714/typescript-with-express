import { IProduct, IRepository, IUser } from "./interfaces";

export const USERS: Array<IUser> = [
  {
    username: "eren",
    password: "FooBar@714",
    role: "buyer",
  },
  {
    username: "mikasa",
    password: "FooBar@714",
    role: "buyer",
  },
  {
    username: "armin",
    password: "FooBar@714",
    role: "seller",
  },
  {
    username: "annie",
    password: "FooBar@714",
    role: "seller",
  },
];

export const REPOSITORY: IRepository = {
  users: [
    {
      username: "eren",
      password: "eren714",
      role: "buyer",
    },
    {
      username: "mikasa",
      password: "mikasa714",
      role: "seller",
    },
    {
      username: "annie",
      password: "annie714",
      role: "seller",
    },
    {
      username: "armin",
      password: "armin714",
      role: "buyer",
    },
  ],
  products: [
    {
      name: "asus zenbook",
      category: "laptop",
      price: 75000,
      soldBy: {
        username: "mikasa",
        role: "seller",
      },
    },
    {
      name: "hp victus",
      category: "laptop",
      price: 65000,
      soldBy: {
        username: "mikasa",
        role: "seller",
      },
    },
    {
      name: "fujitsu samurai",
      category: "laptop",
      price: 100000,
      soldBy: {
        username: "annie",
        role: "seller",
      },
    },
    {
      name: "samsung m13",
      category: "phone",
      price: 13000,
      soldBy: {
        username: "annie",
        role: "seller",
      },
    },
    {
      name: "motorola g",
      category: "phone",
      price: 15000,
      soldBy: {
        username: "mikasa",
        role: "seller",
      },
    },
    {
      name: "asus rog",
      category: "phone",
      price: 25000,
      soldBy: {
        username: "mikasa",
        role: "seller",
      },
    },
    {
      name: "dell latitude",
      category: "laptop",
      price: 150000,
      soldBy: {
        username: "annie",
        role: "seller",
      },
    },
    {
      name: "apple iphone",
      category: "phone",
      price: 76000,
      soldBy: {
        username: "mikasa",
        role: "seller",
      },
    },
    {
      name: "asus tuff",
      category: "laptop",
      price: 100000,
      soldBy: {
        username: "annie",
        role: "seller",
      },
    },
    {
      name: "nokia 1",
      category: "phone",
      price: 5000,
      soldBy: {
        username: "mikasa",
        role: "seller",
      },
    },
    {
      name: "nokia 1",
      category: "phone",
      price: 5500,
      soldBy: {
        username: "annie",
        role: "seller",
      },
    },
  ],
};
