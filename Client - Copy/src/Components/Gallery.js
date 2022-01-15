import React from 'react'
import './Gallery.css'

import ajax from '../Assets/ajax.jpg'
import arandom from '../Assets/arandom.jpg'
import car from '../Assets/car.jpg'
import sunset from '../Assets/sunset.png'
import squid from '../Assets/squid.png'
import tree from '../Assets/tree.jpg'
import floatingman from '../Assets/floatingman.gif'
import plane from '../Assets/plane.gif'
import synthwave from '../Assets/synthwave.png'

const Gallery = () => {
    return (
        <div>
           <div class="grid image-grid">


<div class="grid-block">
  <div class="tile">
    <a class="tile-link" href="#">
      <img class="tile-img tile-img4" src={floatingman} alt="Image"/>
    </a>
  </div>
</div>

<div class="grid-block">
  <div class="tile">
    <a class="tile-link" href="#">
      <img class="tile-img tile-img5" src={plane} alt="Image"/>
    </a>
  </div>
</div>

<div class="grid-block">
  <div class="tile">
    <a class="tile-link" href="#">
      <img class="tile-img tile-img6" src={squid} alt="Image"/>
    </a>
  </div>
</div>

<div class="grid-block">
  <div class="tile">
    <a class="tile-link" href="#">
      <img class="tile-img tile-img7" src={sunset} alt="Image"/>
    </a>
  </div>
</div>

<div class="grid-block">
  <div class="tile">
    <a class="tile-link" href="#">
      <img class="tile-img tile-img8" src={tree} alt="Image"/>
    </a>
  </div>
</div>

<div class="grid-block">
  <div class="tile">
    <a class="tile-link" href="#">
      <img class="tile-img tile-img9" src={synthwave} alt="Image"/>
    </a>
  </div>
</div>



</div> 
        </div>
    )
}

export default Gallery
