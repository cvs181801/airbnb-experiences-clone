import React from 'react'
import logo from './airbnb.png'
//import images from './Group_77.png'
import img100 from './img100.png'
import img101 from './img101.png'
import img102 from './img102.png'
import img103 from './img103.png'
import img104 from './img104.png'
import img105 from './img105.png'
import img106 from './img106.png'

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
            </header>        
                {/* <img 
                    src={images} 
                    alt="experiences thumbnails"
                    className="thumbnails"
                ></img> */}
            <nav>
                <img
                    src={img100}
                    alt="woman baking"
                    className="thumbnail"
                >
                </img>
                <img
                    src={img101}
                    alt="person cooking"
                    className="thumbnail" 
                >
                </img>

                <img
                    src={img102}
                    alt="ballet dancer"
                    className="thumbnail" 
                >
                </img>

                <img
                    src={img103}
                    alt="fresh food"
                    className="thumbnail" 
                >
                </img>

                <img
                    src={img104}
                    alt="person playing guitar"
                    className="thumbnail" 
                >
                </img>


                <img
                    src={img105}
                    alt="person playing piano with a mic"
                    className="thumbnail" 
                >
                </img>

                <img
                    src={img106}
                    alt="person swimming"
                    className="thumbnail" 
                >
                </img>



            </nav>
                
                
            
        </div>
    )
}
