import React, { Component } from 'react'
import './Connect.css'
import Skills from '../../Skills'
import IoSocialGithub from 'react-icons/lib/io/social-github';
import IoSocialLinkedin from 'react-icons/lib/io/social-linkedin';
//uncomment when you have express.js serving you.
 import axios from 'axios'
// look at using the higher oder components in a refactor...

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
        // this.getConnecData = this.getConnectData.bind(this);
        // this.sendConnectEmail = this.sendConnectEmail.bind(this);
    }

    getConnectData = event =>  {
        const { name, value} = event.target;

        this.setState({
            [name]: value
        });

        // console.log(this.state)

    }
    sendConnectEmail = (event) => {
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


    }   ;
    render() {
        const { placeholderName, placeholderEmail, placeholderMessage, name, email, message } = this.state;
        
            return(

            <div className={this.props.connectClass}>
                <div className="connection">
                    <div className="socialLinks">
                        <a className="connectATag" href="https://www.linkedin.com/in/matthew-murnighan/" target="_blank"><Skills techLogo={<IoSocialLinkedin size={32} color={"#2f496e"}/>}/></a>
                        <a className="connectATag" href="https://github.com/MattMurn" target="_blank"><Skills techLogo={<IoSocialGithub size={32} color={"#2f496e"}/>}/></a>
                    </div>
                    <div className="connect_name">
                        <input type="text" id="inq_name" name="name" placeholder={placeholderName} value={name} onChange={this.getConnectData}/>
                    </div>
                    
                    <div className="connect_email">
                        <input type="email" id="inq_email" name="email"  placeholder={placeholderEmail} value={email} onChange={this.getConnectData}/>
                    </div>
                    
                    <div className="connect_text_box">
                        <textarea id="inq_subject" name="message" placeholder={placeholderMessage} value={message} onChange={this.getConnectData}></textarea>
                        <button type="submit" className="submit" onClick={this.sendConnectEmail}>Send</button>
                    </div>
                </div>
                


            </div>


        )
    }
}

export default Connect;