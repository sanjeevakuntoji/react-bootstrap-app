import React, { Component } from 'react';
import PopularInstructor from '../popularInstructor/PopularInstructor';

class PolpularInstructors extends Component {
	render() {
		const authors = this.props.authorDetails;
		console.log(authors)
		return (
			<div className="container">
				<div className="title">
					<h5>Popular Instructors</h5>
				</div>
				<div className="auther">
                    <div className="row">{authors.map((author, i) =>
                         <PopularInstructor author={author} key={i} />)}</div>
				</div>
			</div>
		);
	}
}
export default PolpularInstructors
