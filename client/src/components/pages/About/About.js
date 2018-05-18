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
                    I'm a passionate developer who enjoys the puzzle of a well run application and am actively looking for a 
                    development job that will allow me to collaborate and help solve some of your company's problems.
                    I have completed many small fullstack projects and am currently working on Mentor Match. 
                    A mobile app built with React-Native that matches mentors and mentees in hopes of 
                    shaping careers and relationships. 
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
                        <Skills techLogo={<img className="skill_icon" src="./assets/img/favicon.ico" background={"#FFEC5C"} alt=""/>}
                                name="React"/>                                
                        <Skills techLogo={<FaCss3 size={22}/>}
                                name="CSS3"/>                    
                        <Skills techLogo={<FaDatabase size={22}/>}
                                name="Sql / MongoDB"/>
                        <Skills techLogo={<FaGit size={22}/>}
                                name="Version Control"/>
                            
                        <Skills techLogo={<img className="skill_icon" src="" alt=""/>} 
                                name="Express.js"/>                           


                </div>
            </div>
        )
    
        




 
 
export default About;