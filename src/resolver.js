export const resolvers = {
  Query: {
    getMarketData: (root, args) => getMarketData(args)
  },
  Market: {
    Coin: (obj, args) => getPaginatedCoin(obj.handle, args)
  }
};
