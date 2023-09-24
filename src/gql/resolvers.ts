
import { product } from './Query/product';
import { category } from './Query/category';

const resolvers = {
  Query: {
    product,
    category,
  },
};

export default resolvers
