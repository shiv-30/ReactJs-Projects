import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import About from './About';
import Contact from './Contact';
// import Error from './Error';
import Menu from './Menu';
import Service from './Service';
import User from './User';
import Search from '../Search';

const Name = () => {
  return <h1>Hello World</h1>
}

const App = () => {
  return (
    <div>
      <Menu />
      <Switch>
        <Route exact path="/" component={() => <About name='About'/>} />

        <Route exact path="/contact" component={Contact} />
        <Route exact path="/service" render={() => <Service name="Service"/>} />
        <Route path="/contact/Name" component={Name} />
        <Route exact path="/user/:fname/:lname" component={User}/>

        <Route exact path="/search" component={Search} />
        
        {/* <Route component={Error} /> */}
        <Redirect to="/"/>
      </Switch>
    </div>
  );
}

export default App;

// https://medium.com/@migcoder/difference-between-render-and-component-prop-on-react-router-v4-368ca7fedbec