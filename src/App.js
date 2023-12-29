import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import News from './Components/News'
import About from './Components/About'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  apiKey = "e288e0abcb214f919ab5b6f6cae21970";

  state = {
    progress : 0
  }
  setProgress = (progress) => {
    this.setState({progress : progress});
  }

  render() {
    return (
      <Router>
      <div>
        <Navbar/>
        <LoadingBar
          color = '#f11946'
          progress = {this.state.progress}
        />
        <Routes>
          <Route path = "/" element = {<News apiKey = {this.apiKey} setProgress = {this.setProgress} category = "general" key = "asdf"/>}></Route>
          <Route path = "/about" element = {<About/>}></Route>
          <Route path = "/business" element = {<News apiKey = {this.apiKey} setProgress = {this.setProgress} category = "business" key = "busi"/>}></Route>
          <Route path = "/entertainment" element = {<News apiKey = {this.apiKey} setProgress = {this.setProgress} category = "entertainment" key = "ent"/>}></Route>
          <Route path = "/general" element = {<News apiKey = {this.apiKey} setProgress = {this.setProgress} category = "general" key = "gen"/>}></Route>
          <Route path = "/health" element = {<News apiKey = {this.apiKey} setProgress = {this.setProgress} category = "health" key = "heat"/>}></Route>
          <Route path = "/science" element = {<News apiKey = {this.apiKey} setProgress = {this.setProgress} category = "science" key = "science"/>}></Route>
          <Route path = "/sports" element = {<News apiKey = {this.apiKey} setProgress = {this.setProgress} category = "sports" key = "sports"/>}></Route>
          <Route path = "/technology" element = {<News apiKey = {this.apiKey} setProgress = {this.setProgress} category = "technology" key = "tech"/>}></Route>
        </Routes>
      </div>
      </Router>
    )
  }
}

