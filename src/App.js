import React, {useState, useEffect} from 'react';
import './App.css';
import Mission from './components/Home/Mission';
import Explore from './components/Home/Explore';
import ProjectCreation from './components/Home/ProjectCreation';
import { Route, useRouteMatch } from 'react-router-dom';
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

function App() {
  const [content, setContent] = useState({})
  const [cardInfo, setCardInfo] = useState([])
  const [team, setTeam] = useState([])
  const [lang, setLang] = useState("english")

  useEffect(() => {
    fetch('/projectCreation.json')
      .then(response => response.json())
      .then(({data}) => {
        let content = (lang === "english") ? data.english : data.espanol
        setContent(content)
        setCardInfo(content.projectCreation)
        setTeam(content.team)
      })
  }, [lang])
  
  return (
    <>
      <Route exact path="/">
        <Landing />
      </Route>
        {content.navbar ? <Navbar navbar={content.navbar} lang={lang}/> : null}
      <Route path="/home/:language">
        {content.hero ? <Header hero={content.hero} navbar={content.navbar} lang={lang} setLang={setLang}/> : null}
        <Explore />
        <Mission />
        <Contractors />
        <Roadmap />
        <ProjectCreation cardInfo={cardInfo} />
        <SVG />
        <section className="gradient">
          <Quote />
          <Technology />
          <LookingForWork />
        </section>
        {/* <div style="height: 100px;overflow: hidden;margin-top: -60px;position: absolute;width: 100%;"><svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%;"><path d="M0.00,49.98 C217.55,129.77 298.24,-15.28 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style="stroke: none;fill: #263c5a;"></path></svg></div> */}
      </Route>

      <Route exact path="/team" render={(props) => <Team team={team} />} />
      <Route exact path="/contact" render={(props) => <Contact />} />
      <Route exact path="/about" render={(props) => <About />} />

      <Footer />
    </>
  );
}

export default App;
