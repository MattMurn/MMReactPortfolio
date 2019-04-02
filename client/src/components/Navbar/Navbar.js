import React, { Component } from 'react'
import { Link } from "react-router-dom";
import './navbar.css'

class Navbar extends Component {

    constructor(props){
        super(props)
        this.state = {
            class: false,
            show_nav: false,
            nav_class: 'hide'
        };
    }
    // dropdown action with toggle behavior
    dropIt = () => {

         this.setState(previous => ({class: !previous.class }));   
    }
    componentDidMount = () => {

        // document.addEventListener('scroll', () => {
        //   const show_nav = window.scrollY < 800; //boolean as you scroll
        //   if (show_nav !== this.state.show_nav) {
        //     this.onScroll(show_nav); // if state & windo position are !== update state
        //   }
        // });
    }
    handleClick = () => {
        this.setState({nav_class: 'hide'})
    }
    render = () => {   
         
        return(    
            <div className={(this.state.show_nav) ? "hide" : "header_home"}>
                <div className="nav_dropdown_outer" onMouseEnter={this.dropIt} onMouseLeave={this.dropIt}>
                    <div className={this.props.className}></div>
                    <div className={this.props.className}></div>
                    <div className={this.props.className}></div>
                    <ul className={this.state.class ? 'show' : 'hide'}>
                        <Link activeClassName="active" to="/about"><p className="dropdown_list" id="801" onClick={this.handleClick} > ABOUT </p> </Link>
                        <Link activeClassName="active" to="/connect"> <p className="dropdown_list" id="5500" onClick={this.props.clickHandler} > CONNECT </p> </Link> 
                        <Link to="/projects"> <p className="dropdown_list" id="1450" onClick={this.props.clickHandler} > PROJECTS </p> </Link>
                        <Link to="/resume"><p className="dropdown_list" id="3600" onClick={this.props.clickHandler}> RESUME</p></Link>
                        {/* <p className="dropdown_list" id="resume" ><a href="./assets/img/Murnighan_Resume.pdf" download="Murnighan_Resume">RESUME</a></p> */}
                      
                    </ul>
                </div>   
            </div>
    )}
};

export default Navbar;