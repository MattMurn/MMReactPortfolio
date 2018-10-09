import  React, { Component } from 'react';
import './Chat.css';
const io = require('socket.io-client')
const socket = io.connect();
class Chat extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nextMessage: '',
            messages: ['Hey there, Thanks for reaching out... I will join you in a minute']
        }
    }
    componentDidMount = () => {
        // socket.connect();
        // console.log('connected')
        // socket.on('message', this.handleMessage);
    }
    componentWillUnmount = () => {
        // socket.disconnect();
        // console.log("Chat unmounted")
        //close socket connection on the client side.
    }
    handleMessage = () => {
        socket.emit('message', this.state.nextMessage)
        this.setState({
            messages: [...this.state.messages, this.state.nextMessage],
            nextMessage: ''
        })
    }
    updateMessage = event => {
        const {name, value } = event.target;
        this.setState({[name]: value});
    }
    render = () => {
        
        const { handleMessage, updateMessage } = this;
        return(
            <div className={this.props.connectClass}>
            <div className="connection">      
            <div id="inq_subject" name="message">      
                {this.state.messages.map((message, i)=> (
                   <div key={i}> {message}</div>
                ))}
            </div>
                <div className="connect_name">
                    <input type="text" id="inq_name" onChange={updateMessage} name="nextMessage" />
                </div>
                <button type="submit" className="submit" onClick={handleMessage}>Send</button>
            </div>
        </div>
        )
    }
}

export default Chat