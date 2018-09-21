import React, { Component } from 'react';

//COMPONENTS
import Navigation from './components/navigation/navigation';
import Slider from './components/slider/Slider';
import News from './components/news/news';
import AboutUs from './components/aboutUs/aboutUs';
import Contact from './components/contact/contact';
import Product from './components/products/products';
import FormModal from './components/modal/formModal';
import Offer from './components/offer/offer';


//CSS
import './App.css';
import './animation/animate.css';
import './animation/hover.css';
import 'semantic-ui-css/semantic.min.css';


const initialState = {
    route: 'home',
    isOpen: false
}

class App extends Component {

    constructor() {
    super();
    this.state = initialState;
  }

  onRouteChange = (route) => {
    // if(route === 'home'){

    // }
    this.setState({route: route});
  }

  render() {
    const {route} = this.state;

    return (
      <div className="App">
        <Navigation />
        <Slider />
        
        <News />
        <AboutUs/>
        <Offer/>
        <Product />
        
        {/* <FormModal/> */}
        <Contact/>

      </div>
    );
  }
}

export default App;
