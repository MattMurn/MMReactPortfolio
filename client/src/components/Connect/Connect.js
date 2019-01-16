import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Connect.css'
import axios from 'axios'

export class Connect  extends Component{
    constructor(props){
        super(props)
        this.state = {
            name: "",
            email: "",
            message: "",
            placeholderName: "Name",
            placeholderEmail: "Email",
            placeholderMessage: "Message"
        }
    }
    getConnectData = event =>  {

        const { name, value} = event.target;
        this.setState({
            [name]: value
        });
    };
    sendConnectEmail = event => {

        event.preventDefault();
        if ( 1> this.state.name.length > 30 ){
            this.setState({ 
                name:"",
                placeholderName: "Please enter your name"
            });

            return;
        }
        else if (1 > this.state.message > 5000 ) {
            this.setState({ 
                message: "",
                placeholderMessage: "Hey. I'd really like to know more about you."
            });

            return;
        }
        else{

            axios.post('/api/connects', {
                name: this.state.name,
                email: this.state.email, 
                message: this.state.message
            }).then(
                this.setState({
                    name: "",
                    email: "",
                    message: ""
                })            
            )
        }
    };
    render() {

        const { placeholderName, placeholderEmail, placeholderMessage, name, email, message } = this.state;
        return(
            <div className="blurb connect_main">
                <div className='inq_info_container'>
                    <input type="text" className='inq_info' name="name" placeholder={placeholderName} value={name} onChange={this.getConnectData}/>
                    <input type="email" className='inq_info' name="email" placeholder={placeholderEmail} value={email} onChange={this.getConnectData}/>
                </div>
                <textarea className="inq_subject" name="message"
                    placeholder={placeholderMessage} value={message} onChange={this.getConnectData}>
                </textarea>
                <br/>
                <Link to={'/'} onClick={this.sendConnectEmail} className="submit theme_background theme_color theme_text_family">
                    <button type="submit" className="submit theme_background theme_color theme_text_family" >
                        Send
                    </button>
                </Link>
            </div>
        )
    }
}

export const InfoLink = props => {

    return (
        <div className="info_getaway">
            <div className="info_button_container">
                <a href="./assets/img/Murnighan_Resume.pdf" title="Download My Resume" download="Murnighan_Resume">
                    <button className="info_button resume_button">Downlaod Resume</button>
                </a>
                <Link to="/connect" className="info_button_container">
                    <button className="info_button connect_button">Connect</button>
                </Link>
            </div>
        </div>
    )
}