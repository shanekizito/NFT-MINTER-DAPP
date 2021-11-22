import React from 'react'
import './Timeline.css'
import HeroCard1 from '../Assets/HeroCard1.jpg'
import car from '../Assets/car.jpg'
import tree from '../Assets/tree.jpg'
import sunset from '../Assets/sunset.png'


const Timeline = () => {
    return (
        <div>
           <div id="timeline-content">
  <h1>About PixL Summer</h1>
  
  <ul class="timeline">
    <li class="event"  >
      <h3>Limited set of 1000</h3>
      <img src={HeroCard1}></img>
      <p>There will only be 1000 pieces from the collection.Grab a few before they run out 🏃 🐢🦂</p>
    </li>

    <li class="event"  >
      <h3>Earn tokens for future whitelisting </h3>
      <img src={car}/>
      <p>Owning a piece from this collection will enable you to get whitelosted privilages like presale ownership on upcoming sets🦂</p>
    </li>

    <li class="event" >
      <h3>Art</h3>
      <img src={tree}></img>
      <p>This collections were drawn by our artists after getting inspiration from great cryptogod lord Kek .🐢🦂</p>
    </li>
     
  </ul>
</div> 
        </div>
        
    )
}

export default Timeline
