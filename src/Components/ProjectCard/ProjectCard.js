import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ProjectCard(props) {
    return (
        <div className="project-card">
            <div className="project-card-img">
                <img src={props.img} alt="sublasa" />
            </div>
            <div className="project-card-button-group">
                <a
                    href="https://github.com/mromero1591/sublasa.git"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button>
                        <FontAwesomeIcon icon={["fab", "github"]} /> Github
                    </button>
                </a>
                <a
                    href="https://www.sublasa.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button>
                        {" "}
                        <FontAwesomeIcon icon={["fab", "chrome"]} /> Go To site
                    </button>
                </a>
            </div>
        </div>
    );
}
