import React, { Component } from 'react';
// import ReactDOM from 'react-dom';ss
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Navbar from '../Navbar';
import Blurb from '../Blurb';
import About from '../About';
import TotalProject from '../project.1/TotalProject';
import Footer from '../Footer';
import { Name , Initials} from '../Name/Name';
import {Connect, InfoLink} from '../Connect/Connect';
import projects from '../../projects.json';
import IoSocialGithub from 'react-icons/lib/io/social-github';
// import { Modal } from '../Modal/Modal';
import axios from 'axios';

class App extends Component {
    
    constructor(props){
        super(props);   
        this.myRef = React.createRef();
        this.state = {
            projects: [],
            class: false,
            resume: null,
            connect_class: '',
        }
        this.myRef = React.createRef();
    }
    componentWillMount = () => {
        this.setState({projects: projects});
    }   
    componentDidMount = () => {
        // always go to top of page on mount.
        this.myRef = window.scrollTo(0,0);
    }
    clickEvent = event => {        
        
        window.scrollTo({
            top: parseInt(event.target.id), 
            behavior: "smooth"
        })
    }
    // getIp = () => { 

    //     axios.get('http://getcitydetails.geobytes.com/GetCityDetails?fqcn=')
    //     .then(response => {
    //         let ipA = response.data.geobytesipaddress;
    //         // localStorage.setItem('ipAddress', ipA);
    //         console.log(ipA);
    //         axios.post('/ipInfo', {ip: ipA});
    //     })
    // }
    render() {
        
       const { projects } = this.state;
        return(
            <Router>
                <div>
                    <Navbar clickHandler={this.clickEvent} className='nav_dropdown_inner theme_background_dark'/> 
                    <Blurb className=" blurb blurb_title" onMouseEnter={this.mouseEnter}>
                            <Name   
                                wrapper="first_name_wrapper"
                                first="Matthew"
                                last="Murnighan"
                            >
                            <Link to="/">
                                <Initials/>                            
                            </Link>
                        </Name>
                    </Blurb>
                    <Route path='/about'
                        render= {() => {
                            return (
                                <div className="about_blurb">
                                    <About osnMouseEnter={this.mouseEnter}/>
                                </div>
                            )
                        }}
                    >
                    </Route>
                    <Route path='/projects' 
                        render={
                            () => {
                                return(
                                    <div>
                                        {
                                            projects.map((proj, i) => (
                                                <TotalProject
                                                    title={proj.title}
                                                    src={proj.src}
                                                    description={proj.description}/>
                                            ))
                                        }
                                    </div>
                                )
                            }
                        }/>
                    <Footer/>
                </div>
            </Router>
        )
    }
}

export default App;

                    // {/* <Route path="/projects" */}
                    //     {/* render ={() =>  */}
                    //         {/* <div>
                    //         {projects.map((proj, i)=> ( 
                    //             <Blurb className="blurb dark project">   
                    //                 <Project                                        
                    //                     id={projects[i].id}
                    //                     key={i}
                    //                     src={projects[i].src}
                    //                     description={projects[i].description}
                    //                     deployment={projects[i].deployment}
                    //                     title={projects[i].title}
                    //                     github={projects[i].gitHub}
                    //                     logo={<IoSocialGithub size={25}/>}
                    //                     img_class={(projects[i].css_class) ?
                    //                     `project_outer ${projects[i].css_class}` : 
                    //                     'project_outer'}
                    //                     />
                    //             </Blurb>
                    //         ))}
                    //     </div> */}
                    //     {/* }/> */}
                    
                    {/* <Blurb className="blurb blurb_connect">
                        <InfoLink connectClick={this.modalRender}/>
                    </Blurb> */}
                    {/* <Route exact path="/connect"
                        render={() => 
                            <Modal>
                                <Connect/>
                            </Modal>     
                        }/> */}

                                        {/* <Route path='/' 
                    render={() => {
                        return (
                            <div>
    
                            <Navbar clickHandler={this.clickEvent} className='nav_dropdown_inner theme_background_dark'/> 
                            <Footer/>
                            </div>
                        )
                    }}/>
                <Route path='/' 
                    render={() => {
                        return (
                            <Blurb className=" blurb blurb_title" onMouseEnter={this.mouseEnter}>
                            <Name   
                                wrapper="first_name_wrapper"
                                first="Matthew"
                                last="Murnighan"
                            >
                            <Link to="/">
                                <Initials/>                            
                            </Link>
                            </Name>
                            </Blurb>
                        )
                    }}/> */}