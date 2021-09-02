import React from 'react';
import {Route, Switch} from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Error from './Error';
import Menu from './Menu';

const Name = () => {
  return <h1>Hello World</h1>
}
const App = () => {
  return (
    <div>
      <Menu/>
      <Switch>
        <Route exact path="/" component={About} />

        <Route exact path="/contact" component={Contact} />
        <Route  path="/contact/Name" component={Name} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App
