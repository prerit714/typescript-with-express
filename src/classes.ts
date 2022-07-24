export class Product {
  private id: string;
  private name: string;
  private price: number;
  private category: "sports" | "electronics";
  private soldBySellerWithUsername: string;
  private soldToBuyerWithUsername: string | null = null;

  constructor(
    name: string,
    price: number,
    category: "sports" | "electronics",
    soldBySellerWithUsername: string
  ) {
    this.id = this.randomIdGenerator();
    this.name = name;
    this.price = price;
    this.category = category;
    this.soldBySellerWithUsername = soldBySellerWithUsername;
  }

  private randomIdGenerator() {
    let ID = "";
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    for (var i = 0; i < 12; i++) {
      ID += characters.charAt(Math.floor(Math.random() * 36));
    }
    return ID;
  }

  public setPrice(price: number) {
    this.price = price;
  }

  public getPrice() {
    return this.price;
  }

  public getName() {
    return this.name;
  }

  public getId() {
    return this.id;
  }

  public getCategory() {
    return this.category;
  }

  public getSoldBySellerWithUsername() {
    this.soldBySellerWithUsername;
  }

  public setSoldToBuyerWithUsername(buyerUsername: string) {
    this.soldToBuyerWithUsername = buyerUsername;
  }

  public getSoldToBuyerWithUsername() {
    return this.soldToBuyerWithUsername;
  }
}
