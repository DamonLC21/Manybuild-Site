import React from 'react'


export default function Navbar() {
    return (
        <nav>
          <section className="nav-container">
            <div className="image-heading">
              <img src="./MBsmall.png" alt="manybuild"/>
              MANYBUILD
            </div>
            <ul>
              <li><a href='/'>Home</a></li>
              <li><a href='/'>About</a></li>
              <li><a href='/'>Roadmap</a></li>
              <li><a href='/'>Team</a></li>
              <li><a href='/'>Contact</a></li>
            </ul>
          </section>
        </nav>
    )
}
