
import { product } from './Query/product';
import { category } from './Query/category';
import { collection } from './Query/collection';
import { cart } from './Query/cart';
import { insertReview, upsertProduct } from './Mutation/product';
import { addToCart, updateOrderItemQty } from './Mutation/cart';

const resolvers = {
  Query: {
    product,
    category,
    collection,
    cart,
  },
  Mutation: {
    insertReview,
    upsertProduct,
    addToCart,
    updateOrderItemQty
  }
};

export default resolvers
