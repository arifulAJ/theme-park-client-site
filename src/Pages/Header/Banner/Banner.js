import React from 'react';


const Banner = () => {
    return (
        <div  >
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active ">
      <img style={{height:'500px'}} src="https://porzoton.com/wp-content/uploads/2020/12/Fantasy-Kingdom-Theme-Park.jpg" class="d-block w-100 " alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>FantasyKingdom main gate</h5>
        <p>you are well come to our visitor spot</p>
      </div>
    </div>
    <div class="carousel-item ">
      <img style={{height:'500px'}} src="https://www.lrbtravelteam.com/wp-content/uploads/2020/10/Fantasy-Kingdom..png" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Water Kingdom</h5>
        <p>this is really beautiful and attractive zoon</p>
      </div>
    </div>
    <div class="carousel-item ">
      <img style={{height:'500px'}} src="https://www.touristplaces.com.bd/images/pp/5/p106539.jpg" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Roller coster</h5>
        <p>very horrible and enjoyable thinks</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        </div>
    );
};

export default Banner;