import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Navbar from '../Navbar';
import Blurb from '../Blurb';
import About from '../About';
import { Project } from '../Project/Project';
import Footer from '../Footer';
import { Name , Initials} from '../Name/Name';
import {Connect, InfoLink} from '../Connect/Connect';
import projects from '../../projects.json';
import IoSocialGithub from 'react-icons/lib/io/social-github';
import { Modal } from '../Modal/Modal';
import axios from 'axios';

/*
overhaul points of interest
    file structure app level === landing
    stateless components can be in 1 file
    create scss / sass file and integrate with react
    update routing 
    change projects container and animation.
*/
class App extends Component {
    
    constructor(props){
        super(props);   
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
            // localStorage.setItem('ipAddress', ipA);
            axios.post('/ipInfo', {ip: ipA});
        })
    }
    modalRender = () => {
        console.log('modal render clicked')
        this.setState({modal_class: 'show'})
        console.log(this.state);
    }
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
                                {/* <Blurb className="blurb blurb_about theme_background_dark" > */}
                                    <About osnMouseEnter={this.mouseEnter}/>
                                {/* </Blurb>  */}
                            </div>
                        )
                        }}
                    >
                        
                    </Route>
                    <Footer/>
                </div>
            </Router>
        )
    }
}


export default App;

                    {/* <Route path="/projects" */}
                        {/* render ={() =>  */}
                            {/* <div>
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
                        </div> */}
                        {/* }/> */}
                    
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