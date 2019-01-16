import React, { Component } from 'react' 
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import About from './components/pages/About'
import Panel from './components/Skills'

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
