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

            <span>5.0</span>
            <span>(6) • </span>
            <span>USA</span>
            <p>Life Lessons with Katie Zaferes</p>
            <p>From $136 / person</p>

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
