import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar'
import Home from './components/home'
import About from './components/about'
import Projects from './components/projects'
import Skills from './components/skills'
import Contact from './components/contact'

class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
         	<Sidebar></Sidebar>
				<div id="colorlib-main">
					<Home></Home>
					<About></About>
					<Projects></Projects>
          <Skills></Skills>
          <Contact></Contact>
          	</div>
      	</div>
      </div>
    );
  }
}

export default App;
