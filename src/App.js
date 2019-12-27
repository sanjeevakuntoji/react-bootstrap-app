import React, { Component } from 'react';
import Header from './components/Header';
import authors from './authors';
import categories from './categories';
import PolpularInstructors from './components/PopularInstructors'
import PopularTopics from './components/PopularTopics';

class App extends Component {
  render() {
    return (
      <div >
       <Header />
       <PopularTopics authorTopics={categories} />
       <PolpularInstructors authorDetails={authors} />
      </div>
    );
  }
}

export default App;
