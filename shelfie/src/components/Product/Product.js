import React from 'react';

export default function Product(props){
    const {name, url, price} = props;
    console.log(props);
    return (
        <div className = 'product'>
            <img src={url} alt={name}></img>
            <div className = 'name'>
                <p >{name}</p>
                <p >{price}</p>
            </div>
        </div>
    )
}