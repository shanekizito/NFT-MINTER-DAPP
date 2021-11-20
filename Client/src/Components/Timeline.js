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
  <h1>Timeline</h1>
  
  <ul class="timeline">
    <li class="event" data-date="65Million B.C.">
      <h3>Dinosaurs Roamed the Earth</h3>
      <img src={HeroCard1}></img>
      <p>Limited Swag

There will only ever be 6,666 Cyber Nekos for you
 to adopt so act fast before swag runs out! 🏃 🐢🦂</p>
    </li>

    <li class="event" data-date="65Million B.C.">
      <h3>Dinosaurs Roamed the Earth</h3>
      <img src={car}/>
      <p>Swag level over 9000

All Cyber Nekos deserve a special place in everyone's heart, some are rarer than others. If you're lucky, your Neko will
 wear a Fantom hat while puking rainbow. 🌈🐢🦂</p>
    </li>

    <li class="event" data-date="65Million B.C.">
      <h3>Dinosaurs Roamed the Earth</h3>
      <img src={tree}></img>
      <p>Nekos hate looking alike

Each Neko is generated from a list of rarities distribution. Including background, body, fur, eyes, mask, etc...🐢🦂</p>
    </li>
     
    
     
  </ul>
</div> 
        </div>
        
    )
}

export default Timeline
