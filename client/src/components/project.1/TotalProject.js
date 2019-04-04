import React, { Component } from 'react';
import {ContentProject, Project, RevealProject } from './Project';

class TotalProject extends Component {

    constructor(props){
        super(props);
        this.state = {
          total: 0,
          projectInfo: "hide_project",
          buttonShow: "hide_project"
        }
    }
    mouseHover = () => {
      this.setState({
        projectInfo: "show_project",
        buttonShow: "show_button"
      })
    }
    mouseLeave = () => {
      this.setState({
        projectInfo: "hide_project",
        buttonShow: "hide_project"
      })
    }
    clickHandler = e => {
      console.log(e.target.name);
    }

    render = () => {
        return (
            <Project>
              <ContentProject 
                onMouseEnter={this.mouseHover} 
                onMouseLeave={this.mouseLeave} 
                onClick={this.clickHandler}
                className={this.state.buttonShow}
                title={this.props.title}
                src={this.props.src}/>
              <RevealProject className={this.state.projectInfo} description={this.props.description}/>
            </Project>
        )
    }
}

export default TotalProject;