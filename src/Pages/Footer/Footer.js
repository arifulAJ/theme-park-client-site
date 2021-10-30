import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css'

const Footer = () => {
    return (
        <div className="footer row row-cols-lg-2  row-cols-1 text-center container-fluid">
             
            <div>
                <img src="https://image.shutterstock.com/image-vector/travel-logo-icon-vector-design-260nw-1028106712.jpg" alt="" />
                <span style={{fontWeight:'bolder',fontSize:'30px'}}>Fantasy </span>
            </div>
            <div>
                <h1>connect with us</h1>
                <p>For the connection you can get free service. so do it now</p>
                <Link style={{color:"white",paddingRight:'10px'}} to='#'><i class="fab fa-twitter"></i></Link>
                <Link style={{color:"white",paddingRight:'10px'}} to='#'><i class="fab fa-skype"></i></Link>
                <Link style={{color:"white",paddingRight:'10px'}} to='#'><i class="fab fa-facebook-square"></i></Link>
                <Link style={{color:"white",paddingRight:'10px'}} to='#'><i class="fab fa-instagram-square"></i></Link>
                <Link style={{color:"white",paddingRight:'10px'}} to='#'><i class="fab fa-whatsapp"></i></Link>
            </div>
            <h6 style={{textAlign:'center'}}>copyright<i class="fas fa-copyright"></i> don't copy our product</h6>
        </div>
    );
};

export default Footer;