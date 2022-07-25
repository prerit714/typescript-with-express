import { IRepository } from "./interfaces";

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
      hasProducts: [
        {
          name: "asus zenbook 13",
          category: "laptop",
          price: 75000,
        },
        {
          name: "hp victus",
          category: "laptop",
          price: 85000,
        },
        {
          name: "asus rog 14",
          category: "laptop",
          price: 100000,
        },
        {
          name: "nokia 1",
          category: "phone",
          price: 5000,
        },
      ],
    },
    {
      username: "annie",
      password: "annie714",
      role: "seller",
      hasProducts: [
        {
          name: "nokia 1",
          category: "phone",
          price: 5500,
        },
        {
          name: "fujitsu samurai 7000",
          category: "laptop",
          price: 77000,
        },
        {
          name: "msi alienware",
          category: "laptop",
          price: 99999,
        },
      ],
    },
    {
      username: "armin",
      password: "armin714",
      role: "buyer",
    },
  ],
};
