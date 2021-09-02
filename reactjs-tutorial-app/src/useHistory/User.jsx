import React from 'react';
import {useParams, useLocation, useHistory} from 'react-router-dom';



const User = () => {
 
 const history = useHistory();
 console.log(history);
 const location = useLocation();
 
 const {fname, lname} = useParams();
  return (
    <div>
      <h1>Welcome {fname} {lname} page</h1>
      <p>My current location is {location.pathname} </p>
      {location.pathname === '/user/shiv/kumar'? <button onClick={()=> history.goBack()}>GO Back</button>: null}
      <button onClick={()=> history.push("/")}>HomePage</button>

    </div>
  );
};

export default User;
