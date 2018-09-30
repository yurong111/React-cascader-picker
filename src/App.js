import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Picker from './component/picker'
import globalData from "./data";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false,
      value: null,
    }
  }

  togglePicker = () => {
    this.setState({
      visible: !this.state.visible
    });
  };

  onChange = (value) => {
    this.setState({value})
  }

  render() {
    let {value, visible} = this.state
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>选择的地区是：{value && `${value[0]}:${value[1] ? value[1] : ''}:${value[2] ? value[2] : ''}`}</div>

        <Picker 
          data={globalData}
          visible={visible}
          togglePicker={this.togglePicker}
          value={value}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

export default App;
