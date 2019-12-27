import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import AuthorDetails from './AuthorDetails';

const Auther = (props) => {
	const authors = props.author;
	return (
        <Router>
		<div className="col-md-3" key={authors.key}>
			<div className="card">
				<div className="card-body text-center">
					<div className="card-image">
						<img className="user-auther user-auther--image " src={authors.image} alt="auther images" />
					</div>
					<div className="card-title">
						<h5>{authors.name}</h5>
					</div>
					<div className="card-topic">{authors.topics + ','}</div>
                    <Link to="/Author">
					<div className="card-student">782.653 students</div></Link>
                    <Switch>
          <Route path="/Author" component={AuthorDetails}>
          </Route>
</Switch>
					<div className="card-courses">33 courses</div>
				</div>
			</div>
		</div>
        </Router>
	);
};

export default Auther;
