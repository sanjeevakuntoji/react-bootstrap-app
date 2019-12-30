import React from 'react';
import { Link } from 'react-router-dom';
import '../components/style/header.css';
const Header = () => {
	return (
		// <div className="header-container">
		// 	<div className="logo-container" style={{ width: 32 }}>
		// 		<img
		// 			className="udemy-logo"
		// 			src="https://www.udemy.com/staticx/udemy/images/v6/logo-coral.svg"
		// 			alt="Udemy"
		// 			width="110"
		// 			height="32"
		// 		/>
		// 	</div>
		// 	<div className="logo-container">information</div>
		// </div>
		<nav>
			<div className="container-fluid">
				<div className="navbar-header">
					<Link to="/" className="navbar-brand">
						<img
							className="udemy-logo"
							src="https://www.udemy.com/staticx/udemy/images/v6/logo-coral.svg"
							alt="Udemy"
						
						/>
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default Header;
