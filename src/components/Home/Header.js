import React from 'react'
import Hero from './Hero'
import { useRouteMatch } from 'react-router-dom'

export default function Header({hero, navbar, lang, setLang}) {
    let {params: {language}} = useRouteMatch()

    if(language === "espanol"){
        setLang("espanol")
    }
    else{
        setLang("english")
    }

    return (
        <section>
            <Hero hero={hero} />
        </section>
    )
}
