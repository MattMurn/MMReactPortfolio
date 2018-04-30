import React, { Component } from 'react' 
import Navbar from './components/Navbar'
import Landing from './components/pages/Landing'
import About from './components/pages/About'
import Panel from './components/Skills'

class App extends Component {
  constructor(props){
    super(props)
      this.state = {
      isLive: false
    }
    // this is where you need to handle the click event for the navbar. 
    // referenece the in class exercise for it.
    

    this.handleClickEvent = this.handleClickEvent.bind(this);
  }


  render() {
    return (
      <div className="App">
        

        <Landing/>
      
          
      </div>
    );
  }
}

export default App;
