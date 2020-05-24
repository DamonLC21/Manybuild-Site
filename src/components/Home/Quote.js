import React from 'react'
import {Link} from 'react-router-dom'
export default function Quote({quote,button}) {
    return (
        <section className="walt-quote">
            <h2>{quote}</h2>
            <Link to="/facts">
                <button className="facts-button">{button}</button>
            </Link>
        </section>
    )
}
