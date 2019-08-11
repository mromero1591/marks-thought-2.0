import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import SublasaImg from "../../assets/sublasa_landing.png";
import ProjectCard from "../ProjectCard/ProjectCard";
import resumeFile from "../../assets/resume.pdf";
import host2 from "../../assets/host-me.svg";
import path from "../../assets/new_path.svg";
import revPath from "../../assets/rev_path.svg";
import Footer from "../Footer/Footer";

export default function Home() {
    var clipPath = () => {
        return {
            background: `url(${path})`,
            backgroundSize: "cover"
        };
    };

    var revClipPath = () => {
        return {
            background: `url(${revPath})`,
            backgroundSize: "cover"
        };
    };
    return (
        <div className="home-wrapper">
            <header className="landing-wrapper">
                <div>
                    <h1 className="landing-title">Mark Romero</h1>

                    <h4 className="landing-subtext space-divider">
                        HI Im a Software Developer <br /> With a passion for
                        learning and exploring.
                    </h4>

                    <div className="landing-logos space-divider">
                        <a
                            href="https://github.com/mromero1591"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <FontAwesomeIcon icon={["fab", "github"]} />
                        </a>
                        <a
                            href="https://linkedin.com/in/markromero1591"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <FontAwesomeIcon icon={["fab", "linkedin-in"]} />
                        </a>
                        <a href={resumeFile} download>
                            <FontAwesomeIcon icon="file-alt" />
                        </a>
                    </div>
                </div>

                <div className="landing-img show-img">
                    <img src={host2} alt="radio host" />
                </div>
            </header>

            <div className="home-projects-container">
                <section
                    className="home-projects-wrapper space-divider"
                    style={clipPath()}
                >
                    <h1 className="section-title">Projects</h1>

                    <div className="project-cards-container">
                        <ProjectCard img={SublasaImg} title={"Sublasa"} />
                        <div className="project-content">
                            <ul>
                                <li>
                                    <strong>Tech Used :</strong> React |
                                    JavaScript | NodeJs | PostgresSQL | npm |
                                    Bulma | Google API
                                </li>
                                <li>
                                    <strong>Summary :</strong> Site allows a
                                    user to subscribe and read their favorite
                                    newsletter without having to share their
                                    email or personal information with dozens of
                                    companies.{" "}
                                </li>
                                <li className="project-card-notes">
                                    <strong>Notes:</strong> <br />
                                    Used google apis to manage newsletter
                                    subscriptions by moving over their content
                                    in html format to display on the site <br />
                                    Used local autorization to create and manage
                                    user profiles, allowing them to subscirbe to
                                    indvidual newsletters. <br />
                                    Used postgres and JavaScript to determin
                                    newsletters that have been read allowing the
                                    site to surface most popular newsletters.
                                </li>
                            </ul>
                        </div>
                        {/* <button className='btn'>More Projects</button> */}
                    </div>
                </section>
                <section className="home-about-me-wrapper space-divider">
                    <h1 className="section-title">Get To Know Me</h1>

                    <div className="sub-title">My Experience</div>

                    <div className="about-me-container">
                        <p>
                            I am a Software Engineer who is passionate about the
                            web, and the amazing experiences and opportunities
                            that it can give in a matter of seconds. I love
                            Problem solving, and building Products and Services
                            that can scale and be easily improved on.
                        </p>
                        <div>
                            Software Developer @ Agility Digital Inc - Current
                        </div>
                        <div>
                            Software Development Manager @ Entrata - 4 years
                        </div>
                        <div>Migration Consultant @ Entrata - 1 year</div>
                    </div>
                </section>

                <section
                    className="home-skills-wrapper space-divider"
                    style={revClipPath()}
                >
                    <h1 className="section-title">Skills</h1>
                    <div className="skills-list">
                        <span>
                            <FontAwesomeIcon icon={["fab", "html5"]} />
                            HTML5{" "}
                        </span>
                        <span>
                            <FontAwesomeIcon icon={["fab", "css3-alt"]} />
                            CSS3
                        </span>
                        <span>
                            <FontAwesomeIcon icon={["fab", "js"]} />
                            JavaScript
                        </span>
                        <span>
                            <FontAwesomeIcon icon={["fab", "react"]} />
                            React
                        </span>
                        <span>
                            <FontAwesomeIcon icon={["fab", "node"]} />
                            NodeJs
                        </span>
                        <span>
                            <FontAwesomeIcon icon="database" />
                            PostgresSQL
                        </span>
                    </div>
                </section>

                <section className="home-contact-me space-divider">
                    <h1 className="section-title">Contact Me</h1>

                    <div className="contact-list">
                        <a href="mailto:mromero1591@gmail.com">
                            <FontAwesomeIcon icon="envelope" />
                        </a>
                        <a
                            href="https://linkedin.com/in/markromero1591"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <FontAwesomeIcon icon={["fab", "linkedin-in"]} />
                        </a>
                    </div>
                </section>
            </div>
        </div>
    );
}
