import React from "react";
import iconChat from "../Assets/message.png";
import iconMoney from "../Assets/money.png";
import iconSecurity from "../Assets/security.png";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function Home() {
	return (
		<>
			<Header />
			<main>
				<div className="hero">
					<section className="hero-content">
						<h2 className="sr-only">Contenu Promu</h2>
						<p className="subtitle">Pas de Frais.</p>
						<p className="subtitle">Pas de depôt minimum.</p>
						<p className="subtitle">Taux d'intérêts Elevés.</p>
						<p className="text">Ouvrez un compte d'épargne avec Argent Bank aujourd'hui!</p>
					</section>
				</div>
				<section className="features">
					<h2 className="sr-only">Features</h2>
					<div className="feature-item">
						<img src={iconChat} alt="Chat Icon" className="feature-icon" />
						<h3 className="feature-item-title">Vous êtes notre priorité #1</h3>
						<p>
                        Besoin de parler à un représentant? Vous pouvez entrer en contact par notre 24/7
                        chat ou via un appel téléphonique en moins de 5 minutes.
						</p>
					</div>
					<div className="feature-item">
						<img src={iconMoney} alt="Chat Icon" className="feature-icon" />
						<h3 className="feature-item-title">Plus d'économies signifie des taux plus élevés</h3>
						<p>Plus vous épargnez avec nous, plus votre taux d'intérêt sera élevé !</p>
					</div>
					<div className="feature-item">
						<img src={iconSecurity} alt="Chat Icon" className="feature-icon" />
						<h3 className="feature-item-title">Une sécurité à laquelle vous pouvez faire confiance</h3>
						<p>
                        Nous utilisons un cryptage haut de gamme pour nous assurer que vos données et votre argent sont
                        toujours en sécurité.
						</p>
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
}
