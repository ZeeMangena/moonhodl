export const resolvers = {
  Query: {
    getMarketData: (root, args) => getMarketData(args)
  },
  Market: {
    Coin: (obj, args) => getCoin(obj.handle, args)
  }
};
