import React from 'react';

const MyOrder = () => {
    return (
        <div>
           <div className="text-center pt-5 pb-5">
           <h1 >Our  combo package </h1>
            <p>we are provide some reid transport and two meal</p>
            <h5>Ride are:</h5>
            <li>ju ju train</li>
            <li>water kingdom</li>
            <li>elephant kingdom</li>
            <li>tiger ride also kingdom</li>
           </div>

            <div class="row row-cols-1 row-cols-md-2 g-4 container mx-auto">
  <div class="col">
    <div class="card">
      <img src="https://www.chessington.com/media/w0hhbcqn/rattlesnake-at-chessington-world-of-adventures-resort_low-res.gif" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Ride  with combo package</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  
  
  <div class="col">
    <div class="card">
      <img src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">transport agency</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default MyOrder;