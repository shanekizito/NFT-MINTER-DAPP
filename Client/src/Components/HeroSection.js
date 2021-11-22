import React from 'react'
import HeroCard1 from '../Assets/HeroCard1.jpg'
import tree from '../Assets/tree.jpg'
import arandom from '../Assets/arandom.jpg'
import './HeroSection.css'
import  Gallery from './Gallery'

const HeroSection = () => {
    return (
        <div className="hero-section">
            <div className="hero-section-texts">
            <div className="hero-section-socials">
            <i class="fab fa-discord"></i>
            <i class="fab fa-twitter"></i>  
            <i class="fab fa-instagram"></i>
            </div>
            
            <div class="Hero-text-container">
            <p class="glitch">
            <span aria-hidden="true">The most anticipated  NFT collections</span>
            The most anticipated  NFT collections
            <span aria-hidden="true">The most anticipated  NFT collections</span>
            </p>
            </div>
            <div className="hero-section-buttons">
            <button className="btn minting">SEE GALLERY</button>
           
            </div>
            </div>
             
            <Gallery/>
        </div>
    )
}

export default HeroSection
