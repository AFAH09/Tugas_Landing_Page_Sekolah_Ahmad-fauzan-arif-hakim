import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import logoOp from '../op.jpg';
import logopp from '../pp.jpg';
import logopo from '../po.jpg';

function Home(){
    return(
        <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="10000">
            <img src={logoOp} class="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img src={logopo} class="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item">
            <img src={logopp} class="d-block w-100" alt="..."/>
          </div>
        </div>                   
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    )
}

export default Home; 