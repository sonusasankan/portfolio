import React, { Component } from 'react'; 
import Banner from './header/Banner';
import About from './About';
import Technology from './Technology';


  class Home extends Component { render() {
    return (
      <div>
     <Banner />
     <About />
     <Technology />
     </div>
  );
   }
  }
  export default Home;