import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link, HashRouter} from 'react-router-dom'
import './Landing.css'
import Navbar from '../Navbar'
import Blurb from '../Blurb'
import About from '../About'
import { Project } from "../Project/Project" 
// import Chat from './Chat'
import Footer from '../Footer';
import Name from '../Name'
import Connect from '../Connect'
import projects from '../../projects.json'
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
        this.myRef = React.createRef();
    }
    componentWillMount = () => {
        this.setState({projects: projects});
        this.getIp();
        this.setState({resume: "./assets/img/Murnighan_Resume.pdf"})
    }   
    showName = () => {
        this.setState({nameHide: false})
    }
    clickEvent = event => {
        console.log(event.target.id);
        
        // let offsetTop  = this.instance.getBoundingClientRect().top;
        // console.log(offsetTop);
        let position = ReactDOM.findDOMNode(this).getBoundingClientRect();
        console.log(position);
        window.scrollTo({
            top: parseInt(event.target.id), 
            behavior: "smooth"   // Optional, adds animation
        })
    }
    getIp = () => {

        axios.get('http://getcitydetails.geobytes.com/GetCityDetails?fqcn=',{ headers: {
            'Access-Control-Allow-Origin': '*'
          }})
        .then(response => {
            console.log(response)
            let ipA = response.data.geobytesipaddress;
            localStorage.setItem('ipAddress', ipA);
            axios.post('/ipInfo', {ip: ipA});
        })
    }   
    onDocumentLoad = ({numPages}) => {
        this.setState({numPages})
    }
    render() {
       const { projects } = this.state;
        return(
            <Router>
                <div>
                <Navbar clickHandler={this.clickEvent}/> 
                {/* what you want to happen here is:
                    when navbar link is hit, render resume above page like a modal....
                */}
                 <Route exact path="/resume"
                            render={ ()=>  
                               
                                <Blurb className='blurb_resume'>
                                 <a href="./assets/img/Murnighan_Resume.pdf" title="Download My Resume" download="Murnighan_Resume">
                                <Document
                                    className="resume"
                                    id="resume_scroll"
                                    loading=""
                                    file={this.state.resume}
                                    onLoadSuccess={this.onDocumentLoad}
                                    >
                                    
                                    <Page pageNumber={this.state.pageNumber} />
                                    
                                </Document>
                                <br/>
                                <br/>
                                <br/>

                                <Document
                                    className="resume"
                                    loading=""
                                    file="./assets/img/Murnighan_Resume.pdf"
                                    onLoadSuccess={this.onDocumentLoad}
                                    >
                                    <Page pageNumber={this.state.pageNumber+1} />
                                </Document>
                                </a>
                                </Blurb> 
                             }/> 
                    <Blurb className=" blurb blurb_title">
                    <div className="nav_name">M</div>
                    <div className="nav_name_two">M</div>
                    <Name   wrapper="first_name_wrapper"
                                        name_s={this.state.nameHide ? 'hide' : 'name_s' }
                                        first="Matthew"
                                        last="Murnighan"
                                        clickHandler={this.showName}
                                />
                    </Blurb>
                    <Blurb className="blurb">
                        <About/>
                    </Blurb>
                    <Route path="/projects">
                        <div>
                            {projects.map((proj, i)=> (
                                (i % 2 === 0) ? (     
                                    <Blurb className="blurb light">                   
                                        <Project                                        
                                            id={projects[i].id}
                                            key={projects[i].id}
                                            src={projects[i].src}
                                            description={projects[i].description}
                                            deployment={projects[i].deployment}
                                            title={projects[i].title}
                                            github={projects[i].gitHub}
                                            logo={<IoSocialGithub size={25}/>}
                                            />
                                    </Blurb>
                                ) : 
                                (
                                    <Blurb className="blurb dark">
                                        <Project
                                            id={projects[i].id}
                                            key={projects[i].id}
                                            src={projects[i].src}
                                            description={projects[i].description}                                            
                                            deployment={projects[i].deployment}
                                            title={projects[i].title}
                                            github={projects[i].gitHub}
                                            logo={<IoSocialGithub size={25}/>} 
                                            />
                                    </Blurb>
                                )
                            ))}
                            </div>
                    </Route>
                    <Route path="/connect">
                            <Blurb className="blurb blurb_connect">
                            <Connect/>
                        </Blurb>                                  
                    </Route>
                    <Blurb className="blurb blurb_footer">
                        <Footer/>
                    </Blurb>
                </div>
            </Router>
        )
    }
}
export default Landing

/*
                     <Blurb className="blurb">
                    <ProjectLeft 
                                        id={projects[0].id}
                                        key={projects[0].id}
                                        src={projects[0].src}
                                        deployment={projects[0].deployment}
                                        description={projects[0].title}
                                        github={projects[0].gitHub}
                                        logo={<IoSocialGithub size={25}/>} 
                                    />
                    </Blurb>
                    <Blurb className="blurb">
                    <ProjectRight
                                        id={projects[1].id}
                                        key={projects[1].id}
                                        src={projects[1].src}
                                        deployment={projects[1].deployment}
                                        description={projects[1].title}
                                        github={projects[1].gitHub}
                                        logo={<IoSocialGithub size={25}/>} 
                                    />
                    </Blurb>
                    <Blurb className="blurb_two">
                    
                    </Blurb> 
                     <Blurb className="blurb_two">
                        <About aboutClass = "panel_show"/>
                    </Blurb> 
                         <Blurb> 

                         </Blurb>    
                         
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

                         <Route  path="/chat" 
                            render={ () => 
                                <Panel className='panel_show'>
                                    <Chat/>
                                </Panel>
                            }
                        />  

                        */