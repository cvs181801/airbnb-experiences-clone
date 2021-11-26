import React from 'react'
import featuredSwim from './image_12.png'
import featuredWedding from './wedding-photography 1.png'
import featuredBike from './mountain-bike 1.png'
import star from './star.png'

export default function Featured() {
    return (
        <div
            className="featured"
        >
            <img
                src={featuredSwim}
                alt="featured Air BnB Experiences Swim"
                className="featuredImgSwim"
            >
            </img>

            <img
                src={star}
                alt="star"
                className="star"
            >
            </img>

            <span className="grey">5.0</span>
            <span className="grey">(6) • </span>
            <span className="grey">USA</span>
            <p>Life Lessons with Katie Zaferes</p>
            <p><span className="strong">From $136</span> / person</p>

            {/* <img
                src={featuredWedding}
                alt="featured Air BnB Experiences Wedding"
                className="featuredImgWed"
            >
            </img>

            <img
                src={featuredBike}
                alt="featured Air BnB Experiences Bike"
                className="featuredImgBike"
            >
            </img> */}
        </div>
    )
}
