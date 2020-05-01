import React from 'react'
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';

export default function Mission() {
    return (
        <section className="mission-container">
            <ScrollAnimation 
                animateIn="fadeIn"  
                animateOnce={true}
                duration={4}
            >
                <div className="iphone">
                    <div className="eyebrow">
                        <div className="speaker"></div>
                    </div>
                    <video autoPlay loop src="https://media.giphy.com/media/mBwRMLimo9wJpzVyHX/source.mov"></video>
                </div>
            </ScrollAnimation>
            <div className="card">
                <ScrollAnimation 
                    animateIn='bounceInRight'  
                    animateOnce={true}
                    duration={2}
                >
                    <h3>Connect with contractors in your area, Bid on work, Manage your projects, Schedule more construction.</h3>
                    <p> 
                        ManyBuild is a community forward construction platform built 
                        for general contractors to connect with subcontractors. 
                        By creating a platform that brings the construction community together we 
                        believe you can build anything. 
                    </p>

                    <p>
                        Planning, Budgeting, Bidding, Scheduling and Communications are unified into an easy point and click, replacing hundreds of thousands of dollars in software and overhead.
                    </p>
                </ScrollAnimation>
            </div>
           
        </section>
    )
}
