import React from 'react';
import { Link } from 'react-router-dom';
import * as FontAwesome from 'react-icons/lib/fa'
import { Form, FormControl} from 'react-bootstrap';
import '../style/header.css';
const Header = () => {
	return (
		<nav>
			<div className="container-fluid">
				<div className="navigation-header">
					<div className="navbar-header">
						<Link to="/" className="navbar-brand-logo">
							<img
								className="udemy-logo"
								src="https://www.udemy.com/staticx/udemy/images/v6/logo-coral.svg"
								alt="Udemy"
								style={{ height: 32, width: 110 }}
							/>
						</Link>
					</div>
					<div className="header-left">
						<div className="navbar-brand-cetegory">
							<Link to="/">
                            {/* <FontAwesomeIcon icon={FaShoppingCart} /> */}
                            <span class="fontawsome">  <FontAwesome.FaTh/></span>
								<span>Categories</span>
							</Link>
						</div>
                        {/* <div className="navbar-brand-search" /> */}
                        <div className="navbar-brand-search">
                        <Form inline>
                        <FormControl type="text" placeholder="Search" className="search" />
                            <button type="button" class="btn btn-search"><FontAwesome.FaSearch /></button>
                        </Form>
                        </div>
					</div>
                    <div className="header-right" >
                        <div className="navbar-brand-udemy-business">
                        <Link to="/" className="udemy">
                        Udemy for Business
                        </Link></div>
                        <div class="navbar-brand-udemy-business">
                            <Link className="udemy">Teach on Udemy </Link>
                        </div>
                        <div className="divide">
                        </div>
                        <div className="cart">
                            <div className="cart-font">
                            <FontAwesome.FaShoppingCart className="font" />
                            </div>
                        </div>
                        <div className="login">
                        <button type="button" class="btn btn-quaternary">Log In</button>
                        </div>
                        <div className="signup">
                        <button type="button" class="btn btn-primary">Sign Up</button>
                        </div>
                    </div>
                </div>	
			</div>
		</nav>
	);
};

export default Header;
