import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import './Landing.css'
import Navbar from '../Navbar'
import Blurb from '../Blurb'
import About from '../About'
import { Name, Initials } from '../Name/Name'
import Footer from '../Footer';
import arrow from './download-arrow.svg';

class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: [],
            class: false,
            resume: null,
            skills: false,
            connect_class: ''
        }
        this.myRef = React.createRef();
    }
    clickEvent = event => {

        window.scrollTo({
            top: parseInt(event.target.id),
            behavior: "smooth"
        })
    }
    toggleSkills = () => {
        this.setState({skills: !this.state.skills});

    }
    render() {
        console.log(this.state);
        return (
            <Router>
                <div>
                    <Initials />
                    <Blurb className=" blurb blurb_title">
                        <Name
                            wrapper="first_name_wrapper"
                            first="Matthew"
                            last="Murnighan"
                        />
                    </Blurb>
                    <div className="arrow-btn"><a href="#scrollToAbout"><img src={arrow} alt="arrow-btn"/></a></div>
                    <Blurb className="blurb blurb_about" id="scrollToAbout">
                        <About
                        imgSrc={arrow}
                        imgClick={this.toggleSkills}
                        skillsToggleClass={(this.state.skills) ? 'icon__container--show' : 'icon__container--hide'}
                        />
                    </Blurb>
                    {/* <div className="project__grid__container">
                        <div className="project project-1">1</div>
                        <div className="project project-2">2</div>
                        <div className="project project-3">3</div>
                        <div className="project project-4">4</div>
                        <div className="project project-5">5</div>
                    </div> */}
                    <Footer />
                </div>
            </Router>
        )
    }
}
export default Landing
