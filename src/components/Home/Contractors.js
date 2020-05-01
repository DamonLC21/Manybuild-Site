import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll';
import contractors from '../../contractors.jpeg'
import subcontractors from '../../subcontractors.jpeg'


export default function Contractors() {
    return (
        <section className='divider'>
            <h2>What We Do</h2>
            <section>
                <ul className="contractors">
                    <li className="contractor-card-left">
                        <ScrollAnimation 
                            animateIn='zoomInUp'  
                            animateOnce={true}
                            duration={1}
                        >
                            <div className="image-section-left">
                                <img src={contractors} alt="manybuild" />
                            </div> 
                        </ScrollAnimation>
                        <div className='content-section'>
                            <h3>General Contractors</h3>
                            <p>
                                With ManyBuild you can post your project to our marketplace and we will handle the rest! 
                                <br /> <br />
                                Get matched with over 385+ subcontractors in our network to receive bids for your next project. 
                                <br /> <br />
                                Our users have been able to save 6-10% on average.
                            </p>
                        </div>
                    </li>
                    <li className="contractor-card">
                        <div className='content-section'>
                            <h3>Subcontractors</h3>
                            <p>
                                Register your company with us today to get access to new construction and remodel projects in your area.  
                                <br /> <br />
                                Don’t have a company registered yet? 
                                <br /> <br /> 
                                No problem our team will help you get your business started and connect you with your very first project.
                            </p>
                        </div>
                        <ScrollAnimation 
                            animateIn='zoomInUp'  
                            animateOnce={true}
                            duration={1}
                        >
                        <div className="image-section">
                            <img src={subcontractors} alt="manybuild" />
                        </div>
                        </ScrollAnimation>
                        
                    </li>
                </ul>
            </section>
        </section>
    )
}
