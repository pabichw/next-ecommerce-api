
import { product } from './Query/product';
import { category } from './Query/category';
import { collection } from './Query/collection';

const resolvers = {
  Query: {
    product,
    category,
    collection,
  },
};

export default resolvers
