import React from 'react';
import {useParams, useLocation} from 'react-router-dom';



const User = () => {
 const location = useLocation();
 
 const {fname, lname} = useParams();
  return (
    <div>
      <h1>Welcome {fname} {lname} page</h1>
      <p>My current location is {location.pathname} </p>
      {location.pathname === '/user/shiv/kumar'? <button onClick={()=> alert("You are aswm!!")}>Click me</button>: null}

    </div>
  );
};

export default User;
