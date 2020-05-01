import React, { Component } from 'react'
import ScrollAnimation from 'react-animate-on-scroll';


export default class Roadmap extends Component {
    render() {
        return (
            <section className="divider">
               <h2>Road Map</h2>
                <section className='roadmap'>
                    <ol className='roadmap-list'>
                        <li className='roadmap-item'>
                            <ScrollAnimation 
                                animateIn="fadeIn"  
                                animateOnce={true}
                                duration={4}
                            > 
                                <h3>Marketplace</h3>
                            </ScrollAnimation>
                            <div className='roadmap-card'>
                                <p>
                                    Responding to an ever growing and evolving market ManyBuild launched its marketplace in early 2019.  ManyBuild’s Marketplace early success has been mostly attributed to it’s “community forward” approach.  By processing all of the construction plans, photos, and scopes we are able to access a wider market of construction businesses that are looking to grow.
                                <br />
                                <br />
                                    Opportunity for profit in construction is growing just as fast as the complexity.  Within the first several weeks of launch over $500,000 worth of work has been awarded through our marketplace.  
                                </p>
                            </div>
                        </li>
                        <li className='roadmap-item'>
                           <div className='roadmap-card'>
                                <p>
                                    The way people consume information is moving from the paper pages to the screen.  Construction companies must adapt quickly or risk getting left out of the bidding process.  Current software solutions are confusing or requires hiring staff dedicated to  managing the extra system.  
                                <br />
                                <br />
                                    Our one tap bidding solution will allow our users to quickly submit bids for projects.  Builders can quickly customize each bid using our CSI standardized database with over 6,000+ work outcomes to fit within any project’s scope, size, and budget.
                                </p>
                            </div> 
                            <ScrollAnimation 
                                animateIn="fadeIn"  
                                animateOnce={true}
                                duration={4}
                            > 
                                <h3>Bidding</h3> 
                            </ScrollAnimation>
                        </li>
                        <li className='roadmap-item'> 
                            <ScrollAnimation 
                                    animateIn="fadeIn"  
                                    animateOnce={true}
                                    duration={4}
                                > 
                                <h3>Scheduling</h3>
                            </ScrollAnimation>
                           <div className='roadmap-card'>
                                <p>
                                    Whether you run large scale commercial projects, manage multiple new builds or have a remodel to complete under a tight deadline; knowing when things should happen is half the battle.  
                                <br />
                                <br />
                                    ManyBuild’s smart scheduling solution takes in all available public permitting information and creates a schedule that focus’ your teams efforts  to complete what is necessary to get through each inspection. Go from concept to completion in a easy, trackable and verifiable way . 
                                </p>
                            </div>
                        </li>
                        <li className='roadmap-item'>
                           <div className='roadmap-card'>
                                <p>
                                    Keep track of construction budgets as a project progresses can be very time consuming. Our budgets and schedules are linked so that when your team in the field marks something as completed; the schedule automatically updates and flows all the way through to your budgets. 
                                <br />
                                <br />
                                    No more spending hours every week reconciling, updating and verifying work has been completed. 
                                </p>
                            </div>
                                <ScrollAnimation 
                                    animateIn="fadeIn"  
                                    animateOnce={true}
                                    duration={4}
                                > 
                                    <h3>Budgeting</h3>
                                </ScrollAnimation> 
                        </li>
                        <li className='roadmap-item'>
                            <ScrollAnimation 
                                animateIn="fadeIn"  
                                animateOnce={true}
                                duration={4}
                            > 
                                <h3>Accounting & Payments</h3> 
                            </ScrollAnimation>
                           <div className='roadmap-card'>
                                <p>
                                    Construction projects always require their own set of bank accounts, checks, and bookkeeping. Current software solutions simply layer traditional accounting features but are not fully embedded into the operations of construction management. ManyBuild will be able to standardize it’s accounting solution from the beginning, receiving bids from subcontractors to issuing payments and construction draws.
                                <br /><br />
                                    Quickly view a construction task update, with one click,  see the photo of the work completed together with the updated budget and process the payment through our platform.
                                </p>
                            </div>
                        </li>
                    </ol>
                </section>
            </section>
        )
    }
}
