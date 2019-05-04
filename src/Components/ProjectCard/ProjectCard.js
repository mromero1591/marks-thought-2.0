import React from 'react'

export default function ProjectCard(props) {
  return (
    <div className="project-card">
        <div className="project-card-img">
            <img src={props.img} alt="sublasa"/>
        </div>
        <div className="project-card-title">{props.title}</div>
    </div>
  )
}
