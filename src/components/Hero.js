import React from 'react'


export default function Hero() {
    return (
        <section className="hero">
          <div className="overlay">
            <div className="hero-container"> 
            <div>
              Image will go here
            </div>
              <div className="heading">
                <h1>MANYBUILD</h1>
                <p className="quote">“With the right team we can build anything”</p>
                <p className="subtext">Contact us today to have us manage your construction bidding process with access to over 385+ subcontractors. Close to $1,000,000 in construction projects awarded in the past two months!</p>
                <button>Learn More</button>
              </div>
            </div>
          </div>
          <video 
            src='https://d2pxo8g26zv991.cloudfront.net/wp-content/uploads/2014/10/HomeVideo_v04_1.mp4#t=20' 
            className="video"
            autoPlay 
            muted 
            loop>
          </video>
      </section>
    )
}
