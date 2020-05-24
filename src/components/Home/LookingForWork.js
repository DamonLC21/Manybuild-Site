import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll';
import {Link} from 'react-router-dom'

export default function LookingForWork({title, steps=[], contact={}}) {
    return (
        <section className="looking-container">
            <h2>{title}</h2>
            <ul>{showSteps(steps)}</ul>
           <section className="in-touch">
                <h2>{contact.heading}</h2>
                <p>{contact.p}</p>
                <Link to="/contact"><button>{contact.button}</button></Link>
           </section>
        </section>
    )
    
    function showSteps(steps){
        return steps.map(createStepCard)
    }

    function createStepCard({step,p,image,animation}, i){
        return ( 
                <ScrollAnimation 
                    animateIn={animation}  
                    animateOnce={true}
                    duration={2}
                    key={i}
                >
                    <li>
                        <div className="iphone-half">
                            <div className="eyebrow">
                                <div className="speaker"></div>
                            </div>
                            <img src={image} alt="manybuild"/>
                        </div>
                        <div className="steps">
                            <h3>{step}</h3>
                            <p>{p}</p>
                        </div>
                    </li>
                </ScrollAnimation>
        )
    }
}
