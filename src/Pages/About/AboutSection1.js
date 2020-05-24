import React, { Component } from 'react'
import helmets from '../../manybuild_helmets.jpeg'

export default class AboutSection1 extends Component {
    render() {
        return (
            <section className="our-content-section-1">
                <div className="our-story-content">
                    <h2>Our Story</h2>
                    <br/>
                    <h3>Passion. Experience. Community.</h3>
                    <br/>
                    <p>ManyBuild was created as a response to an ever growing and evolving construction market. Alex Lovera, the company’s founder and a third generation builder himself, wanted to create a space where builders got ahead based on the quality of their work and the earnisty of their efforts. Alex spent the first few years of the business listening to and learning from the building community.  Soon after partnering with his co-founder, Stefan Norton, they launched ManyBuild’s first app.  </p>
                </div>
                <div className="our-story-image">
                    <img src={helmets} alt="manybuild" />
                </div>
            </section>
        )
    }
}
