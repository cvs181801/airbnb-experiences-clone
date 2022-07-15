import React from 'react'

export default function Emoji(props) {
    console.log(props)
    const anEmoji = props.isFilled ? 'C' : 'Not an emoji';
    return (
        <div>
            <h1
                onClick={props.handleClick}
            >{anEmoji}</h1>
        </div>
    )
}
