import React from 'react'
import logo from '../MBlogo.png'
import { Twitter, Instagram, Facebook, LinkedIn } from '@material-ui/icons';
import { Link } from 'react-router-dom';

export default function Footer() {

    const path = "M0.00,49.98 C217.55,129.77 298.24,-15.28 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
    
    return (
        <footer>
            <div className="svg-container">
                <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="wave">
                    <path d={path} className="wave-path"></path>
                </svg>
            </div>
            <div className="footer-content">
                <img src={logo} alt="manybuild"/>
                <div>
                    <h5>Location</h5>
                    <p> ManyBuild Inc <br/> 4045 N Pecos St <br/> Denver, CO 80211</p>
                </div>
                <div>
                    <h5>Contact Us</h5> 
                    <p>(720) 334-8842 <br/> info@ManyBuildSolutions.com </p>
                </div>
                <div className="footer-contacts">
                    <h5>Keep In Touch</h5>
                    <section className="icons">
                        <Twitter />
                        <Instagram />
                        <Facebook />
                        <LinkedIn />
                    </section>
                    <Link to="/contact"><button>Contact</button></Link>
                </div>
                <ul className="footer-nav">
                    <h5>Learn More</h5>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/facts">Facts</Link></li>
                    <li><Link to="/team">Team</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/contact">Marketplace</Link></li>
                </ul>
            </div>
            <p className="copyright">© Copyright 2019 Many Build Solutions. All Rights Reserved.</p>
            
        </footer>
    )
}
