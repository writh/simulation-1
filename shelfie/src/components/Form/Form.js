import React, {Component} from 'react';
import axios from 'axios';
import './Form.css'

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

    handleEdit(id){
        const {name, price, url} = this.state;
        console.log(`Editing product ID: ${id}`)
         axios.patch(`http://localhost:3005/api/product`, {name, price, url})
            .then( response =>
            {this.props.fetchFn();
            this.handleCancel();
        })
        .catch(err => {
            console.log(err)
        });
    }
            

    newProduct(){
        const {name, price, url} = this.state;
        console.log(this.state);
        axios.post(`http://localhost:3005/api/product`, {name, price, url})
            .then( response =>
            {this.props.fetchFn();
            this.handleCancel();
        })
    }
    render(){
        return(
            <div className='form'>
                <div className='inputs'>
                    <img 
                    className='formImage'
                    src = {this.state.url || 'http://www.dvitaledesign.com.au/wp-content/uploads/2017/12/placeholder-600x400.png'}
                    alt = 'product'></img>
                    <p> Image URL: </p>
                    <input 
                    alt = 'imageURL' 
                    onChange = {(e)=>this.handleUrl(e.target.value)} 
                    value={this.state.url}></input>
                    <p> Item Name: </p>
                    <input 
                    alt = 'name' 
                    onChange = {(e)=>this.handleName(e.target.value)} 
                    value={this.state.name}></input>
                    <p> Item Price: </p>
                    <input 
                    alt = 'price' 
                    onChange = {(e)=>this.handlePrice(e.target.value)} 
                    value = {this.state.price || ''}></input>
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
