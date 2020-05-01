import React from 'react'
import Navbar from '../Navbar'
import Hero from './Hero'
import { useHistory, useRouteMatch } from 'react-router-dom'

export default function Header({hero, navbar, setLang}) {
    let {params: {lang}} = useRouteMatch()

    if(lang === "espanol"){
        setLang("espanol")
    }
    else{
        setLang("english")
    }

    return (
        <header>
            <Navbar navbar={navbar}/>
            <Hero hero={hero} />
        </header>
    )
}
