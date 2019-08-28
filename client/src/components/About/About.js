import React from 'react'
import './About.css'

const About = props => (

        <div className="blurb blurb_about about__flex">
            <div className="about_title theme_family"> Web Developer</div>
                <div className="about_body theme_family">
                        I'm a developer who enjoys the puzzle of a well-run application.
                        Previously I developed, tested and deployed automated trading strategies in several derivative markets.
                        Currently, I am web developer at <a className="tst-link" rel="noopener noreferrer"  href="https://www.topsteptrader.com/" target="_blank">TopstepTrader</a> a fintech company that provides frunding to retail derivatives traders.
                        I am also a Teaching Assistant at <a className="nu-link" rel="noopener noreferrer"  href="https://bootcamp.northwestern.edu/coding/">Northwestern University Coding Bootcamp</a>. Being a part of the instructional staff
                        allows me to help students stay motivated, engaged & focused, while maintaining best practices and continuing to learn
                        emerging technologies. This site is a fullstack application in React, Node.js, MySQL, Express stack.
                </div>
                <div className="about_skills theme_family">
                        <div className="icon__container">
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
        </div>
)

export default About;