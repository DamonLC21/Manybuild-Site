import React from 'react'

export default function ProjectCreation({cardInfo}) {

    const showCards = cardInfo.map(card => (
        <li className="info-card">
            <h3>{card.title}</h3>
            <h4>{card.hook}</h4>
            <p>{card.content}</p>
        </li>
    ))

    return (
        <ul className="project-creation">
            {showCards}
        </ul>
    )
}
