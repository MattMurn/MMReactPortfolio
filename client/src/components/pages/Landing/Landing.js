import React, { Component } from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import './Landing.css'
import Navbar from '../../Navbar'
import Panel from '../../Panel'
import Blurb from '../../Blurb'
import About from '../../pages/About'
// import Skills from '../../Skills'
// import Atag from '../../Atag'
import Project from '../../Project' 
import Name from '../../Name'
import Connect from '../../pages/Connect'
import projects from '../../../projects.json'

// connection icons
import IoSocialGithub from 'react-icons/lib/io/social-github';



class Landing extends Component {
    constructor(props){
        super(props);  
        // need to adjust switch statement so that nameClass update properly.   
        this.state = {
            projects: projects,
            class: false,
            projectClass: false,
            aboutClass: false,
            connectClass: false,
            nameClass: true
        }
        // this.clickHandler = this.clickHandler.bind(this);
        // this.nameSuffixHide = this.nameSuffixHide.bind(this);

    }
    // componentWillMount = () => {
    //     this.setState({nameClass: true});
    // }
    clickHandler = event => {
        // console.log("handleClickEvent is live and well");
        // console.log(event.target.id)
        let currentId = event.target.id; 
        switch(currentId){
            case "about":
                this.setState(previous => ({
                                            aboutClass: !previous.aboutClass,
                                            projectClass: false,
                                            connectClass: false,
                                            nameClass: this.nameSuffixHide(previous.aboutClass)
                                          }));
                break;
            case "project":
                this.setState(previous => ({
                                            projectClass: !previous.projectClass,
                                            aboutClass: false,
                                            connectClass: false,
                                            nameClass: this.nameSuffixHide(previous.projectClass)
                                        }));
                break;
            case "connect":
                this.setState(previous => ({
                                            connectClass: !previous.connectClass,
                                            projectClass: false,
                                            aboutClass: false,
                                            nameClass: this.nameSuffixHide(previous.connectClass)
                                        }));
                break;
            default:
                // this.setState({
                //                 connectClass: false,
                //                 projectClass: false,
                //                 aboutClass: false
                //             });
        }

  }

  nameSuffixHide = currentState => {


    if(currentState) {
        this.setState({nameClass: true})
    }
    else{
        this.setState({nameClass: false})
    }
    //   console.log(currentState)
    //   for (let i in currentState) {
    //       console.log("touched")
    //       if(i === false){
    //         console.log("true") 
    //         // return true;
    //       }
          
    //   }
  }


      // align Ms in the blurb. 
    // change animation so that other letters come out of the Ms.
    // figure out the click events and animation for projs etc.
    render() {

        // try destrucuring nameClass
        return(
            <Router>
                <div>
                    <div>    
                        <Navbar clickHandler={this.clickHandler}
                            
                                // about={<Link to="/about"> About </Link>}
                                // connect={<Link to="/connect"> Connect </Link>}
                                
                        /> 
                        <div className="page_wrapper">

                            <Blurb>
                                <Name   wrapper="first_name_wrapper"
                                        classPrefix="name_prefix"
                                        prefix="M"
                                        classSuffix={this.state.nameClass ? "name_suffix" : "name_hide"}
                                        suffix="atthew"
                                        />
                                
                                
                                <Name   wrapper="last_name_wrapper"
                                        classPrefix="name_prefix"
                                        prefix="M"
                                        classSuffix={this.state.nameClass ? "name_suffix" : "name_hide"}
                                        suffix="urnighan"
                                />


                            <Route  path="/about" 
                                render={ () => <About aboutClass = { this.state.aboutClass ? 'about_show' : 'about_hide'}/>} />

                            <Route  path="/connect" 
                                render={ () => <Connect connectClass = { this.state.connectClass ? 'connect_show' : 'connect_hide'}/>} />     
                            </Blurb> 
                            {/* <About aboutClass = { this.state.aboutClass ? 'about_show' : 'about_hide'}
                                />
                            <Connect connectClass={this.state.connectClass ? 'connect_show' : 'connect_hide'}/>    */}
                        <Route exact path="/project" render={() =>  
                            <Panel projectClass={this.state.projectClass ? 'panel_show' : 'panel_hide'}> 
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
                </div>
    </div>
</Router>
)}

}

export default Landing