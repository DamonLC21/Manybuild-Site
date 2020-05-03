import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll';
import team_image from '../../working-together.jpeg'
import { Link } from 'react-router-dom'

export default function AboutSection2() {
    return (
        <section className="our-content-section-2">
        <div className='resize-cards'>
            <div className="our-mission-card">
                    <h2>Our Mission</h2>
                    <br />
                    <h3>We exist to share and spread opportunity.</h3>
                    <br />
                    <p>
                    With the right community, you can build anything.  Construction and real estate professionals are harnessing ManyBuild because they spend more time building and completing projects, and less time wasting money. ManyBuild is fostering a community where an honest day’s work meets a quality build. 
                    </p>
            </div>
            <div className="our-story-image p-image">
                <img src={team_image} />
            </div>
        </div>
        <div className="cards-right resize-cards">
            <div className="our-vision-card">
                <h2>Our Vision</h2>
                <br/>
                <h3>The most trusted construction platform in the world.  </h3>
                <br/>
                <p>ManyBuild is the trusted destination where the construction industry and tradespeople come together to build the places we live, work, and play in. Where together we become our customer’s partners for life.  
                <br/>
                <br/>
                Technology is already changing the way work initiates. Many heavily financed companies are doing it poorly. A few of these companies are actively taking advantage of small business and contractors. Alex and Stefan want something different, something better.
                <br />
                <br />
                A community forward company is the result of wanting something better for users and investors. ManyBuild at its heart is a success platform for its members.   
                </p>
                <br />
            </div>
            <br />
            <br />
            <br />
            <ScrollAnimation 
                animateIn="shake"  
                animateOnce={true}
                duration={2}
                initiallyVisible={true}
                > 
                <Link to="/team">
                    <p className="p-link">Get to know the team building the ManyBuild platform.</p>
                </Link>
            </ScrollAnimation>
        </div>
    </section>
    )
}

 