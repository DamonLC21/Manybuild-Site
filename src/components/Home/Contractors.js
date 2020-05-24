import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll';
import contractors from '../../contractors.jpeg'
import subcontractors from '../../subcontractors.jpeg'


export default function Contractors({title, general={}, sub={}}) {
    return (
        <section className='divider'>
            <h2>{title}</h2>
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
                            <h3>{general.heading}</h3>
                            <p>
                                {general.s1}
                                <br /> <br />
                                {general.s2}
                                <br /> <br />
                                {general.s3}
                            </p>
                        </div>
                    </li>
                    <li className="contractor-card">
                        <div className='content-section'>
                            <h3>{sub.heading}</h3>
                            <p>
                                {sub.s1}
                                <br /> <br />
                                {sub.s2}
                                <br /> <br />
                                {sub.s3}
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
