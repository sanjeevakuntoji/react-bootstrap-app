import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Header from './components/nav-bar/header/Header';
import Home from './components/Home/Home';
import PopularInstructorDetails from './components/popularInstructors/popularInstructorsDetails/PopularInstructorDetails';
import SubHeader from './components/nav-bar/sub-header/SubHeader';
import categories from '../src/categories.json';

class App extends Component {
	render() {
		return (
			<div>
				<Router>
					<Header  categories={categories} />
					<Route path="/" exact>
					<SubHeader  categories={categories} />
						<Home />
					</Route>
					<Route path="/user" exact component={PopularInstructorDetails} />
				</Router>
			</div>
		);
	}
}

export default App;
