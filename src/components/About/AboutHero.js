import React from 'react'
import img from '../../manybuild.jpg'

export default function AboutHero() {
    return (
        <section className="about-hero">
            <div className="about-overlay">
                <section className="hero-container"> 
                    <div className="about-heading"> 
                        <h1>ABOUT</h1>
                    </div>
                </section>
            </div>
            <img className="about-hero-image" src={img} />
        </section>
    )
}
