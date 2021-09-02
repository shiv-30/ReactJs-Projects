import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Home from './Home';
import Service from './Service';
import About from './About';
import Contact from './Contact';
import Navbar from './Navbar';

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About}/>
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/service" component={Service}/>
        <Redirect to="/"/>

      </Switch>
    </>
  )
}

export default App
