import { gql } from '@apollo/client/core';

export const GET_PRODUCTS = gql`
query {
  products {
    id
    name
    price
    description
    image
  }
}
`

export const GET_PRODUCT_BY_ID = gql`
  query($productId: ID!) {
    product(id: $productId) {
      name
      description
      price
      image
    }
  }
`;
