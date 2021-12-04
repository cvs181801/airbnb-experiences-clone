import React, { useState } from "react"

export default function Toggler() {
    const [TogglerValue, setTogglerValue] = useState(false);

    function handleClick(event) {
        event.preventDefault();
        console.log("clicked");
        setTogglerValue(prevValue => !prevValue)
        console.log(TogglerValue);
    }

    return (
        <div>
            <p
                onClick={handleClick}
                className="toggler"
            >{TogglerValue ? "❤️" : "♡"}</p>
        </div>
    )
}
