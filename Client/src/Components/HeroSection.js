import React from 'react'
import HeroCard1 from '../Assets/HeroCard1.jpg'
import green from '../Assets/green.png'
import pink1 from '../Assets/pink1.png'
import sunny from '../Assets/sunny.png'
import orange from '../Assets/orange.png'

import './HeroSection.css'


const HeroSection = () => {
    return (
        <div className="hero-section">
            <div className="hero-section-text">
                <h1>
                We are the Comfy Llamas
                </h1>
                <h3>
               A collection of  1 0 , 0 0 0  Llamas keeping it Comfy and Stylish in the NFT space
                </h3>
                <button className="action-btn">Mint a Llama <i class="fas fa-external-link-square-alt"></i></button>
            </div>
            <div className="hero-section-cards">
               <div className="hero-card img1" >
                <img src={green}/>
                </div>
                <div className="hero-card img2">
                <img src={orange}/>
                </div>
                
            </div>
             
            
        </div>
    )
}

export default HeroSection
