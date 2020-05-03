import React from 'react'
import vid from '../../ManyBuild.MOV'
import logo from '../../MBlogo.png'
import {Link} from 'react-router-dom'



export default function Hero({hero: {heading, quote, subtext, button}}) {
    return (
        <section className="hero">
          <div className="overlay">
            <section className="hero-container"> 
              <div className="heading">
                <img src={logo} id="hero-logo" alt="hero-logo" />
                <h1>{heading}</h1>
                <p className="quote">{quote}</p>
                <p className="subtext">{subtext}</p>
                <Link to='/contact'>
                  <button>{button}</button>
                </Link>
              </div>
            </section>
          </div>
          <video 
            src={vid}
            className="video"
            autoPlay 
            muted 
            loop>
          </video>
      </section>
    )
}
