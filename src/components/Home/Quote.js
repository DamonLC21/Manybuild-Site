import React from 'react'
import {Link} from 'react-router-dom'
export default function Quote() {
    return (
        <section className="walt-quote">
            <h2 >“You can design and create, and build the most wonderful place in the world. But it takes people to make the dream a reality.”
            </h2>
            <Link to="/facts">
                <button className="facts-button">Learn the realities of labor in the construction market today</button>
            </Link>
        </section>
    )
}
