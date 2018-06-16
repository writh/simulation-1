import React, {Component} from 'react';
import axios from 'axios';

export default class Form extends Component {
    constructor(){
        super();
        this.state=({
            name:"",
            price:0,
            url:""
        })
    }
    
    handleName(name){
        this.setState({name})
    }

    handlePrice(price){
        this.setState({price})
    }

    handleUrl(url){
        this.setState({url})
    }

    handleCancel(){
        this.setState({
            name:"",
            price:0,
            url:""
        })
    }

    newProduct(){
        const {name, price, url} = this.state;
        console.log(this.state);
        axios.post(`http://localhost:3005/api/product`, {name, price, url})
            .then( response =>
            {this.props.componentDidMountFn();
            this.handleCancel();
        })
    }
    render(){
        return(
            <div className='form'>
                <div className='inputs'>
                    <img 
                    src = {this.state.url}
                    alt = 'product'></img>
                    <input 
                    alt = 'imageURL' 
                    onChange = {(e)=>this.handleUrl(e.target.value)} 
                    value={this.state.url}></input>
                    <input 
                    alt = 'name' 
                    onChange = {(e)=>this.handleName(e.target.value)} 
                    value={this.state.name}></input>
                    <input 
                    alt = 'price' 
                    onChange = {(e)=>this.handlePrice(e.target.value)} 
                    value = {this.state.price}></input>
                </div>
                <div className = 'buttons'>
                    <button 
                    onClick = { () => 
                        this.handleCancel()}
                        >Cancel</button>
                    <button
                    onClick = { () => 
                        this.newProduct()}
                        >Add to Inventory</button>
                </div>
            </div>
        )
    }
}
