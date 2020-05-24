import React from 'react'
import img from '../manybuild.jpg'
import { easeQuadInOut } from "d3-ease";
import AnimatedProgressProvider from "../components/AnimatedProgressProvider";
import ChangingProgressProvider from "../components/ChangingProgressProvider";
import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
    buildStyles
  } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ScrollAnimation from 'react-animate-on-scroll'
import VisibilitySensor from 'react-visibility-sensor';
import PercentageBar from '../components/PercentageBar';


export default function Facts() {
    return (
        <section className="facts-container">
             <section className="about-hero">
                <div className="about-overlay">
                    <section className="hero-container"> 
                        <div className="about-heading"> 
                            <h1>FACTS</h1>
                        </div>
                    </section>
                </div>
                <img className="about-hero-image" src={img} />
            </section>
            <section className="facts-content">
                <div className='facts-section-1'>
                    <div  className='facts-card left'>
                        <h2>Meet the people that build our homes.</h2>
                        <p>The average home has so many specialized components that it is nearly impossible for any one company to to have the expertise in every speciality.  Home builders subcontract with outside companies for most every aspect of construction.  The national average is 22 subcontractors to build a new home.  Specialities range from framing to countertops to HVAC to many more.</p>
                    </div>
                    <div  className='facts-card right'>
                        <PercentageBar percentage={90} pathColor="#f8b612" textColor="#263c5a" animation={"zoomInDown"} />
                        <h3>90% of builders always subcontract with the 11 most common types of contractors.</h3>
                        <p className="important">2% of builders use over 51 subcontractors to build each and every home.</p>
                    </div>
                    <div  className='facts-card left'>
                    <PercentageBar percentage={77} pathColor="#f8b612" textColor="#263c5a" animation={"rollIn"} />
                        <h3>On average 77% of construction costs are subcontracted</h3>
                    </div>
                </div>
                <div className='facts-section-2'>
                    <div>
                        <h2>The 22 most common subcontractors in homebuilding</h2>
                        <ol>
                            <div>
                                <li>Fireplace</li>
                                <li>Roofing</li>
                                <li>HVAC</li>
                                <li>Framing</li>
                                <li>Finished Carpentry</li>
                                <li>Painting and Wall Coverings</li>
                                <li>Exterior Doors and Windows</li>
                                <li>Drywall</li>
                                <li>Exterior Siding</li>
                                <li>Electrical Wiring</li>
                                <li>Plumbing</li>
                            </div>
                            <div>
                                <li>Flooring</li>
                                <li>Masonry</li>
                                <li>Interior Doors</li>
                                <li>Technliogy</li>
                                <li>Ceramic Tiles</li>
                                <li>Security System</li>
                                <li>Kitchen Cabinets</li>
                                <li>Kitchen Countertops</li>
                                <li>Carpeting</li>
                                <li>Concrete Flatwork</li>
                                <li>Foundations</li>
                            </div>
                        </ol>
                    </div>
                    <div className='facts-section-3 fact-listing'>
                        <ScrollAnimation 
                            animateIn="flipInX"  
                            animateOnce={true}
                            duration={1}
                            >
                            <div className="fact-card-transparent blue">
                                <h3>Most common Subcontractors Used</h3>
                                <ul>
                                    <li>Security Systems</li>
                                    <li>Carpenting</li>
                                    <li>HVAC</li>
                                    <li>Electrical Wiring</li>
                                    <li>Plumbing</li>
                                </ul>
                            </div>
                        </ScrollAnimation>
                        <ScrollAnimation 
                            animateIn="rotateInUpRight"  
                            animateOnce={true}
                            duration={1}
                        >
                            <div className="fact-card-transparent">
                                <h3>Least common jobs given to subcontractors</h3>
                                <ul>
                                    <li>Finished Carpentry</li>
                                    <li>Interior Doors</li>
                                    <li>Exterior Siding</li>
                                    <li>Framing</li>
                                    <li>Exterior Doors</li>
                                    <li>Windows</li>
                                </ul>
                            </div>
                        </ScrollAnimation>
                </div>
                </div>
                <div className='facts-section-4 fact-closing'>
                    <h2 className="title">Construction continues to struggle to get back on its feet.</h2>
                    <div className="facts-p-list">
                        <div>
                            <PercentageBar percentage={40} pathColor="#263c5a " textColor="#f8b612" animation="slideInDown" />
                            <p className="fact-p-style-1">40% of the work force in the construction industry were eliminated between 2006 and 2011; nearly 2.3 million jobs.  Qualified labor fled the construction market during the recession and subsequent years of struggle.  As the industry rebounds workers are not flooding back.  Especially missing from the market is skilled craft labor.  Home builders simply cannot find the qualified workers needed to start new projects.</p>
                        </div>
                        <div>
                        <PercentageBar percentage={84} pathColor="#f8b612" textColor="#263c5a" animation="zoomIn" />
                            <p className="fact-p-style-2">The Associated General Contractors of America report that 84% of construction firms are struggling to find enough carpenters, laborers, and equipment operators.  ACG Chief Economist Ken Simonson told Jeffrey Sparshott of The Wall Street Journal that “the combination of having had this massive long exodus, a late pick up in hiring and now this greatly diminished pool of workers … has contractors scrambling.”</p>
                        </div>
                        <div>
                            <PercentageBar percentage={22} pathColor="#263c5a " textColor="#f8b612" animation="slideInDown" />
                            <p className="fact-p-style-1">22% of the construction labor force are immigrants ~ US Census Bureau
                        <br/>
                        Over 60 million people have a first language other than English in the United States.  Creating opportunities to make connections takes work, however  the rewards are well worth the effort. </p>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}

