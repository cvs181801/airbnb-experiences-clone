import React from "react"

export default function Toggler(props) {
    console.log("toggler props :", props)
    return (
        <div>
            <p
                onClick={props.handleClick}
                className="toggler"
            >{props.TogglerValue ? "❤️" : "♡"}</p>
        </div>
    )
}
