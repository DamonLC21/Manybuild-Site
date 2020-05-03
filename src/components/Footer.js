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
                <img src={logo}/>
                <p>ManyBuild Inc <br/> 4045 N Pecos St <br/> Denver, CO 80211</p>
                <p>(720) 334-8842 <br/> info@ManyBuildSolutions.com <br/><Link to="/contact">Contact</Link></p>
                
                <section className="icons">
                    <Twitter />
                    <Instagram />
                    <Facebook />
                    <LinkedIn />
                </section>
            </div>
            <p className="copyright">Copyright 2019 Many Build Solutions. All rights reserved.</p>
            
        </footer>
    )
}
