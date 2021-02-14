import React, { useState } from "react";
import "./Coin.css";
import { useStateValue } from "./StateProvider";
//React collapsible component + API data??
//Serverless might be best because of the single HTTP request nature of GraphQL. More clients would require better performance and scalability

function Coin({ id, symbol, name }) {
  const [{ hidden }, dispatch] = useStateValue();
  return <div></div>;
}

export default Coin;
