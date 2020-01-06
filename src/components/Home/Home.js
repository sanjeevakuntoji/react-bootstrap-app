import React from 'react';
import authors from '../../authors.json';
import categories from '../../categories.json';
import PolpularInstructorsList from '../popularInstructors/popularInstructorsList/PopularInstructorsList'
import PopularTopicsList from '../popularTopics/popularTopicsList/PopularTopicsList';

const Home = () => {
    return (
        <div>
       <PopularTopicsList authorTopics={categories} />
       <PolpularInstructorsList authorDetails={authors} />
        </div>
    )
}

export default Home;