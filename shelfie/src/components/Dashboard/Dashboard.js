import React, {Component} from 'react';
import Product from '../Product/Product'

export default class Dashboard extends Component {
    render(){
        const {list} = this.props;
        let displayList = list.map((item,i) =>
        { console.log(item.name)
            return (
            <Product key = {i}
            name = {item.name}
            price = {item.price}
            url = {item.url}
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