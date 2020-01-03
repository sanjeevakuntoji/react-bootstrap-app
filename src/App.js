import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './Home';
import AuthorDetails from './components/AuthorDetails';
import SubHeader from './components/header/SubHeader';

class App extends Component {
	render() {
		return (
			<div>
				<Router>
					<Header />
					<Route path="/" exact>
					<SubHeader />
						<Home />
					</Route>
					<Route path="/user" exact component={AuthorDetails} />
				</Router>
			</div>
		);
	}
}

export default App;
