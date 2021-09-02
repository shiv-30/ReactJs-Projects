import React from 'react';
import {NavLink} from 'react-router-dom';

const Menu = () => {
    return (
      <div className="menu_style">
        <NavLink exact activeClassName="active_class" to="/">
          About
        </NavLink>

        <NavLink exact activeClassName="active_class" to="/contact">
          Contact
        </NavLink>

        <NavLink exact activeClassName="active_class" to="/search">
          Search
        </NavLink>

        <NavLink exact activeClassName="active_class" to="/service">
          Service
        </NavLink>

        <NavLink exact activeClassName="active_class" to="/user/shiv/kumar">
          User
        </NavLink>
      </div>
    );
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
