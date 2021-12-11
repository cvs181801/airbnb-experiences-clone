import React, { useState } from "react"

export default function Toggler() {
    
    const [TogglerValue, setTogglerValue] = useState(false);

    function handleToggler(event) {
        event.preventDefault(); 
        console.log("clicked/favorited!");
        setTogglerValue(prevValue => !prevValue)
        console.log(TogglerValue);
      }

    return (
        <div>
            <p
                onClick={handleToggler}
                className="toggler"
            >{TogglerValue ? "❤️" : "♡"}</p>
        </div>
    )
}
