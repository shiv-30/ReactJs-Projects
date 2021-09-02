import React, { createContext } from 'react';
import CompA from '../useContext/CompA';

// create context
const FirstName = createContext();
const LastName = createContext();
const App = () => {
  return (
    <>
      <FirstName.Provider value={"Shiv"}>
        <LastName.Provider value={"Kumar"}>
          <CompA/>
        </LastName.Provider>
      </FirstName.Provider>
      
    </>
  );
};

export default App;
export {FirstName, LastName};