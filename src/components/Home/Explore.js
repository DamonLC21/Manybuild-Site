import React from 'react'

export default function Explore({title, button}) {
    return (
        <div className='explore'>
            <h2>{title}</h2>
            <a href="https://market.manybuild.app/" target="_blank" rel="noopener noreferrer">
                <button>{button}</button>
            </a>
        </div>
    )
}
