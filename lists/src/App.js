import React, { Component } from 'react';
import './App.css';
import Validator from './Validator/Validator'
import Char from './Char/Char'

const textMinimumCharacters = 10;

class App extends Component {

  constructor(props) {
    super();
  }

  state = { inputText: '' }
  
  onChangeTextHandler = (event) => {
    this.setState({ inputText: event.target.value })
  }

  onDeleteCharacterHandler = (index) => {
    const text = this.state.inputText.split('');
    text.splice(index, 1);
    this.setState({inputText: text.join('')});
  }

  render() {

    let characters = null;
    
    if (this.state.inputText) {
      characters = this.state.inputText.split('').map((e, index) => {
        return (
          <Char key={index} character={e} onClick={() => this.onDeleteCharacterHandler(index)}/>
        )
      })
    }

    return (
      <div className="App">
        <input type='text' onChange={this.onChangeTextHandler} value={this.state.inputText}/>
        <Validator text={this.state.inputText} textMinimumCharacters={textMinimumCharacters} />
        {characters}
      </div>
    );
  }
}

export default App;
