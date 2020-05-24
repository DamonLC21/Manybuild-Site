import React, {useState, useEffect} from 'react';
import './App.css';
import { Route,Redirect, Switch } from 'react-router-dom';
import Landing from './Pages/Landing';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Team from './Pages/Team';
import Contact from './Pages/Contact';
import About from './Pages/About/About';
import Facts from './Pages/Facts'
import Home from './Pages/Home'

function App() {
  const [content, setContent] = useState({})
  const [lang, setLang] = useState("")

  useEffect(handleComponentUpdate, [lang])

  function handleComponentUpdate(){
    setLocalStorage()
    fetchContent()
  }

  function setLocalStorage(){
    if(lang){
      localStorage.setItem("language", lang)
    }
  }

  function fetchContent(){
    fetch('/content.json')
      .then(handleResponse)
      .then(setSiteContent)
  }

  function setSiteContent({data}){
    let content = (lang === "english") ? data.english : data.espanol
    setContent(content)
    setSiteLanguage()
  }

  function setSiteLanguage(){
    if(localStorage.language && !lang){
      setLang(localStorage.language)
    }
  }

  function handleResponse(response){
    return response.json()
  }
  
  return (
    <>
      {lang ? <Navbar navbar={content.navbar} lang={lang}/> : null}
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route exact path="/home/:language">
          {content.hero ? <Home content={content} lang={lang} setLang={setLang}/> : null }
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
