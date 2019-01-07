import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Link, HashRouter} from 'react-router-dom'
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
/* 
things that are an immediate fix for this. get stacked containers that can take in
data without serious performance consequences. 
Then reformat the navbar to show the containers onClick. 
add a footer with the year, your information.
research a new colorway. Think dark with a bit of bright. 
Find a way to incorporate your projects in a fun way. so so sluething on
others that you like.
Get IPLocator to work correctly.

*/

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
    //     fetch('/ipInfo',{
    //         method: 'POST',
    //         mode: 'cors',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     }).then(data => console.log(data));
    }   
    showName = () => {
        this.setState({nameHide: false})
    }
    hideName = () => {
        this.setState({nameHide: true})
    }
    getIp = () => {
        // fetch('http://getcitydetails.geobytes.com/GetCityDetails?fqcn=', {
        //   method: 'GET',
        //   mode: 'cors',
        //   hearder: {
        //     'Content-Type': 'application/json'
        //   }
        // }).then(response => {

        // })
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
                <Navbar clickHandler={this.hideName}/>  

                    <Blurb className="blurb_one">
                    <Name   wrapper="first_name_wrapper"
                                        name_s={this.state.nameHide ? 'hide' : 'name_s' }
                                        first="Matthew"
                                        last="Murnighan"
                                        clickHandler={this.showName}
                                />
                    </Blurb>
                    {/* <Blurb className="blurb_two">
                    <Project 
                                        id={projects[0].id}
                                        key={projects[0].id}
                                        src={projects[0].src}
                                        deployment={projects[0].deployment}
                                        description={projects[0].title}
                                        github={projects[0].gitHub}
                                        logo={<IoSocialGithub size={25}/>} 
                                    />
                    </Blurb>
                    <Blurb className="blurb_one">
                    
                    </Blurb>
                    <Blurb className="blurb_two">
                    
                    </Blurb> */}

                    {/* <Blurb className="blurb_two">
                        <About aboutClass = "panel_show"/>
                    </Blurb> */}
                        {/* <Blurb> */}
                            {/* <Link to="/">
                                
                            </Link> */}
                        {/* </Blurb>    */}
                        {/* 
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
                                 <a href="./assets/img/Murnighan_Resume.pdf" title="Download My Resume" download="Murnighan_Resume">
                                <Document
                                    className="resume"
                                    loading=""
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
                                    loading=""
                                    file="./assets/img/Murnighan_Resume.pdf"
                                    onLoadSuccess={this.onDocumentLoad}
                                    >
                                    <Page pageNumber={this.state.pageNumber+1} />
                                </Document>
                                </a>
                                </Panel> */}
                            {/* }/> */}
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