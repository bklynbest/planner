import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from '../layout/SignedInLinks';
import SignedOutLinks from '../layout/SignedOutLinks';

const Navbar = () => {
  return ( 
    <nav className="nav-wrapper grey darken-3">
      <div className="container left">
        <Link to= "/" className="brand-logo"> Britannia Planner</Link>
        <SignedInLinks />
        <SignedOutLinks />
        
      </div>
    </nav>
  );
};

export default Navbar;