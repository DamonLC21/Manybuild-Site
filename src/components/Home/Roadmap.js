import React, { Component } from 'react'
import ScrollAnimation from 'react-animate-on-scroll';


export default function Roadmap({roadmap=[]}) {
    return (
        <section className="divider">
            <h2>Road Map</h2>
            <section className='roadmap'>
                <ol className='roadmap-list'>
                    {showRoadmapItems(roadmap)}
                </ol>
            </section>
        </section>
    )
}

function showRoadmapItems(roadmap){
    return roadmap.map(createRoadmapItem)
}

function createRoadmapItem(item, i){
    return roadmapListItem(item, i)
}

function roadmapListItem({heading, p1, p2}, i){
    return (
        <li className='roadmap-item' key={heading}>
            {(i % 2 === 0) ? showHeading(heading) : null}
            <div className='roadmap-card'>
                <p>{p1} <br /><br />{p2}</p>
            </div>
            {(i % 2 === 0) ? null : showHeading(heading)}
        </li>
    )
}

function showHeading(heading){
    return (
        <ScrollAnimation 
            animateIn="fadeIn"  
            animateOnce={true}
            duration={4}
        > 
            <h3>{heading}</h3>
        </ScrollAnimation>
    )
}