import gql from 'graphql-tag';

const typeDefs = gql`
  type Product {
    id: ID!
    name: String!
    slug: String!
    description: String!
    price: Int!
    image: String!
    configurableAttributes: String
    category: [Category]
    collection: [Collection]
    relatedProduct: [Product]
  }

  type Category {
    id: ID!
    name: String!
    slug: String!
    product: [Product]
  }

  type Collection {
    id: ID!
    name: String!
    product: [Product]
  }

  input PaginationInput {
    page: Int!
    pageSize: Int!
  }

  input ProductUpsertInput {
    name: String
    slug: String
    description: String
    price: Int
    image: String
  }

  type Pagination {
    pages: Int!
    total: Int!
  }

  type CategoryWithPagination {
    pagination: Pagination
    data: [Category!]!
  }
  
  type Query {
    product(id: ID, name: String, pagination: PaginationInput): [Product]!
    category(slug: String, pagination: PaginationInput): CategoryWithPagination
    collection(name: String): [Collection]!
  }

  type Mutation {
    upsertProduct(id: ID, product: ProductUpsertInput!): Product
  }
`

export default typeDefs
