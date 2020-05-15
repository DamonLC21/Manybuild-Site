import React, {Fragment} from 'react'
import logo from '../../MBlogo.png'


export default function ProjectCreation({cardInfo=[]}) {

    const showCards = cardInfo.map((card, i) => (
        <Fragment key={i}>
            <div className="verticle-break"></div>
            <li key={i} className="info-card" >
                <h3 className="card-title">{card.title}</h3>
                <h4 className="card-hook">{card.hook}</h4>
                <p className="card-content">{card.content}</p>
            </li>
        </Fragment>
    ))

    return (
        <section className="project-creation">
            <img src={logo} id='project-logo' alt='project-logo' />
            <h2>Project Creation <span className="manybuild-font-yellow">&</span> Marketplace</h2>
            <ul className="card-container">
                {showCards}
            </ul>
        </section>
    )
}
