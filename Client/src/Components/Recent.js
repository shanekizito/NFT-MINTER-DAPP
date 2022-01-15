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
                Exclusive Perks
                
            </h1>

            <div className="recent-arts">

            <div className="recent-art">
                <h3>Comfy</h3>
                <img src="https://img.icons8.com/emoji/956/000000/llama-emoji.png"/>
                <p>Stay warm!</p>
            </div>
            <div className="recent-art">
            <h3>Mint Pass </h3>
            <img src="https://img.icons8.com/emoji/956/000000/-emoji-admission.png"/>
            <p>Owning a comfy llama grants you a whitelist for the SN 2 collection</p>
            </div>
            <div className="recent-art">
            <h3>Earn</h3>
            <img src="https://img.icons8.com/emoji/956/000000/money-bag-emoji.png"/>
            <p>Get return of investement when more people purchase from secondary markets like Opensea</p>
            </div>
            <div className="recent-art">
            <h3>Looks rare</h3>
            <img src="https://img.icons8.com/emoji/956/000000/magnifying-glass-tilted-left-emoji.png"/>
            <p>We guarantee there are varieties of traits our chief designer made sure your each trait has atleast 10 different styles (Amazing)</p>
            </div>

        
            </div>
            
        </div>
    )
}

export default Recent
