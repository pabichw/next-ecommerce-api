import gql from 'graphql-tag';

const typeDefs = gql`
  type Product {
    id: ID!
    name: String!
    slug: String!
    description: String!
    price: Int!
    image: String!
    category: [Category]
    collection: [Collection]
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

  input Pagination {
    page: Int!
    pageSize: Int!
  }

  type Query {
    product(id: ID, pagination: Pagination): [Product]!
    category(slug: String, pagination: Pagination): [Category]!
    collection(name: String): [Collection]!
  }
`

export default typeDefs
