import React from 'react';
import authors from './authors';
import categories from './categories';
import PolpularInstructors from './components/PopularInstructors'
import PopularTopics from './components/PopularTopics';

const Home = () => {
    return (
        <div>
       <PopularTopics authorTopics={categories} />
       <PolpularInstructors authorDetails={authors} />
        </div>
    )
}

export default Home;