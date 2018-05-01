import React from 'react'
import './About.css'
import Skills from '../../Skills'
import IoSocialJavascript from 'react-icons/lib/io/social-javascript';
import IoSocialNodejs from 'react-icons/lib/io/social-nodejs';
import IoSocialPython from 'react-icons/lib/io/social-python';
import IoSocialHtml5 from 'react-icons/lib/io/social-html5';
import FaCss3 from 'react-icons/lib/fa/css3';
import FaDatabase from 'react-icons/lib/fa/database';
import FaGit from 'react-icons/lib/fa/git';



const About = ({aboutClass, photo}) => (
            <div className={aboutClass}>
                {/* <img className="head_shot" src={photo}/> */}
                               
                <div className="about_body">
                    Oh hello! Thanks for checking my portfolio.
                    I'm a passionate developer who enjoys the puzzle of a well run applicationand am actively looking for a 
                    development job that will allow me to collaborate and help solve some of your company's problems.
                    I have completed many small fullstack projects and am currently working on Mentorize. 
                    A web application that matches mentors and mentees in hopes of 
                    shaping careers and relationships that can often allude us. 
                </div>
                <div className="about_skills">
                    
                        {/* <ul className="skill_title">Proficient in the following</ul> */}
                        <Skills techLogo={<IoSocialJavascript size={22}/>}
                                name="Javascript"/>
                        <Skills techLogo={<IoSocialHtml5 size={22}/>}
                                name="HTML5"/>
                        <Skills techLogo={<IoSocialNodejs size={22}/>}
                                name="Node.js"/>
                        <Skills techLogo={<IoSocialPython size={22}/>}
                                name="Python"/>
                        <Skills techLogo={<FaCss3 size={22}/>}
                                name="CSS3"/>                    
                        <Skills techLogo={<img className="skill_icon" src="./assets/img/favicon.ico" alt=""/>}
                                name="React"/>                               
                        <Skills techLogo={<FaDatabase size={22}/>}
                                name="Sql / MongoDB"/>
                        <Skills techLogo={<FaGit size={22}/>}
                                name="Version Control"/>
                        {/* <Skills name="REST API"/>   */}
                        <Skills techLogo={<img className="skill_icon" src="./assets/img/express.png" alt=""/>} 
                                name="Express.js"/>  
                        <Skills techLogo={<img className="skill_icon" src="./assets/img/jquery.png" alt=""/>}  
                                name="JQuery"/>      
                    

                </div>
            </div>
        )
    
        




 
 
export default About;