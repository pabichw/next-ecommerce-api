import gql from 'graphql-tag';

const typeDefs = gql`
  type Product {
    id: ID!
    name: String!
    slug: String!
    description: String!
    price: Int!
    category: [Category]
    image: String!
    # collections: [Collection!]!
  }

  type Category {
    id: ID!
    name: String!
    slug: String!
    product: [Product]
  }

  input Pagination {
    page: Int!
    pageSize: Int!
  }

  type Query {
    product(id: ID, pagination: Pagination): [Product]!
    category(slug: String, pagination: Pagination): [Category]
  }
`

export default typeDefs
