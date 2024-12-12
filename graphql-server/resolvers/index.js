const products = require('../data');

const resolvers = {
  Query: {
    products: () => products,
    product: (_, { id }) => products.find(p => p.id === parseInt(id))
  }
};

module.exports = resolvers;
