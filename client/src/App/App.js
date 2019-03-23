import React, { Component } from 'react' 
import Navbar from './components/Navbar'
import Landing from './components/Landing'

class App extends Component {
  constructor(props){
    super(props)
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
