import React from 'react';
import { Link } from 'react-router-dom';
import '../style/subHeader.css'
const SubHeader = (props) => {
const content = props.subCategories;
console.log(content)
    return (
        

        <div className="sub-header">
        {/* <div className="sub-categorie-content">{props.subCategories} </div> */}
        <div className="sub-categorie-content">
       <Link className="link-bar" >devlopment</Link>
       <Link className="link-bar" >devlopment</Link>
       <Link className="link-bar" >devlopment</Link>
       
        </div>
        </div>
    )
}

export default SubHeader;