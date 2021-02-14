const schema = `

type Query { 
  getMarketData(id: String!): Market!
}

type Market{
  id : String!
  name : String!
  symbol : String!
}

type Coin{
  coin : Market!
  rank : Int!
  price_usd : String!
  percent_change_24h : String!,
  percent_change_1h : String!,
  percent_change_7d : String!,
  price_btc : String!,
  market_cap_usd : String!,
  volume24 : float!,
  volume24a : float!,
  csupply : String!,
  tsupply : String!,
  msupply : String!
}

type User{
  email : String!
  password : String!
}

`;
