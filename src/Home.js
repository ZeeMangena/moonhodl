import React from "react";
import "./Home.css";
import { Link, useHistory } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { useQuery, gql } from "@apollo/client";
import Coin from "./Coin";
import { resolvers } from "./resolver";

function Home() {
	const [{ hidden }, dispatch] = useStateValue();
	const { loading, error, data } = useQuery(resolvers.tickers());

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error :(</p>;

	console.log(data);
	return data.coin.map(({ id, name, symbol }) => {
		<Coin id={id} name={name} symbol={symbol} />;
		//If hidden.id? then skip, else coin component
	});
}

export default Home;
