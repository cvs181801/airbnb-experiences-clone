import React from 'react'
import star from './star.png'
import Toggler from './Toggler.js'

export default function Featured(props) {
    console.log(props)
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
