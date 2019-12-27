import React, { Component } from 'react';
import './PopularTopics.css';
class PolpularTopics extends Component {
	render() {
		const categories = this.props.authorTopics;
		return (
			<div className="container">
				<div className="title">
					<h5>Popular Topics</h5>
				</div>
				<div className="topics">
					{categories.map((categorie, i) => (
						<div className="row" key={i}>
							{categorie.topics.map((topic, i) => (
								<div className="col-lg-3">
									<div className="card" key={i}>
										<div className="card-body text-center">{topic}</div>
									</div>
								</div>
							))}
						</div>
					))}
				</div>
			</div>
		);
	}
}

export default PolpularTopics;
