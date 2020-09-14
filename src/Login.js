import React, { useState } from 'react';
import './Login.css';
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login(){

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const history = useHistory();
	const login = e => {
		e.preventDefault();
		auth
		.signInWithEmailAndPassword(email,password)
		.then((auth) => {
			if(auth)
				history.push('/');
		})
		.catch(error => alert(error.message))
	}
	const register = e => {
		e.preventDefault();
		auth
		.createUserWithEmailAndPassword(email, password)
		.then((auth) => {
			//register successful
			if(auth)
				history.push('/');
			console.log(auth)
		})
		.catch( error => alert(error.message))

	}


	return (

		<div className="login">

			<Link to="/">
				<img src="amazon_logo_login.jpg" alt="" className="login__logo" />
			</Link>
			
			<div className="login__container">
				<h2>Sign-in</h2>
				<form>
					<h5>Email</h5>
					<input type="email" value={email} onChange={ e => setEmail(e.target.value)} />
					<h5>Password</h5>
					<input type="password" value={password} onChange={ e => setPassword(e.target.value)} />
					<button className="sign-in-button" onClick={login} >Sign-in</button>
					<button className="" onClick={register} >Create an amazon account</button>
				</form>
				
			</div>

		</div>

		)

}

export default Login;