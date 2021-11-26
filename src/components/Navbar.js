import React from 'react'
import logo from './airbnb.png'
import images from './Group_77.png'

export default function Navbar() {
    return (
        <div>
            <header
                className="header"
            >
                <img 
                    src={logo} 
                    alt="airbnb logo"
                    className="logo"
                    ></img>
                <img 
                    src={images} 
                    alt="experiences thumbnails"
                    className="thumbnails"
                ></img>
                
            </header>
        </div>
    )
}
