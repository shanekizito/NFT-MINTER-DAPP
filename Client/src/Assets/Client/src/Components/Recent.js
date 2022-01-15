import React from 'react'
import './Recent.css'
import ethereum from '../Assets/ethereum.gif'
import girl from '../Assets/girl.gif'
import cute from '../Assets/cute.gif'
import alien from '../Assets/alien.png'
import hiking from '../Assets/hiking.png'
import squidgame from '../Assets/squidgame.png'


const Recent = () => {
    return (
        <div className="recent-section">
            <h1 className="recent-title">
                Recently bought
            </h1>

            <div className="recent-arts">

            <div className="recent-art">
            <img src={ethereum}/>
            <h3 className="recent-art-collection">PixL Summer</h3>
            <h4 className="recent-art-title">Oracle</h4>
            <p className="recent-art-price"><i class="fab fa-ethereum"></i>150E</p>
            </div>

            <div className="recent-art">
            <img src={girl}/>
            <h3 className="recent-art-collection">PixL Summer </h3>
            <h4 className="recent-art-title">Skyboi </h4>
            <p className="recent-art-price"><i class="fab fa-ethereum"></i>12E </p>
            </div>


            <div className="recent-art">
            <img src={cute}/>
            <h3 className="recent-art-collection">PixL Summer </h3>
            <h4 className="recent-art-title">Muffins </h4>
            <p className="recent-art-price"><i class="fab fa-ethereum"></i>35E </p>
            </div>


            <div className="recent-art">
            <img src={alien}/>
            <h3 className="recent-art-collection">PixL Summer </h3>
            <h4 className="recent-art-title">Blue Ranger </h4>
            <p className="recent-art-price"><i class="fab fa-ethereum"></i>46E </p>
            </div>

            <div className="recent-art">
            <img src={hiking}/>
            <h3 className="recent-art-collection">PixL Summer </h3>
            <h4 className="recent-art-title">Journey </h4>
            <p className="recent-art-price"><i class="fab fa-ethereum"></i>112E </p>
            </div>


            </div>
            
        </div>
    )
}

export default Recent
