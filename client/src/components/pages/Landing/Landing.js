import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import './Landing.css'
import Navbar from '../../Navbar'
import Panel from '../../Panel'
import Blurb from '../../Blurb'
import About from '../../pages/About'
import Project from '../../Project' 
// import Chat from '../../Chat'
import Name from '../../Name'
import Connect from '../../pages/Connect'
import projects from '../../../projects.json'
import IoSocialGithub from 'react-icons/lib/io/social-github';
import { Document, Page } from 'react-pdf';
import axios from 'axios';

class Landing extends Component {
    constructor(props){
        super(props);   
        this.state = {
            projects: [],
            class: false,
            nameHide: false,
            numPages:null,
            pageNumber: 1,
            resume: null
        }
    }
    componentWillMount = () => {
        this.setState({projects: projects});
        this.getIp();
        this.setState({resume: "./assets/img/Murnighan_Resume.pdf"})
    }   
    showName = () => {
        this.setState({nameHide: false})
    }
    hideName = () => {
        this.setState({nameHide: true})
    }
    getIp = () => {
        axios.get('http://getcitydetails.geobytes.com/GetCityDetails?fqcn=')
        .then(response => {
            let ipA = response.data.geobytesipaddress;
            localStorage.setItem('ipAddress', ipA);
            axios.post('/ipInfo', {ip: ipA});
        })
    }
    onDocumentLoad = ({numPages}) => {
        this.setState({numPages})
    }
    render() {
        return(
            <Router>
                <div> 
                    <Navbar clickHandler={this.hideName}/> 
                        <Blurb>
                            <Link to="/">
                                <Name   wrapper="first_name_wrapper"
                                        name_s={this.state.nameHide ? 'hide' : 'name_s' }
                                        first="M"
                                        first_s="atthew"
                                        last="M"
                                        last_s="urnighan"
                                        clickHandler={this.showName}
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
                            <Panel className= 'panel_show'> 
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
                           <Route path="/resume"
                            render={ ()=> 
                               
                                <Panel className='panel_resume'>
                                 <a href="./assets/img/Murnighan_Resume.pdf" title="Download Murnighan_Resume" download="Murnighan_Resume">
                                <Document
                                    className="resume"
                                    file={this.state.resume}
                                    onLoadSuccess={this.onDocumentLoad}
                                    >
                                    
                                    <Page pageNumber={this.state.pageNumber} />
                                    
                                </Document>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <Document
                                    className="resume"
                                    file="./assets/img/Murnighan_Resume.pdf"
                                    onLoadSuccess={this.onDocumentLoad}
                                    >
                                    <Page pageNumber={this.state.pageNumber+1} />
                                </Document>
                                </a>
                                </Panel>
                            }/>
                        {/* <Route  path="/chat" 
                            render={ () => 
                                <Panel className='panel_show'>
                                    <Chat/>
                                </Panel>
                            }
                        />  */}
                </div>
            </Router>
        )
    }
}

export default Landing