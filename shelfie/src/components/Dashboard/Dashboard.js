import React, {Component} from 'react';
import Product from '../Product/Product'
import './Dashboard.css'
import axios from 'axios';

export default class Dashboard extends Component {

   
    handleDelete(id){
        console.log(`Removing Product Id: ${id}`)
        axios.delete(`/api/product/${id}`)
        .then(response => {
                console.log(response);
                this.props.fetchFn()
            })
            .catch(err => {
                console.log(err)
              });
        }
            

    render(){
        const {list} = this.props;
        console.log(this.props, 'hiiiiii')
        let displayList = list.map((item,i) =>
        { console.log(item.name, item.id)
            return (
            <Product key = {i}
            name = {item.name}
            price = {item.price}
            url = {item.img}
            handleDelete = {() => this.handleDelete(item.id)}
        />
        )
        }
    )
        return(
            <div className = 'dashboard'>
                {displayList}
                
            </div>
            
        )
    }
}