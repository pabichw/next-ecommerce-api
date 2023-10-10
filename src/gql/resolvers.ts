
import { product } from './Query/product';
import { category } from './Query/category';
import { collection } from './Query/collection';
import { cart } from './Query/cart';
import { order } from './Query/order'
import { insertReview, upsertProduct } from './Mutation/product';
import { addToCart, updateOrderItemQty, updateOrderStatus, updateOrderOwnership } from './Mutation/cart';

const resolvers = {
  Query: {
    product,
    category,
    collection,
    cart,
    order
  },
  Mutation: {
    insertReview,
    upsertProduct,
    addToCart,
    updateOrderItemQty,
    updateOrderStatus,
    updateOrderOwnership,
  }
};

export default resolvers
