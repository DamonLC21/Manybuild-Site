import React from 'react'
import vid from '../../marketplace.mov'

export default function Technology({title,subHeading1,subHeading2,p1,p2,p3}) {
    return (
        <section className="technology-container">
            <div className="technology-content">
                <h2>{title}</h2>
                <p>{p1}</p>
                <h3>{subHeading1}</h3>
                <p>{p2}</p>
                <h3>{subHeading2}</h3>
                <p>{p3}</p>
            </div>
            <div className="technology-video">
                <video autoPlay loop src={vid}></video>
            </div>
            <a href="https://market.manybuild.app/" target="_blank" rel="noopener noreferrer">
                <button>Marketplace</button>
            </a>
        </section>
    )
}
