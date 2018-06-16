import React from 'react';
import './Product.css'
export default function Product(props){
    
    const {name, url, price, handleDelete} = props;
    console.log(props);
    return (
        <div className = 'product'>
            <div className = 'details'>
                <img className='img' src={url} alt={name}></img>
                <div className='detailText'>
                    <h3>{name}</h3>
                    <h3>${price} +tax(where applicable)</h3>
                    <button onClick={handleDelete}>delete</button>
                </div>
            </div>
        </div>
    )
}