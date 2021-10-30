import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
    return (
        <div>
            
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
  <img src="https://seeklogo.com/images/T/tourism-entertainment-beach-logo-5508D63BC5-seeklogo.com.png" alt="" width="30" height="24" className="d-inline-block align-text-top"/><span style={{fontWeight:'bolder'}}>FantasyKingdom</span>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to='/home' className="nav-link active" aria-current="page" href="#">Home</Link>
        </li>
        <li className="nav-item">
          <Link to='/home' className="nav-link active" aria-current="page" href="#">Home</Link>
        </li>
        <li className="nav-item">
          <Link to='/home' className="nav-link active" aria-current="page" href="#">Home</Link>
        </li>
        <li className="nav-item">
          <Link to='/home' className="nav-link active" aria-current="page" href="#">Home</Link>
        </li>
        
      </ul>
      <span className="navbar-text">
  <Link to='/login'>   <button className="btn btn-danger"> login</button></Link>
      </span>
    </div>
  </div>
</nav>
        </div>
    );
};

export default NavigationBar;