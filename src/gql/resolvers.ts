
import { product } from './Query/product';
import { category } from './Query/category';
import { collection } from './Query/collection';
import { upsertProduct } from './Mutation/product';
const resolvers = {
  Query: {
    product,
    category,
    collection,
  },
  Mutation: {
    upsertProduct
  }
};

export default resolvers
