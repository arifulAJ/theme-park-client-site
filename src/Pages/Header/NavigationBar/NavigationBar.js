import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../constext/useAuth';
import './navigation.css'

const NavigationBar = () => {
  const{user,signOutAt}=useAuth()
    return (
        <div className="dinamik" >
            
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
          <Link to='/service' className="nav-link active" aria-current="page" href="#">service</Link>
        </li>
        <li className="nav-item">
          <Link to='/about' className="nav-link active" aria-current="page" href="#">about</Link>
        </li>
        
        
      </ul>
      <span className="navbar-text">
    
    
 { user.email?
<div className=" ">
<Link style={{padding:"10px,",textDecoration:"none",border:"1px solid"}}  to='/order'   > My Orders</Link>
<Link style={{paddingRight:"100px,",textDecoration:"none", border:"1px solid"}}  to='/manageOrder' >Manage All Orders</Link>
<Link style={{paddingLeft:"10px,",textDecoration:"none",border:"1px solid"}}  to='/addService'  > Add A New Service</Link>
<button style={{paddingRight:"10px,",textDecoration:"none",border:"1px solid"}}  className="btn btn-danger" onClick={signOutAt} > Log out</button>
</div> :
  
  <Link to='/signup'>   <button className="btn btn-danger"> sign up</button></Link>
   }
{/* //  <Link to='/signin'>   <button className="btn btn-danger"> Log in</button></Link>} */}

  
 </span>
    </div>
  </div>
</nav>
        </div>
    );
};

export default NavigationBar;