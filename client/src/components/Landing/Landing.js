import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './Landing.css'
import Navbar from '../Navbar'
import Blurb from '../Blurb'
import About from '../About'
import { Project } from "../Project/Project" 
// import Chat from './Chat'
import Footer from '../Footer';
import { Name , Initials} from '../Name/Name'
import {Connect, InfoLink} from '../Connect/Connect'
import projects from '../../projects.json'
import IoSocialGithub from 'react-icons/lib/io/social-github';
// import { Document, Page } from 'react-pdf';
import axios from 'axios';

class Landing extends Component {
    constructor(props){
        super(props);   
        this.state = {
            projects: [],
            class: false,
            resume: null,
            connect_class: ''
        }
        this.myRef = React.createRef();
    }
    componentWillMount = () => {

        this.setState({projects: projects});
        this.getIp();
        this.setState({resume: "./assets/img/Murnighan_Resume.pdf"})
    }   
    clickEvent = event => {        

        window.scrollTo({
            top: parseInt(event.target.id), 
            behavior: "smooth"
        })
    }
    getIp = () => {

        axios.get('http://getcitydetails.geobytes.com/GetCityDetails?fqcn=',{ headers: {
            'Access-Control-Allow-Origin': '*'
          }})
        .then(response => {

            let ipA = response.data.geobytesipaddress;
            localStorage.setItem('ipAddress', ipA);
            axios.post('/ipInfo', {ip: ipA});
        })
    }
    render() {
        
       const { projects } = this.state;
        return(
            <Router>
                <div>
                    <Navbar clickHandler={this.clickEvent} className='nav_dropdown_inner theme_background_light'/> 
                    <Initials/>
                    <Blurb className=" blurb blurb_title" onMouseEnter={this.mouseEnter}>
                    <Name   
                        wrapper="first_name_wrapper"
                        first="Matthew"
                        last="Murnighan"
                    />
                    </Blurb>
                    <Blurb className="blurb blurb_about" >
                        <About onMouseEnter={this.mouseEnter}/>
                    </Blurb>
                    <Route path="/projects">
                        <div>
                            {projects.map((proj, i)=> ( 
                                <Blurb className="blurb dark project">   
                                    <Project                                        
                                        id={projects[i].id}
                                        key={i}
                                        src={projects[i].src}
                                        description={projects[i].description}
                                        deployment={projects[i].deployment}
                                        title={projects[i].title}
                                        github={projects[i].gitHub}
                                        logo={<IoSocialGithub size={25}/>}
                                        img_class={(projects[i].css_class) ?
                                        `project_outer ${projects[i].css_class}` : 
                                        'project_outer'}
                                        />
                                </Blurb>
                            ))}
                        </div>
                    </Route>
                    <Blurb className="blurb blurb_connect">
                        <InfoLink/>
                    </Blurb>
                    <Route path="/connect"
                        render={() => 
                            <Blurb className="blurb blurb_inq">
                                <Connect/>
                            </Blurb>     
                        }/>
                        <Footer/>
                </div>
            </Router>
        )
    }
}
export default Landing
