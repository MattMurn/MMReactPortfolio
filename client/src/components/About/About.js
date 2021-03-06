import React from 'react'
import './About.css'

const About = ({id, imgSrc, imgClick, skillsToggleClass, arrowToggleClass}) => (

        <div className="blurb blurb_about about__flex">
                <br/>
                <br/>
                <br/>
            <div className="about_title theme_family"> Full-Stack Developer</div>
            <div id={id}/>
                <div className="about_body theme_family">
                        I'm a developer who enjoys the puzzle of a well-run application.
                        Previously I developed, tested and deployed automated trading strategies in several derivative markets.
                        Currently, I build websites & applications at <a className="tst-link" rel="noopener noreferrer"  href="https://www.topsteptrader.com/" target="_blank">TopstepTrader</a>, a fintech company that provides funding to retail traders.
                        I'm also a Teaching Assistant at <a className="nu-link" rel="noopener noreferrer"  href="https://bootcamp.northwestern.edu/coding/">Northwestern University Coding Bootcamp</a>, which allows to learn
                        emerging technologies, while mentoring students and leading lectures on industry best practices.
                </div>
                <div className="about_skills theme_family" onClick={imgClick}>
                        <div className="about__skills__title">Tech Skills </div>
                        <img className={arrowToggleClass} src={imgSrc} alt=""/>
                </div>

                        <div className={skillsToggleClass}>
                                <i className=" icon devicon-bootstrap-plain-wordmark colored"></i>
                                <i className=" icon devicon-css3-plain-wordmark colored"></i>
                                <i className=" icon devicon-express-original-wordmark"></i>
                                <i className=" devicon-git-plain colored icon"></i>
                                <i className=" icon devicon-jquery-plain-wordmark colored"></i>
                                <i className=" icon devicon-mysql-plain-wordmark colored"></i>
                                <i className=" icon devicon-nodejs-plain colored"></i>
                                <i className=" icon devicon-python-plain colored"></i>
                                <i className=" icon devicon-react-original-wordmark colored"></i>
                                <i className=" icon devicon-sequelize-plain-wordmark colored"></i>
                                <i className=" icon devicon-javascript-plain colored"></i>
                                <i className=" icon devicon-html5-plain-wordmark colored"></i>
                        </div>
        </div>
)

export default About;