import React from 'react';
import {Provider} from 'react-redux'
import store from './redux/store'
import HooksCakeContainer from './components/HooksCakeContainer'
import IceCreamContainer from './components/IceCreamContainer'
import './App.css';
import CakeContainer from './components/CakeContainer'


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer/>
        <HooksCakeContainer />
        <IceCreamContainer />
      </div>
    </Provider>
  );
}

export default App;
