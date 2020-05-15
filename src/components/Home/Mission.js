import React from 'react'
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';

export default function Mission({heading, p1, p2}) {
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
                    <video autoPlay loop src="https://media.giphy.com/media/dZiGAgZaLix9cR26f5/source.mov"></video>
                </div>
            </ScrollAnimation>
            <div className="card">
                <ScrollAnimation 
                    animateIn='bounceInRight'  
                    animateOnce={true}
                    duration={2}
                >
                    <h3>{heading}</h3>
                    <p>{p1}</p>
                    <p>{p2}</p>
                </ScrollAnimation>
            </div>
           
        </section>
    )
}
