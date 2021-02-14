import React, { useState } from "react";
import "./Coin.css";
import { useStateValue } from "./StateProvider";
import { useQuery, gql } from "@apollo/client";
//Component vaguely taking shape
//React collapsible component + API data??
//Serverless might be best because of the single HTTP request nature of GraphQL. More clients would require better performance and scalability

function Coin({ id, symbol, name }) {
  const [{ hidden }, dispatch] = useStateValue();
  const { loading, error, data } = useQuery(COIN_DATA);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.rates.map(({ name, symbol }) => (
    <div key={id}>
      <p>
        {name}: {symbol}
      </p>
    </div>
  ));
}

export default Coin;
