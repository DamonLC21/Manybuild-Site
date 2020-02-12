import React, {useState, useEffect} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Mission from './components/Mission';
import Explore from './components/Explore';
import ProjectCreation from './components/ProjectCreation';

function App() {
  const [cardInfo, setCardInfo] = useState([])

  useEffect(() => {
    fetch('./projectCreation.json')
      .then(response => response.json())
      .then(({data}) => setCardInfo(data))
  }, [])

  return (
    <div>
      <header>
        <Navbar />
        <Hero />
      </header>
      <Explore />
      <Mission />
      <ProjectCreation cardInfo={cardInfo} />
    </div>
  );
}

export default App;
