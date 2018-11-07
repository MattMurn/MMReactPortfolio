import React, { Component } from 'react'
import { Link } from "react-router-dom";
import './navbar.css'

class Navbar extends Component {

    constructor(props){
        super(props)
        this.state = {
            class: false
        };
    }
    // dropdown action with toggle behavior
    dropIt = () => {
        //this needs to link with components 
         this.setState(previous => ({class: !previous.class }));   
    }

    render() {    
        return(    
            <div className="header_home">
                
                <div className="nav_dropdown_outer" onMouseEnter={this.dropIt} onMouseLeave={this.dropIt}>
                    <div className="nav_dropdown_inner"></div>
                    <div className="nav_dropdown_inner"></div>
                    <div className="nav_dropdown_inner"></div>
                    <ul className={this.state.class ? 'show' : 'hide'}>
                        <Link to="/about"><p className="dropdown_list" id="about" onClick={this.props.clickHandler} > ABOUT </p> </Link>
                        <Link to="/connect"> <p className="dropdown_list" id="connect" onClick={this.props.clickHandler} > CONNECT </p> </Link> 
                        <Link to="/project"> <p className="dropdown_list" id="project" onClick={this.props.clickHandler} > PROJECTS </p> </Link>
                        <Link to="/resume"><p className="dropdown_list" id="resume" onClick={this.props.clickHandler}> RESUME</p></Link>
                        {/* <p className="dropdown_list" id="resume" ><a href="./assets/img/Murnighan_Resume.pdf" download="Murnighan_Resume">RESUME</a></p> */}
                      
                    </ul>
                </div>   
            </div>
    )}
};

export default Navbar;