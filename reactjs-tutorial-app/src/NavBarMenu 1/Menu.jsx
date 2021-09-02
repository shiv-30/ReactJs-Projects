import React from 'react';
import {NavLink} from 'react-router-dom';

const Menu = () => {
    return (
        <div>
            <NavLink exact activeClassName='active_class' to="/">About</NavLink>
            <br />
            <NavLink  exact activeClassName='active_class' to="/contact">Contact</NavLink>
        </div>
    )
}

export default Menu;

// import React from "react";
// import { Link } from "react-router-dom";

// const Menu = () => {
//   return (
//     <div>
//       <Link to="/">About</Link>
//       <br />
//       <Link to="/contact">Contact</Link>
//     </div>
//   );
// };

// export default Menu;
