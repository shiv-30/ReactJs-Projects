import React from 'react';
import {Provider} from 'react-redux'
import store from './redux/store'
import HooksCakeContainer from './components/HooksCakeContainer'
import IceCreamContainer from './components/IceCreamContainer'
import './App.css';
import CakeContainer from './components/CakeContainer'
import NewCakeContainer from './components/NewCakeContainer'
import ItemContainer from './components/ItemContainer'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ItemContainer cake/>
        <ItemContainer/>
        <CakeContainer/>
        <HooksCakeContainer />
        <IceCreamContainer />
        <NewCakeContainer/>        
      </div>
    </Provider>
  );
}

export default App;
