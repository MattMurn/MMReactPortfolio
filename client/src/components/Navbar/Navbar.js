import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
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
        //this needs to NavLink with components 
         this.setState(previous => ({class: !previous.class }));   
    }

    render() {    
        return(    
            <div className="header_home">
                <div className="nav_name">M</div>
                <div className="nav_name">M</div>
                <div className="nav_dropdown_outer" onMouseEnter={this.dropIt} onMouseLeave={this.dropIt}>
                    <div className="nav_dropdown_inner"></div>
                    <div className="nav_dropdown_inner"></div>
                    <div className="nav_dropdown_inner"></div>
                    <ul className={this.state.class ? 'show' : 'hide'}>
                        <NavLink activeClassName="active" to="/about"><p className="dropdown_list" id="801" onClick={this.props.clickHandler} > ABOUT </p> </NavLink>
                        <NavLink activeClassName="active" to="/connect"> <p className="dropdown_list" id="1600" onClick={this.props.clickHandler} > CONNECT </p> </NavLink> 
                        <NavLink to="/project"> <p className="dropdown_list" id="project" onClick={this.props.clickHandler} > PROJECTS </p> </NavLink>
                        <NavLink to="/resume"><p className="dropdown_list" id="resume" onClick={this.props.clickHandler}> RESUME</p></NavLink>
                        {/* <p className="dropdown_list" id="resume" ><a href="./assets/img/Murnighan_Resume.pdf" download="Murnighan_Resume">RESUME</a></p> */}
                      
                    </ul>
                </div>   
            </div>
    )}
};

export default Navbar;