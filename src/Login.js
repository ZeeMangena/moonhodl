import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";

function Login() {
	const history = useHistory();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const signIn = (e) => {
		e.preventDefault(); //Standard on forms to prevent refreshing every keystroke
		//authentication process
		//check DB?
		//catch error
	};

	const register = (e) => {
		e.preventDefault();
		//add details to DB
		//catch error
		//After account creation, push them back to home using the history(useHistory). React Router magic
	};

	return (
		<div className="login">
			<Link to="/">
				<img className="login__logo" src="moonhodl.jpg" />
			</Link>

			<div className="login__container">
				<h1>Sign-In</h1>
				<form action="">
					<h5>Email</h5>
					<input
						type="text"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<h5>Password</h5>
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<button
						type="submit"
						onClick={signIn}
						className="login__signInButton"
					>
						Sign In
					</button>
				</form>

				<p>
					By signing-in you agree to moonhodl Conditions of Use & Sale. Please
					see our Privacy Notice, our Cookies Notice and our Interest-Based Ads
				</p>

				<button onClick={register} className="login__registerButton">
					Create Your moonhodl Account
				</button>
			</div>
		</div>
	);
}

export default Login;
