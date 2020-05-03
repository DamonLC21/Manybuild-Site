import React from 'react'
import img from '../../manybuild_helmets.jpeg'
import vid from '../../marketplace.mov'

export default function Technology() {
    return (
        <section className="technology-container">
            <div className="technology-content">
                <h2>Technology Contractors Love</h2>
                <p>Build a flexible solution with ManyBuild’s first-of-its-kind  platform.</p>
                <h3>What Is Flexibility, Anyway?</h3>
                <p>We erased the confusing ways of the past and created a solution that address time and location-based needs, allowing companies and employees to speak the same language.</p>
                <h3>Top Contractors use ManyBuild.</h3>
                <p>Our customers are committed to succeeding in a flexible future. ManyBuild Solutions creates different ideas.</p>
            </div>
            <div className="technology-video">
                <video autoPlay loop src={vid}></video>
            </div>
            <a href="https://market.manybuild.app/" target="_blank"><button>Marketplace</button></a>
        </section>
    )
}
