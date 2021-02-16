import React, { useState } from "react";
import "./Coin.css";
import { useStateValue } from "./StateProvider";
//where will I get data.coin ?? Component taking shape
//React collapsible component + API data??

function Coin({ id, symbol, name }) {
	return;
	<div key={id}>
		<p>
			{name}: {symbol}
		</p>
	</div>;
}

export default Coin;
