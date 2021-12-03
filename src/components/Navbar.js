import React from 'react'
import logo from './airbnb-1.png'
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
import andes from './andes.jpeg'
import bake from './bake.jpeg'
import bridge from './bridge.jpeg'
import hold from './hold.jpeg'
import phillipines from './phillipines.jpeg'
import toast from './toast.jpeg'

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
            <nav>
                <div
                    className="thumbnail"
                    style={{
                        //left: "157.75px",
                        //top: "103.23px",
                        // width: "73.52px",
                        // height: "63.88px",
                        backgroundColor: "#918E9B",
                        backgroundImage: `url(${bake})`,
                        backgroundSize: "cover",
                        backgroundBlendMode: 'multiply',
                        color: 'white'
                    }}  
                > Collection
                <p className="nav__text">Learn a new skill</p>
                </div>

                <div
                    className="thumbnail" 
                    style={{
                        //left: "77px",
                        //top: "144.81px"
                        backgroundColor: "#918E9B",
                        backgroundImage: `url(${andes})`,
                        backgroundSize: "cover",
                        backgroundBlendMode: 'multiply',
                        color: 'white'
                    }}  
                >Collection
                <p className="nav__text">Plan your next trip</p>
                </div>

                <div
                    className="thumbnail" 
                    style={{
                        //left: "157.75px",
                        //top: "175.54px"
                        backgroundColor: "#918E9B",
                        backgroundImage: `url(${toast})`,
                        backgroundSize: "cover",
                        backgroundBlendMode: 'multiply',
                        backgroundPosition: "center top",
                        color: 'white'
                    }}  
                >Collection
                <p className="nav__text">Spend time together</p>
                </div>

                <div

                    className="thumbnail" 
                    style={{
                        //left: "238.5px",
                        //top: "126.13px"
                        backgroundColor: "#918E9B",
                        backgroundImage: `url(${phillipines})`,
                        backgroundSize: "cover",
                        backgroundBlendMode: 'multiply',
                        backgroundPosition: "center center",
                        color: 'white'
                        
                    }}  
                >Collection
                <p className="nav__text">Discover something exciting</p>
                </div>

                <div
                    className="thumbnail" 
                    style={{
                        //left: "238.5px",
                        //top: "231.58px"
                        backgroundColor: "#918E9B",
                        backgroundImage: `url(${hold})`,
                        backgroundPosition: "center center",
                        backgroundSize: "cover",
                        backgroundBlendMode: 'multiply',
                        color: 'white'
                    }}  
                >Collection
                <p className="nav__text">Make someone's wish come true</p>
                </div>


                <div
                    className="thumbnail" 
                    style={{
                        //left: "319.85px",
                        //top: "96px"
                        backgroundColor: "#918E9B",
                        backgroundImage: `url(${bridge})`,
                        backgroundSize: "cover",
                        backgroundBlendMode: 'multiply',
                        backgroundPosition: "center center",
                        color: 'white'
                    }}  
                >Collection
                <p className="nav__text">Get out of your comfort zone</p>
                </div>

            </nav>
                
                
            
        </div>
    )
}
