import React from 'react'
import {Link} from 'react-router-dom'


export default function Navbar({navbar}) {
    return (
        <nav>
          <section className="nav-container">
            <div className="image-heading">
              <img src="/MBsmall.png" alt="manybuild"/>
              MANYBUILD
            </div>
            <ul>
              <li><Link to='/home'>{navbar[0]}</Link></li>
              <li><Link to='/about'>{navbar[1]}</Link></li>
              <li><Link to='/roadmap'>{navbar[2]}</Link></li>
              <li><Link to='/team'>{navbar[3]}</Link></li>
              <li><Link to='/contact'>{navbar[4]}</Link></li>
            </ul>
          </section>
        </nav>
    )
}
