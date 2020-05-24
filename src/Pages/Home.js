import React from 'react'
import Header from '../components/Home/Header'
import Explore from '../components/Home/Explore'
import Mission from '../components/Home/Mission'
import Contractors from '../components/Home/Contractors'
import Roadmap from '../components/Home/Roadmap'
import ProjectCreation from '../components/Home/ProjectCreation'
import SVG from '../components/Home/SVG'
import Quote from '../components/Home/Quote'
import Technology from '../components/Home/Technology'
import LookingForWork from '../components/Home/LookingForWork'

export default function Home({content, lang, setLang}) {
    return (
        <>
            <Header hero={content.hero} navbar={content.navbar} lang={lang} setLang={setLang}/> 
            <Explore {...content.explore} />
            <Mission {...content.mission}/>
            <Contractors {...content.contractors} />
            <Roadmap roadmap={content.roadmap} />
            <ProjectCreation cardInfo={content.projectCreation} />
            <SVG />
            <section className="gradient">
            <Quote {...content.quote} />
            <Technology {...content.technology}/>
            <LookingForWork {...content.looking}/>
            </section>
        </>
    )
}
