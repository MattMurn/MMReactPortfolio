import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
import './navbar.css'

class Navbar extends Component {

    constructor(props){
        super(props)
        this.state = {
            class: false,
            show_nav: true,
            nav_class: 'hide'
        };
    }
    // dropdown action with toggle behavior
    dropIt = () => {
        //this needs to NavLink with components 
         this.setState(previous => ({class: !previous.class }));   
    }
    componentDidMount = () => {
        document.addEventListener('scroll', () => {
          const show_nav = window.scrollY < 800; //boolean as you scroll
          if (show_nav !== this.state.show_nav) {
            this.onScroll(show_nav); // if state & windo position are !== update state
          }
        });
      }
    onScroll = show_nav => {
        this.setState({ show_nav });
    }
    render = () => {    
        return(    
            <div className={(this.state.show_nav) ? "hide" : "header_home"}>
                <div className="nav_dropdown_outer" onMouseEnter={this.dropIt} onMouseLeave={this.dropIt}>
                    <div className={this.props.className}></div>
                    <div className={this.props.className}></div>
                    <div className={this.props.className}></div>
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