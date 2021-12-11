import React from 'react'
import star from './star.png'
import Toggler from './Toggler.js'
import cardsDataMore from './cardsDataMore'

export default function FeaturedMore(props) {
    console.log("propsMore :", props)
    return (
            <div
            className="featuredCard"
            >
            
                <div
                    className="featuredImg"
                    style={{
                        backgroundColor: "#918E9B",
                        backgroundImage: `url(${props.src})`,
                        backgroundSize: "cover"}}
                > <Toggler
                       
                />
                
                </div>

                <img
                    src={star}
                    alt="star"
                    className="star"
                >
                </img>

                <p className="grey">{props.rating} {props.numOfRatings} • {props.country}</p>
                <p>{props.summary}</p>
                <p><span className="strong">{props.startingPrice}</span> / person</p>
                
            </div>
    )
}
