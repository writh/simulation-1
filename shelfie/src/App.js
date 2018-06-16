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

  };

  componentDidMount(){
    this.fetch()
  }

  fetch = () => {
    axios.get(`/api/inventory`).then( 
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
          <div><Dashboard list = {this.state.list} fetchFn = {this.fetch}/></div>
          <div className='appForm'><Form fetchFn = {this.fetch}/></div>
        </div>
      </div>
    );
  }
}

export default App;