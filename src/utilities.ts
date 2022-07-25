import { REPOSITORY } from "./db-data";
import { IProduct, IUser } from "./interfaces";

/**
 * Assuming that toUser, fromUser and product
 * all exists in the database, belonging to a user(s)
 */
export function doOneOptimisticTransaction(
  toUser: Partial<IUser>,
  fromUser: Partial<IUser>,
  inputProduct: IProduct
) {
  const newToUserHasProducts =
    toUser.hasProducts === undefined ? [] : [...toUser.hasProducts];
  const newFromUserHasProducts =
    fromUser.hasProducts === undefined ? [] : [...fromUser.hasProducts];
  if (newFromUserHasProducts.length === 0) {
    throw new Error("fromUser has no products!");
  } else {
    const copyOfNewFromUserHasProducts: Array<IProduct> = [];

    newFromUserHasProducts.forEach((product) => {
      if (inputProduct.name !== product.name) {
        copyOfNewFromUserHasProducts.push(inputProduct);
      }
    });
    newToUserHasProducts.push(inputProduct);

    // Create readonly arrays of the above two
    const newReadonlyFromUserHasProducts: ReadonlyArray<IProduct> = [
      ...copyOfNewFromUserHasProducts,
    ];
    const newReadonlyToUserHasProducts: ReadonlyArray<IProduct> = [
      ...newFromUserHasProducts,
    ];

    // Update the REPOSITORY object
    for (const repoUser of REPOSITORY.users) {
      if (repoUser.username === toUser.username) {
        repoUser.hasProducts = newReadonlyToUserHasProducts;
      }
      if (repoUser.username === fromUser.username) {
        repoUser.hasProducts = newReadonlyFromUserHasProducts;
      }
    }
  }
}
