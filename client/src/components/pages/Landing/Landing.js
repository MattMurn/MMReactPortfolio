import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import './Landing.css'
import Navbar from '../../Navbar'
import Panel from '../../Panel'
import Blurb from '../../Blurb'
import About from '../../pages/About'
import Project from '../../Project' 
import Chat from '../../Chat'
import Name from '../../Name'
import Connect from '../../pages/Connect'
import projects from '../../../projects.json'
import IoSocialGithub from 'react-icons/lib/io/social-github';
import axios from 'axios';
import moment from 'moment';

class Landing extends Component {
    constructor(props){
        super(props);   
        this.state = {
            projects: [],
            class: false,
            nameHide: false,
        }
    }
    componentWillMount = () => {
        this.setState({projects: projects});
        this.getIp();
    }   
    showName = () => {
        this.setState({nameHide: false})
    }
    hideName = () => {
        this.setState({nameHide: true})
    }
    getIp = () => {
        console.log('LINKED')
        axios.get('http://getcitydetails.geobytes.com/GetCityDetails?fqcn=')
        .then(data => {
        console.log(data.data);
        let ip = data.data.geobytesipaddress
        axios.get(`http://api.ipstack.com/${ip}?access_key=e3af7c52287a4cc971a2caa31e54fb6b`)
        .then(data => {
            console.log(data.data);
            let i = data.data;
            let userIp = {
                ip: i.ip,
                country_name: i.country_name,
                region_name: i.region_name,
                city: i.city,
                zip: i.zip,
                lat: i.latitude,
                long: i.longitude,
                time: moment().format('MMMM Do YYYY, h:mm:ss a')
            }
            // hits.push(userIp);
            // (hits.indexOf(ip) !== -1) ? null : hits.push(userIp);
            console.log(userIp);
        })
        })
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
                        <Route  path="/chat" 
                            render={ () => 
                                <Panel className='panel_show'>
                                    <Chat/>
                                </Panel>
                            }
                        /> 
                </div>
            </Router>
        )
    }
}

export default Landing