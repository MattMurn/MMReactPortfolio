import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import './Landing.css'
import Navbar from '../Navbar'
import Blurb from '../Blurb'
import About from '../About'
import { Name, Initials } from '../Name/Name'
import Footer from '../Footer';

class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: [],
            class: false,
            resume: null,
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
    render() {

        return (
            <Router>
                <div>
                    <Navbar clickHandler={this.clickEvent} className='nav_dropdown_inner theme_background_light' />
                    <Initials />
                    <Blurb className=" blurb blurb_title">
                        <Name
                            wrapper="first_name_wrapper"
                            first="Matthew"
                            last="Murnighan"
                        />
                    </Blurb>
                    <Blurb className="blurb blurb_about" >
                        <About/>
                    </Blurb>
                    <Footer />
                </div>
            </Router>
        )
    }
}
export default Landing
