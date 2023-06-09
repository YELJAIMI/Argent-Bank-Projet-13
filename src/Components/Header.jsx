import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Assets/Logo.png";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Features/sliceLogin";
import { editName } from "../Features/sliceUser";

function Header() {
	const { isAuth } = useSelector((state) => state.login);
	const { user } = useSelector((state) => state.user);
	const dispatch = useDispatch();

	const handleLogout = () => {
		dispatch(logout());
		dispatch(editName(false));
		localStorage.clear();
	};

	return (
		<nav className="main-nav">
			<Link to="/" className="main-nav-logo">
				<img className="main-nav-logo-image" src={Logo} alt="Argent Bank Logo" />
				<h1 className="sr-only">Argent Bank</h1>
			</Link>
			<div>
				{isAuth ? (
					<>
						<Link to="/user/profile" className="main-nav-item name">
							<i className="fa fa-user-circle"></i>
							{user.firstName}
						</Link>
						<button onClick={handleLogout} className="main-nav-item logoutButton">
							<i className="fa fa-sign-out"></i>
							Sign Out
						</button>
					</>
				) : (
					<Link to="/user/login" className="main-nav-item">
						<i className="fa fa-user-circle"></i> Sign In
					</Link>
				)}
			</div>
		</nav>
	);
}

export default Header