/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
import type { Resolvers } from "./types.generated";
import { Category } from "./schema/resolvers/Category";
import { Collection } from "./schema/resolvers/Collection";
import { Product } from "./schema/resolvers/Product";
import { category as Query_category } from "./schema/resolvers/Query/category";
import { collection as Query_collection } from "./schema/resolvers/Query/collection";
import { product as Query_product } from "./schema/resolvers/Query/product";
export const resolvers: Resolvers = {
  Query: {
    category: Query_category,
    collection: Query_collection,
    product: Query_product,
  },

  Category: Category,
  Collection: Collection,
  Product: Product,
};
