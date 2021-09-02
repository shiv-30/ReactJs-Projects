import React from 'react';
import {Route, Switch} from 'react-router-dom';
import About from './React Router/About';
import Contact from './React Router/Contact';
import Error from './React Router/Error';

const Name = () => {
  return <h1>Hello World</h1>
}
const App = () => {
  return (
    <div>
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
