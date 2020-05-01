import React from 'react'
import img from '../../manybuild.jpg'

export default function Technology() {
    return (
        <section className="divider">
            <section className="technology-container">
                <div>
                    <h2>Technology Contractors Love</h2>
                </div>
                <div>
                    <img src={img} />
                </div>
            </section>
        </section>
    )
}
