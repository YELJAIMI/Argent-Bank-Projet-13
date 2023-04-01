import React, { useEffect, useRef } from "react";
import { editName } from "../Features/sliceUser";
import { useDispatch, useSelector } from "react-redux";
import { postEditName } from "../userApi";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import getUserProfile from "../userAct";

function User() {
	const { user, error } = useSelector((state) => state.user);
	const { isEditName } = useSelector((state) => state.user);
	const dispatch = useDispatch();
	const lastNameRef = useRef();
	const firstNameRef = useRef();

	useEffect(() => {
		getUserProfile(dispatch);
	}, [dispatch]);

	const handleSubmit = (e) => {
		e.preventDefault();
		postEditName(
			firstNameRef.current.value === "" ? user.firstName : firstNameRef.current.value,
			lastNameRef.current.value === "" ? user.lastName : lastNameRef.current.value,
		).then(() => {
			getUserProfile(dispatch);
		});

		dispatch(editName(false));
	};

	const EventCancel = (e) => {
		dispatch(editName(false));
	};

	const EventEditName = (e) => {
		dispatch(editName(true));
	};

	if (error) {
		return (
			<>
				<Header />
				<main className="error main bg-dark">
					<p>{error}</p>
				</main>
				<Footer />
			</>
		);
	}

	return (
		<>
			<Header />
			<main className="main bg-dark">
				{isEditName ? (
					<div className="header">
						<form onSubmit={handleSubmit}>
							<h1>Content de vous revoir</h1>
							<input
								className="edit-input name"
								autoComplete="off"
								type="text"
								placeholder={user.firstName}
								ref={firstNameRef}
							/>
							<input
								className="edit-input name"
								autoComplete="off"
								type="text"
								placeholder={user.lastName}
								ref={lastNameRef}
							/>
							<br /> <br />
							<button type="submit" className="save-button">
								Sauvegarder
							</button>
							<button
								onClick={() => {
									EventCancel();
								}}
								className="cancel-button"
							>
								Fermer
							</button>
						</form>
					</div>
				) : (
					<div className="header">
						<h1>
							Content de vous revoir 
							<div className="name">
								{user.firstName} {user.lastName}
							</div>
						</h1>
						<button
							onClick={() => {
								EventEditName();
							}}
							className="edit-button"
						>
							Edit Name
						</button>
					</div>
				)}

				<h2 className="sr-only">Comptes</h2>
				<section className="account">
					<div className="account-content-wrapper">
						<h3 className="account-title">Vérification de la banque d'argent (x8349)</h3>
						<p className="account-amount">$2,082.79</p>
						<p className="account-amount-description">Solde disponible</p>
					</div>
					<div className="account-content-wrapper cta">
						<button className="transaction-button">Afficher les transactions</button>
					</div>
				</section>
				<section className="account">
					<div className="account-content-wrapper">
						<h3 className="account-title">Argent d'Epargne (x6712)</h3>
						<p className="account-amount">$10,928.42</p>
						<p className="account-amount-description">Solde disponible</p>
					</div>
					<div className="account-content-wrapper cta">
						<button className="transaction-button">Afficher les transactions</button>
					</div>
				</section>
				<section className="account">
					<div className="account-content-wrapper">
						<h3 className="account-title">Carte de crédit Banque Argent (x8349)</h3>
						<p className="account-amount">$184.30</p>
						<p className="account-amount-description">Solde Actuel</p>
					</div>
					<div className="account-content-wrapper cta">
						<button className="transaction-button">Afficher les opérations</button>
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
}

export default User
