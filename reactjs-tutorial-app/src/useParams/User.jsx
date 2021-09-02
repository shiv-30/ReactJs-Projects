import React from 'react';
import {useParams} from 'react-router-dom';

// const User = ({match}) => {
//     return (
//         <div>
//             <h1>Welcome {match.params.name} page</h1>
//         </div>
//     )
// }

const User = () => {
 const {fname, lname} = useParams();
  return (
    <div>
      <h1>Welcome {fname} {lname} page</h1>
    </div>
  );
};

export default User;
