import React from 'react';
import './Header.css'
import logo from './shelfie_icon.png'

export default function header(){
    return (
        <div className='headerContainer'>
            <div className='header'>
            <div className='logo'><img src={logo} alt='shelfie icon'/></div>
            <div><h1 className='title'>SHELFIE</h1></div>
            </div>
        </div>
    )
}