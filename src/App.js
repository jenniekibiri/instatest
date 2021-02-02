import React, { Component } from 'react';
import AllChats from './components/AllChats';
import ChatWindow from './components/ChatWindow';

export class App extends Component {
  render() {
    return (
      <div>
        <p>place your Component here</p>
        <div className="row">
          <div className="col-5">
            <AllChats />
          </div>
          <div className="col-7">
            <ChatWindow />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
