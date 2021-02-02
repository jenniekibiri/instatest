import React, { Component } from 'react'
import AllChats from './components/AllChats'
import ChatWindow from './components/ChatWindow'
import Filter from './components/Filter'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
export class App extends Component {
  render() {
    return (
      <div>
       
        <Navbar/>
        <div className="row">
        <div className="col-3">
<Sidebar/>
        </div>
        <div className="col-9">
<div className="mb-5">
  <Filter/>
</div>
<div className="row">
    <div className="col-5">

      <AllChats/>
    </div>
      <div className="col-7">
        <ChatWindow/>
      </div>
</div>
        </div>
        </div>
        
      </div>
    )
  }
}

export default App
