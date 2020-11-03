import React, { Component } from 'react';
import './App.css';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    username: 'superLuke'
  }

  usernameChangedHandler = (event) => {
    this.setState({username: event.target.value});
  }

  render() {
    return (
      <div className="App">
        <ol>
          <li>something</li>
          <li>something</li>
          <li>something</li>
          <li>something</li>
          <li>something</li>
          <li>something</li>
        </ol>

        <UserInput changed={this.usernameChangedHandler} currentName={this.state.username}/>
        <UserOutput username={this.state.username}/>
        <UserOutput username={this.state.username}/>
        <UserOutput username="David"/>
      </div>
    );
  }
}

export default App;
