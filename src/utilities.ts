import { REPOSITORY } from "./db-data";
import { IProduct, IUser } from "./interfaces";

/**
 * Assuming that toUser, fromUser and product
 * all exists in the database, belonging to a user(s)
 */
export function doOneOptimisticTransaction(
  toUser: Partial<IUser>,
  fromUser: Partial<IUser>,
  product: Partial<IProduct>
) {}

export function isUserInDatabase(inputUser: Partial<IUser>) {
  for (const user of REPOSITORY.users) {
    if (user.username === inputUser.username && user.role === inputUser.role) {
      return true;
    }
  }
  return false;
}
