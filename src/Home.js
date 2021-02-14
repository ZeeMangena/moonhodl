import React from "react";
import "./Home.css";
import { Link, useHistory } from "react-router-dom";
import Coin from "./Coin";

function Home() {
	return (
		<div className="home">
			<div className="home__container">
				<div className="home__row">
					<Coin
					//id=
					//symbol=
					//name=
					//*Comment Used on the collapsed Coin component
					/>
				</div>
			</div>
		</div>
	);
}

export default Home;
