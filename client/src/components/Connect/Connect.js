import React, { Component } from 'react'
import './Connect.css'
import axios from 'axios'

class Connect  extends Component{
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
                <div className="connect_main" id="connect_scroll">
                    {/* <div className="socialLinks">
                        <a className="connectATag icon theme_color" href="https://www.linkedin.com/in/matthew-murnighan/" target="_blank" rel="noopener noreferrer"></a>
                        <a className="connectATag icon theme_color" href="https://github.com/MattMurn" target="_blank" rel="noopener noreferrer"><i class="devicon-github-plain colored"></i></a>
                    </div> */}
                    <div className="connect_name">
                        <input type="text" id="inq_name" className="theme_background theme_color theme_text_family" name="name" placeholder={placeholderName} value={name} onChange={this.getConnectData}/>
                    </div>
                    
                    <div className="connect_email">
                        <input type="email" id="inq_email" className="theme_background theme_color theme_text_family" name="email"  placeholder={placeholderEmail} value={email} onChange={this.getConnectData}/>
                    </div>
                        <textarea id="inq_subject" name="message" className="theme_background theme_color theme_text_family" placeholder={placeholderMessage} value={message} onChange={this.getConnectData}></textarea>
                        <button type="submit" className="submit theme_background theme_color theme_text_family" onClick={this.sendConnectEmail}>Send</button>
                </div>
        )
    }
}

export default Connect;