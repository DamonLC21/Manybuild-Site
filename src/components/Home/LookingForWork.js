import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll';
import {Link} from 'react-router-dom'
import step1 from '../../Step1.png'
import step2 from '../../Step2.png'
import step3 from '../../Step3.png'

export default function LookingForWork() {
    return (
        <section className="looking-container">
            <h2>Looking for more construction work?</h2>
           <ul>
                <ScrollAnimation 
                    animateIn="fadeInLeft"  
                    animateOnce={true}
                    duration={2}
                >
                    <li>
                            <div className="iphone-half">
                                <div className="eyebrow">
                                    <div className="speaker"></div>
                                </div>
                                <img src={step1} />
                            </div>
                            <div className="steps">
                                <h3>Step 1</h3>
                                <p>Fill out your application. Tell us what kind of work you are looking for and we’ll create a profile for you. 
                                    It’s completely free to sign up.
                                </p>
                            </div>
                    </li>
                </ScrollAnimation>
                <ScrollAnimation 
                    animateIn="fadeInUp"  
                    animateOnce={true}
                    duration={2}
                >
                    <li className="li-mid">
                        <div className="iphone-half">
                            <div className="eyebrow">
                                <div className="speaker"></div>
                            </div>
                            <img src={step2} />
                        </div>
                        <div className="steps">
                            <h3>Step 2</h3>
                            <p>Once your application is complete our system gets to work for you to find and match you with our projects.
                            </p>
                        </div>
                    </li>
                </ScrollAnimation>
                <ScrollAnimation 
                    animateIn="fadeInRight"  
                    animateOnce={true}
                    duration={2}
                >
                    <li>
                        <div className="iphone-half">
                            <div className="eyebrow">
                                <div className="speaker"></div>
                            </div>
                            <img src={step3} />
                        </div>
                        <div className="steps">
                        <h3>Step 3</h3>
                            <p>When we match you to a project or company that needs your skills we connect you directly with the opportunity.
                            </p>
                        </div>
                    </li>
                </ScrollAnimation>
           </ul>
        </section>
    )
}
