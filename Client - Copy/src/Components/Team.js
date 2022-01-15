import React from 'react'

import './Team.css'

import hacker from '../Assets/hacker.gif'
import wizard from '../Assets/wizard.png'
import wizard2 from '../Assets/wizard2.png'


const Team = () => {
    return (
        <div className="teams-container">
           <h1>Team Members</h1>
           <div className="teams">
           <div className="team">
               <img src={hacker }/> 
               <div className="Team-description">
               <h3>
                OX_HACKER
               </h3>

               <p>
                He's the wizard  incharge of writing smart contract and guiding the team.
               </p>
               </div>
               </div>
               
               <div className="team">
               <img src={wizard }/> 
               <div className="Team-description">
               <h3>
                Cryon_444
               </h3>

               <p>
                The Davinci of the team. He's the one who is responsible for the breathtaking art you see.
               </p>
               </div>
               </div>

               <div className="team">
               <img src={wizard2 }/> 
               <div className="Team-description">
               <h3>
                Hanselcat
               </h3>

               <p>
                She's the enthusiastic community manger who's sole existence is baed on #gm algorithm
               </p>
               </div>
               </div> 
               </div>
        </div>
    )
}

export default Team
