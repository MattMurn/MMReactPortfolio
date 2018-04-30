import React, { Component } from 'react'
import './Connect.css'
import Skills from '../../Skills'
import IoSocialGithub from 'react-icons/lib/io/social-github';
import IoSocialLinkedin from 'react-icons/lib/io/social-linkedin';
//uncomment when you have express.js serving you.
// const nodeMailer = require('nodemailer');
// look at using the higher oder components in a refactor...

class Connect  extends Component{
    constructor(props){
        super(props)
        this.state = {
            name: "",
            email: "",
            message: ""

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
    sendConnectEmail = (event, getConnectData) => {
        event.preventDefault();
        // console.log("send connect email");
        let key = process.env.GMAIL;

        // const transporter = nodeMailer.createTransport({
        //     service: 'gmail',
        //     auth: {
        //         user: 'nodemailermurn@gmail.com',
        //         pass: key
        //     }
        // });
        // getConnectData(event)
        const mailOptions = {
            from: this.state.email,
            to: 'mattmurn@gmail.com',
            subject: `Portfolio Message from ${this.state.name}`,
            text: this.state.message
        };

        // transporter.sendMail(mailOptions, function(error, info){
        //     if(error){ throw error }
        //     else{
        //         console.log('Email sent: ' + info.response);
        //     }
        // })
        console.log(mailOptions);
        this.setState({
                        name: "",
                        email: "",
                        message: ""
                    })
    }
    render() {
    
        return(

            <div className={this.props.connectClass}>
                <a className="connectATag" href="https://www.linkedin.com/in/matthew-murnighan/" target="_blank"><Skills techLogo={<IoSocialLinkedin size={32}/>}/></a>
                <a className="connectATag" href="https://github.com/MattMurn" target="_blank"><Skills techLogo={<IoSocialGithub size={32}/>}/></a>
                <div className="connect_name">
                    <input type="text" id="inq_name" name="name" placeholder="Name" value={this.state.name} onChange={this.getConnectData}/>
                </div>
                
                <div className="connect_email">
                    <input type="email" id="inq_email" name="email"  placeholder="Email" value={this.state.email} onChange={this.getConnectData}/>
                </div>
                
                <div className="connect_text_box">
                    <textarea id="inq_subject" name="message" placeholder="Message" value={this.state.message} onChange={this.getConnectData}></textarea>
                    <button type="submit" className="submit" onClick={this.sendConnectEmail}>Send</button>
                </div>

                


            </div>


        )
    }
}

export default Connect;