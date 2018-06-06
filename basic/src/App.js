import React, { Component } from 'react';
import Output from './UserOutput/UserOutput';
import Input from './UserInput/UserInput';
import './App.css';

class App extends Component {

  state = { 
    usernames: ['tmissao', 'tiago.missao']
  };

  changeFirstUsernameHandler = (event) => {
    this.setState({
      usernames: [event.target.value, 'tiago.missao']
    })
  }

  render() {
    return (
      <div className="App">
        <Input 
          username={this.state.usernames[0]} 
          onChangeHandler={this.changeFirstUsernameHandler}
        />
        <Output username={this.state.usernames[0]}/>
        <Output username={this.state.usernames[1]}/>
      </div>
    );
  }
}

export default App;
