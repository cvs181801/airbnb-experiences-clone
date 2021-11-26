import React from 'react'
import featuredSwim from './image_12.png'
import featuredWedding from './wedding-photography 1.png'
import featuredBike from './mountain-bike 1.png'

export default function Featured() {
    return (
        <div>
            <img
                src={featuredSwim}
                alt="featured Air BnB Experiences Swim"
                className="featuredImgSwim"
            >
            </img>

            <img
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
            </img>
        </div>
    )
}
