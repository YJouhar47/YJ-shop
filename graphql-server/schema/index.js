const { gql } = require('apollo-server');

const typeDefs = gql`
  type Product {
    id: ID!
    name: String!
    sku: String!
    description: String
    price: Float
    image: String
    quantity: Int
  }

  type Query {
    products: [Product!]!
    product(id: ID!): Product
  }
`;

module.exports = typeDefs;
