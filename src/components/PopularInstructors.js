import React, { Component } from 'react';
import AutherCard from './AutherCard';
import './PopularInstructors.css';


class PolpularInstructors extends Component {
	render() {
		const authors = this.props.authorDetails;
		return (
			<div className="container">
				<div className="title">
					<h5>Popular Instructors</h5>
				</div>
				<div className="auther">
					<div className="row">{authors.map((author, i) => <AutherCard author={author} key={i} />)}</div>
				</div>
			</div>
		);
	}
}

export default PolpularInstructors;
