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
    render = () => {
        return (
            <Project>
              <ContentProject onMouseEnter={this.mouseHover} onMouseLeave={this.mouseLeave} className={this.state.buttonShow}/>
              <RevealProject className={this.state.projectInfo}/>
            </Project>
        )
    }
}

export default TotalProject;