import React, { Component } from "react";
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    username: 'kevin-cooper'
  }

  usernameChangeHandler = (event) => {
    this.setState({username: event.target.value})
  }

  render() {
    return (
      <div className="App">
        <h1>Assignment Task !!!!!</h1><br></br>
        <UserInput changed={this.usernameChangeHandler} />
        <UserOutput userName={this.state.username} />
        <UserOutput userName={this.state.username} />
        <UserOutput userName="Ronakbhattrz" />
      </div>
    )
  }
}
export default App;
