import React, { Component } from 'react'
import './About.css'

class About extends Component {
        constructor(props){
                super(props);
                this.myRef = React.createRef();
        }
        componentDidMount = () => {
                this.myRef = window.scrollTo(0,675);
        }
        render() {
                return (
                        <div className={this.props.className} ref={this.myRef}> 
                        {/* <div className="about_title theme_family theme_color_light"> Web Developer</div> */}
                            <h3 className="word_about theme_color_light"> In a Few Words...</h3>
                            <p className="about_body theme_family theme_color_light">
                                    I'm a developer who enjoys the puzzle of a well-run application 
                                    {/* and am looking for a 
                                    development opportunities that will allow me to collaborate and help solve some of your company's problems.  */}
                            </p>
                            <p className="about_body middle theme_family theme_color_light">Currently, I am a Frontend Software Developer at Topstep Trader and a part-time T.A. at Northwestern University Coding Bootcamp
                                    {/* Being a part of the instructional staff allows me to help students stay motivated, engaged & focused, while maintaining best practices and continuing to learn 
                                    emerging technologies. */}
                            </p>
                            <p className="about_body small theme_family theme_color_light"> This site is a fullstack application in React, Node.js, MySQL, Express stack. </p>
                    </div>    
                )
        }
}

                // {/* <div className="about_skills theme_family"> */}
                // {/* <div className="about_tech"> Technologies & Skills </div> */}
                //         {/* <div className="icon_container">
                //                 <i className=" icon devicon-bootstrap-plain-wordmark colored"></i>
                //                 <i className=" icon devicon-css3-plain-wordmark colored"></i>
                //                 <i className=" icon devicon-express-original-wordmark"></i>
                //                 <i className=" devicon-git-plain colored icon"></i>
                //                 <i className=" icon devicon-git-plain-wordmark colored"></i> */}
                //                 {/* <i className=" devicon-html5-plain colored icon"></i>
                //                 <i className=" icon devicon-heroku-original-wordmark colored"></i>
                //                 <i className=" icon devicon-jquery-plain-wordmark colored"></i>
                //                 <i className=" icon devicon-mongodb-plain-wordmark colored"></i>
                //                 <i className=" icon devicon-mysql-plain-wordmark colored"></i>
                //                 <i className=" icon devicon-nodejs-plain colored"></i>
                //                 <i className=" icon devicon-python-plain colored"></i>
                //                 <i className=" icon devicon-react-original-wordmark colored"></i>
                //                 <i className=" icon devicon-sequelize-plain-wordmark colored"></i>
                //                 <i className=" icon devicon-javascript-plain colored"></i>
                //                 <i className=" icon devicon-html5-plain-wordmark colored"></i>  
                //         </div>                    */}
                // {/* </div> */}
export default About;