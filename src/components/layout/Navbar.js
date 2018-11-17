import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from '../layout/SignedInLinks';
import SignedOutLinks from '../layout/SignedOutLinks';
import { connect } from 'react-redux';


const Navbar = () => {
  return ( 
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to= "/" className="brand-logo left"> Britannia Planner</Link>
        <SignedInLinks />
        <SignedOutLinks />
        
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    
  }
}

export default connect(mapStateToProps)(Navbar);