import React from 'react'
import AboutHero from './AboutHero'
import AboutSection1 from './AboutSection1';
import AboutSection2 from './AboutSection2';
import squad from '../../subcontractors.jpeg'
import { Link } from 'react-router-dom';

export default function About() {
    return (
        <>
            <AboutHero />
            <section className="about-container">
              <div className="our-story">
                <AboutSection1 />
                <AboutSection2 />
              </div>
            </section>
            <section className="about-container-2">
                <h2 className="title">Our Story Continued...</h2>
                <div className="continued">
                    <div className="continued-card">
                        <p>
                        The first cohort of customers to endorse ManyBuild were from the Latino community in and around Denver, CO.  Putting the community forward and listening deeply steers ManyBuild’s software development and hiring decisions.  Today ManyBuild has a robust bilingual offering and a simple membership structure that does not nickle and dime it’s customers. 
                        <br />
                        <br />
                        ManyBuild hires community champions eager to cultivate their own practice.
                        <br />
                        <br />
                        This passion for our members effectively intersects expertise with the community. ManyBuild believes that what sustains a platform is promoting the dignity of every individual.  Choosing to specialize in a field means that you are completely devoted to it; that you will protect it as if it were your own. That is the energy that sets ManyBuild apart.
                        </p>
                        <div className="continued-image-container">
                            <img src={squad} alt="manybuild"/>
                        </div>
                    </div>
                </div>
                <div className="core-values-container">
                    <h2 className="title">Core Values</h2>
                    <ul className="core-values-list">
                        <li>
                            <h3>Build with those who Build </h3>
                            <p> To understand a person you need to meet them where they are.</p> 
                        </li>

                        <li>
                            <h3>Promote Dignity </h3>
                            <p> Helping people elevate their businesses so that they can do more. </p>
                        </li>

                        <li>
                            <h3>Communicate </h3>
                            <p> We’ve created communication protocols so creators and contractors can communicate seamlessly.  </p>
                        </li>

                        <li>
                            <h3>Scalable Prosperity </h3>
                            <p> We even the playing field so everyone has the opportunity to make money in construction in a fair and equitable manner. </p>
                        </li>

                        <li>
                            <h3>Honor and Respect work </h3>
                            <p> We enable and encourage our users to take pride in their work.  </p>
                        </li>

                        <li>
                            <h3>Showcase your craft </h3>
                            <p>On our platform we celebrate and share our user's construction expertise.  </p>
                        </li>

                        <li>
                            <h3>Authenticity </h3>
                            <p> Genuine projects and connections are the backbones of the relationships on our platform. We strive to ensure all our projects posted are real and accurate. </p>
                        </li>

                        <li>
                            <h3>Trust </h3>
                            <p> ManyBuild earns our users’ trust by facilitating business growth and awarding real work with real contracts.  </p>
                        </li>

                        <li>
                            <h3>Sustainable Growth </h3>
                            <p> We are continually providing our users with the administrative and marketing tools their business’ needs to thrive.  </p>
                        </li>

                        <li>
                            <h3>Team </h3>
                            <p>Few things are successfully built by one person alone; we are constantly looking to reduce friction between people and processes so that we can all accomplish more.</p>
                        </li>
                        <Link to="/contact">
                            <button className="facts-button">Interested in opportunities at ManyBuild? Click Here </button>
                        </Link>
                    </ul>
                </div>
            </section>
        </>
    )
}
