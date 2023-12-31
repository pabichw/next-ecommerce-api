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
    reviews: [Review]
    reviewAvg: Float
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

  type Order {
    id: ID!
    items: [OrderItem]
    status: String
    userIdConnection: String
    userEmailConnection: String
  }

  type OrderItem {
    id: String!
    product: Product
    quantity: Int!
    configurableAttributes: String
  }

  type Review {
    id: ID!
    headline: String!
    content:  String!
    rating:   Int!
    name: String!
    email: String!
  }

  input ReviewInput {
    headline: String!
    content:  String!
    rating:   Int!
    name: String!
    email: String!
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
    product(id: ID, name: String, pagination: PaginationInput, sorting: String): [Product]!
    category(slug: String, pagination: PaginationInput): CategoryWithPagination
    collection(name: String): [Collection]!
    cart(id: ID): Order
    order(userId: ID, userEmail: String): [Order]
  }

  type Mutation {
    upsertProduct(id: ID, product: ProductUpsertInput!): Product
    insertReview(product: ID!, review: ReviewInput!): Review
    addToCart(id: ID!, productId: ID!, quantity: Int!, configurableAttributes: String): Order
    updateOrderItemQty(orderId: ID, orderItemId: ID!, quantity: Int!): OrderItem
    updateOrderStatus(orderId: ID!, status: String!): OrderItem
    updateOrderOwnership(orderId: ID!, userId: String, userEmail: String): OrderItem
  }
`

export default typeDefs
