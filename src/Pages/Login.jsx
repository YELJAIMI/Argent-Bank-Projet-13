import React, { useRef } from "react";
import { Navigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess, loginFail } from "../Features/sliceLogin"
import { getToken } from "../userApi";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function Login() {
	const passwordRef = useRef();
	const userNameRef = useRef();
	const { isAuth, error } = useSelector((state) => state.login);
	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();

		getToken(userNameRef.current.value, passwordRef.current.value)
			.then((token) => {
				localStorage.setItem("token", token);
				dispatch(loginSuccess());
			})
			.catch((error) => {
				if (error.response.status === 400) {
					dispatch(loginFail("Erreur d'identification"));
				} else {
					dispatch(loginFail("Oups! Connexion impossible. Veuillez réesayer plus tard."));
					console.log(error);
				}
			});
	};

	return (
		<>
			{isAuth && <Navigate replace to="/user/profile" />}
			<Header />
			<main className="main bg-dark">
				<section className="sign-in-content">
					<i className="fa fa-user-circle sign-in-icon"></i>
					<h1>S'identifier</h1>
					{error && <p style={{ color: "red" }}>{error}</p>}
					<form onSubmit={handleSubmit}>
						<div className="input-wrapper">
							<label htmlFor="username">Username</label>
							<input type="text" id="username" ref={userNameRef} />
						</div>
						<div className="input-wrapper">
							<label htmlFor="password">Password</label>
							<input type="password" id="password" ref={passwordRef} />
						</div>
						<div className="input-remember">
							<input type="checkbox" id="remember-me" />
							<label htmlFor="remember-me">Remember me</label>
						</div>
						<button className="sign-in-button" type="submit">
							S'identifier
						</button>
					</form>
				</section>
			</main>
			<Footer />
		</>
	);
}
