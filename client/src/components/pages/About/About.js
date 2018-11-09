import React from 'react'
import './About.css'
// import Skills from '../../Skills'
// import IoSocialJavascript from 'react-icons/lib/io/social-javascript';
// import IoSocialNodejs from 'react-icons/lib/io/social-nodejs';
// import IoSocialPython from 'react-icons/lib/io/social-python';
// import IoSocialHtml5 from 'react-icons/lib/io/social-html5';
// import FaCss3 from 'react-icons/lib/fa/css3';
// import FaDatabase from 'react-icons/lib/fa/database';
// import FaGit from 'react-icons/lib/fa/git';
// import FaServer from 'react-icons/lib/fa/server';

const About = ({aboutClass}) => (
            <div className={aboutClass}>
                <div className="about_body">
                        <img height="200" width="200" alt='chaio' src="./assets/img/MJM.JPG"/>
                        <br/> 
                        <br/> 
                        Thanks for checking my portfolio.
                        <br/>
                        I'm a developer who enjoys the puzzle of a well run application and am looking for a 
                        development opportunities that will allow me to collaborate and help solve some of your company's problems.
                        Currently, I am consulting on a software trade secrets litigation building a native UI application that 
                        allow our team access trial exhibits in various doucment formats, along with topic specific summary charts.
                        I am also a Teaching Assistant at Northwestern University Coding Bootcamp. Being a part of the instructional staff 
                        allows me to help students stay motivated, engaged & focused, while maintaining best practices and continuing to learn 
                        about immerging technologies. 
                </div>
                {/* <div className="about_skills">
                    
                        <ul className="skill_title">Proficient in the following</ul>
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
                            
                        <Skills techLogo={<FaServer size={22}/>} 
                                name="Express.js"/>                           
                </div> */}
            </div>
        )

export default About;