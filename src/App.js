import React, {useState, useEffect} from 'react';
import './App.css';
import Mission from './components/Home/Mission';
import Explore from './components/Home/Explore';
import ProjectCreation from './components/Home/ProjectCreation';
import { Route, useRouteMatch, Redirect, Switch } from 'react-router-dom';
import Header from './components/Home/Header';
import Landing from './components/Landing';
import Contractors from './components/Home/Contractors';
import Roadmap from './components/Home/Roadmap';
import SVG from './components/Home/SVG'
import Technology from './components/Home/Technology'
import Footer from './components/Footer';
import LookingForWork from './components/Home/LookingForWork';
import Quote from './components/Home/Quote';
import Navbar from './components/Navbar';
import Team from './components/Team';
import Contact from './components/Contact';
import About from './components/About/About';
import Facts from './components/Facts'


function App() {
  const [content, setContent] = useState({})
  const [cardInfo, setCardInfo] = useState([])
  const [lang, setLang] = useState("")

  useEffect(() => {
    if(lang){
      localStorage.setItem("language", lang)
    }
    fetch('/projectCreation.json')
      .then(response => response.json())
      .then(({data}) => {
        let content = (lang === "english") ? data.english : data.espanol
        setContent(content)
        setCardInfo(content.projectCreation) 
        if(localStorage.language && !lang){
          setLang(localStorage.language)
        }
      })
  }, [lang])
  
  return (
    <>
      {lang ? <Navbar navbar={content.navbar} lang={lang}/> : null}
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route exact path="/home/:language">
          {content.hero ? <Header hero={content.hero} navbar={content.navbar} lang={lang} setLang={setLang}/> : null}
          <Explore {...content.explore} />
          <Mission {...content.mission}/>
          {content.contractors ? <Contractors {...content.contractors} /> : null}
          <Roadmap roadmap={content.roadmap} />
          <ProjectCreation cardInfo={cardInfo} />
          <SVG />
          <section className="gradient">
            <Quote />
            <Technology />
            <LookingForWork />
          </section>
        </Route>
        <Route exact path="/team" render={(props) => <Team team={content.team} /> }/> 
        <Route exact path="/contact" render={(props) => <Contact />} />
        <Route exact path="/about" render={(props) => <About />} />
        <Route exact path="/facts" render={(props) => <Facts />} />
        <Redirect to={`/home/${lang}`} />
      </Switch>
      {lang ? <Footer /> : null}
    </>
  );
}

export default App;
