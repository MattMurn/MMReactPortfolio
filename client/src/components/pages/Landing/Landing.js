import React, { Component } from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import './Landing.css'
import Navbar from '../../Navbar'
import Panel from '../../Panel'
import Blurb from '../../Blurb'
import About from '../../pages/About'
import ReactCSSTransitionGroup from 'react-transition-group';
import Project from '../../Project' 
import Name from '../../Name'
import Connect from '../../pages/Connect'
import projects from '../../../projects.json'
import IoSocialGithub from 'react-icons/lib/io/social-github';



class Landing extends Component {
    constructor(props){
        super(props);  
        // need to adjust switch statement so that nameClass update properly.   
        this.state = {
            projects: [],
            class: false 
        }
    }
    componentDidMount = () => {
        this.setState({projects: projects});
    }   
    // dropIt = () => {
    //     //this needs to link with components 
    //      this.setState(previous => ({class: !previous.class }));   
        
    // }
    render() {
        

        // try destrucuring nameClass
        return(
            <Router>
                <div> 
                    <Navbar clickHandler={this.clickHandler}/> 
                        <Blurb>
                            <Link to="/">
                                <Name   wrapper="first_name_wrapper"
                                        name="name_"
                                        first="Matthew"
                                        last="Murnighan"
                                        clickHandler={this.dropIt}
                                />
                            </Link>
                        </Blurb>     
                            <Route  path="/about" 
                                render={ () =>  
                                    
                                        <Panel>
                                            <About aboutClass = "panel_show"/>
                                        </Panel>
                                    
                                } 
                            />
                            <Route  path="/connect" 
                                render={ () => 
                                    <Panel>
                                        <Connect connectClass = "panel_show"/>
                                    </Panel>
                                }
                            />     
                          
                        <Route exact path="/project" render={() =>  
                            <Panel class= 'panel_show'> 
                                {projects.map((proj, i)=> (                     
                                    <Project 
                                        id={proj.id}
                                        key={proj.id}
                                        src={proj.src}
                                        deployment={proj.deployment}
                                        description={proj.title}
                                        github={proj.gitHub}
                                        logo={<IoSocialGithub size={25}/>} 
                                    />
                                ))}
                            </Panel>    
                        }/>
                </div>
            </Router>
        )
    }
}

export default Landing