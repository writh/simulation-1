import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form';
import axios from 'axios';

class App extends Component {
  constructor(){
    super();
    this.state = {
      list:[]
    }
    this.componentDidMount = this.componentDidMount.bind( this );
  };

  componentDidMount(){
    axios.get(`http://localhost:3005/api/inventory`).then( 
      (res) => {
        console.log(res);
        this.setState({
          list:res.data
      })
    })
  }

  
  
  render() {
    return (
      <div className="App">
        <Header/>
        <div className="body">
          <Dashboard list = {this.state.list}/>
          <Form componentDidMountFn = {this.componentDidMount}/>
        </div>
      </div>
    );
  }
}

export default App;