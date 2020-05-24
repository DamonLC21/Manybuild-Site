// import React from 'react'
import {Link} from 'react-router-dom'
import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { useState, useEffect } from 'react';
import ScrollTop from './ScrollTop'


export default function Navbar({navbar, lang}) {
  const [sticky, setSticky] = useState(false)

  const toggleSticky = () => window.scrollY >= 300 ? setSticky(true) : setSticky(false)

  useEffect(() => {
    window.onscroll = toggleSticky;
  }, [])

  return (
    <React.Fragment>
        <nav id="custom-nav" style={{backgroundColor: sticky ? "#263c5a" : "transparent"}}>
        <section id="nav-container">
             <div className="image-heading">
               <img src="/MBsmall.png" alt="manybuild"/>
               MANYBUILD
             </div>
             <ul>
               <li><Link to={`/home/${lang}`}>{navbar[0]}</Link></li>
               <li><Link to='/about'>{navbar[1]}</Link></li>
               <li><Link to='/facts'>{navbar[2]}</Link></li>
               <li><Link to='/team'>{navbar[3]}</Link></li>
               <li><Link to='/contact'>{navbar[4]}</Link></li>
             </ul>
           </section>
          </nav>
      <Toolbar id="back-to-top-anchor" />
      <ScrollTop>
        <Fab size="small" aria-label="scroll back to top" id="arrow-up">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}

