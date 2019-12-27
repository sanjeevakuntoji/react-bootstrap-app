import React, { Component } from 'react';
import './PopularInstructors.css';
class PolpularInstructors extends Component {
    render () {
        const authors = this.props.authorDetails;
        return (
            <div className="container">
                <div className="title"><h5>Popular Instructors</h5></div>
                <div className="auther">
                <div className="row">

             {authors.map((author, i) => 
             <div  className="col-md-3"  key={i}>
              <div className="card">
              <div className="card-body text-center">
              <div className="card-image">
              <img  className="user-auther user-auther--image " src={author.image} alt="auther images" /></div>             
             <div className="card-title"><h5>{author.name}</h5></div>
             <div className="card-topic">
             {author.topics+","}
             </div>
             <div className="card-student">782.653 students</div>
             <div className="card-courses">33 courses</div>
                
             </div>
              </div>



             </div>
             )}
             


  </div>
  </div>
            </div>
            // <div>
            // {authors.map((author, i) => 
            // <ol key={i}>
            //     <h4>{author.name}</h4>
            //     {author.topics.map((topic , i)=> <p>{topic}</p>)}
            // </ol>
            // )}
            // </div>
   
        )
    }
}

export default PolpularInstructors;