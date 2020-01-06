import React from 'react';
import { Link } from 'react-router-dom';
import './PopularInstructor.css';
const PopularInstructor = (props) => {
	const authors = props.author;
	return (
		<div className="col-md-3" key={authors.key}>
		  <Link to={{ pathname: '/user', state: { author: authors } }} style={{textDecoration:"none"}}>
			<div className="card">
			  <div className="card-body text-center">
				<div className="card-image">
				  <img className="user-auther user-auther--image " src={authors.image} alt="auther images" />
				</div>
				<div className="card-title">
				  <h5 style={{textOverflow: 'ellipsis',whiteSpace:" nowrap",overflow:" hidden"}}>{authors.name}</h5>
				</div>
				<div className="card-topic details" style={{textOverflow: 'ellipsis',whiteSpace:" nowrap",overflow:" hidden"}}>{authors.topics}</div>
				<div className="card-student details">782.653 students</div>
				<div className="card-courses details">33 courses</div>
			  </div>
			</div>
		  </Link>
		</div>
	  );
};

export default PopularInstructor;
