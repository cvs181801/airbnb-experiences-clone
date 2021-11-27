import React from 'react'
import star from './star.png'

export default function Featured(props) {
    console.log(props)
    return (
        <div
            className={props.className}
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

            <span className="grey">{props.rating}</span>
            <span className="grey">{props.numOfRatings} • </span>
            <span className="grey">{props.country}</span>
            <p>{props.summary}</p>
            <p><span className="strong">{props.startingPrice}</span> / person</p>
        </div>
    )
}
