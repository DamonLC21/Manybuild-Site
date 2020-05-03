import React, {useState} from 'react'
import logo from '../MBlogo.png'
import {Link} from 'react-router-dom'

export default function Team({team}) {

    const[activeCard, setActiveCard] = useState({})

    const handleHover = (person) => setActiveCard(person)

    const filterType = (type) => team.filter(person => person.type === type)

    const createCard = ({name, image, title, bio}, i) => (
        <div key={i} 
            className="team-card" 
            onMouseOver={() => handleHover({name, image, title, bio})}
        >
            <div className="circle">
                <img src={image} />
            </div>
            <img src={logo} className="team-logo" />
            <h3>{name}</h3>
            <p>{title}</p>
        </div> 
    )

    const showMember = (type) => {
        return filterType(type).map(createCard)
    }

    return (
        <>
            <div className="team-hero">
                <h1>Meet The Team</h1>
            </div>
            <section className="team-container">
                <h2>Executive Team</h2>
                <li className="team">
                    {showMember("executive")}
                </li>
                <h2>Engineering Team</h2>
                <li className="team">
                    {showMember("engineer")}
                    <div className="join-us">
                        <h2>Want to join our development team?</h2>
                        <Link to="/contact">
                            <button>Join Manybuild</button>
                        </Link>
                    </div>
                </li>
                <h2>Advisors</h2>
                <li className="team">
                    {showMember("advisor")}
                </li>
            </section>
        </>
    )
}
