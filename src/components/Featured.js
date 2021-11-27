import React from 'react'
import star from './star.png'

export default function Featured(props) {
    console.log(props)
    return (
        <div
        className="featuredCard"
        >
            <img
                src={props.src}
                alt={props.alt}
                className="featuredImg"
            >
            </img>

            <img
                src={star}
                alt="star"
                className="star"
            >
            </img>

            <p className="grey">{props.rating}</p>
            <p className="grey">{props.numOfRatings} • </p>
            <p><span className="grey">{props.country}</span></p>
            <p>{props.summary}</p>
            <p><span className="strong">{props.startingPrice}</span> / person</p>
        </div>
    )
}
