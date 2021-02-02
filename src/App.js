import React, { Component } from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'


export class App extends Component {
  render() {
    return (
      <div>
        {/* <p>place your Component here</p> */}
        <Navbar/>
        <Sidebar/>
      </div>
    )
  }
}

export default App
