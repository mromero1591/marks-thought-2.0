import React from 'react'

export default function ProjectCard(props) {
  return (
    <div className="project-card">
      <a href="https://www.sublasa.com" target='_blank' rel="noopener noreferrer"><div className="project-card-title">{props.title}</div></a>
      <a href="https://www.sublasa.com" target='_blank' rel="noopener noreferrer">
        <div className="project-card-img">
            <img src={props.img} alt="sublasa"/>
        </div>  
      </a>
    </div>
  )
}
