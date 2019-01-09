import React from 'react'
import './About.css'

const About = ({aboutClass}) => (
            <div className={aboutClass} id="about_scroll"> 
            <div className="about_title theme_family">Fullstack Web Developer</div>
                <p className="about_body theme_family">
                        Thanks for checking my portfolio.
                        I'm a developer who enjoys the puzzle of a well run application and am looking for a 
                        development opportunities that will allow me to collaborate and help solve some of your company's problems.
                        Currently, I am consulting on a software trade secrets litigation building a native UI application that 
                        allow our team access trial exhibits in various doucment formats, along with topic specific summary charts.
                        I am also a Teaching Assistant at Northwestern University Coding Bootcamp. Being a part of the instructional staff 
                        allows me to help students stay motivated, engaged & focused, while maintaining best practices and continuing to learn 
                        about immerging technologies. 
                </p>
                <div className="about_skills theme_family">
                        <div className="about_tech"> Technologies & Skills </div>
                        <i className=" icon devicon-bootstrap-plain-wordmark colored"></i>
                        <i className=" icon devicon-css3-plain-wordmark colored"></i>
                        <i className=" icon devicon-express-original-wordmark"></i>
                        <i className=" devicon-git-plain colored icon"></i>
                        {/* <i className=" icon devicon-git-plain-wordmark colored"></i> */}
                        <i className=" devicon-html5-plain colored icon"></i>
                        <i className=" icon devicon-heroku-original-wordmark colored"></i>
                        <i className=" icon devicon-jquery-plain-wordmark colored"></i>
                        <i className=" icon devicon-mongodb-plain-wordmark colored"></i>
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