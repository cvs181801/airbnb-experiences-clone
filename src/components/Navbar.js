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
import img107 from './img107.png'
import img108 from './img108.png'

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
                    style={{
                        left: "157.75px",
                        top: "103.23px"
                    }}  
                >
                </img>
                <img
                    src={img101}
                    alt="person cooking"
                    className="thumbnail" 
                    style={{
                        left: "77px",
                        top: "144.81px"
                    }}  
                >
                </img>

                <img
                    src={img102}
                    alt="ballet dancer"
                    className="thumbnail" 
                    style={{
                        left: "157.75px",
                        top: "175.54px"
                    }}  
                >
                </img>

                <img
                    src={img103}
                    alt="fresh food"
                    className="thumbnail" 
                    style={{
                        left: "238.5px",
                        top: "126.13px"
                    }}  
                >
                </img>

                <img
                    src={img104}
                    alt="person playing guitar"
                    className="thumbnail" 
                    style={{
                        left: "238.5px",
                        top: "231.58px"
                    }}  
                >
                </img>


                <img
                    src={img105}
                    alt="person playing piano with a mic"
                    className="thumbnail" 
                    style={{
                        left: "319.85px",
                        top: "96px"
                    }}  
                >
                </img>

                <img
                    src={img106}
                    alt="person swimming"
                    className="thumbnail"
                    style={{
                        left: "319.85px",
                        top: "201.45px"
                    }}  
                >
                </img>

                <img
                    src={img107}
                    alt="person meditating"
                    className="thumbnail"
                    style={{
                        left: "400.59px",
                        top: "114.08px"
                    }} 
                >
                </img>

                <img
                    src={img108}
                    alt="person singing"
                    className="thumbnail" 
                    style={{
                        left: "400.59px",
                        top: "218.93px"
                    }}
                >
                </img>



            </nav>
                
                
            
        </div>
    )
}
