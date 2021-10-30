import React from 'react';
import { Link } from 'react-router-dom';

const Cart = (props) => {
    const {imgUrl,title,description,price,id}=props.rede;
    const url=`/placeOrder/${id}`
    return (
        <div>
          
            <div className="card" >
  <img style={{height:'500px'}} src={imgUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <h6>Ticket price: {price} taka</h6>
    <Link to={url} href="#" className="btn btn-primary"> Buy Now</Link>
  </div>
</div>
        </div>
    );
};

export default Cart;