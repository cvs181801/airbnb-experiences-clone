import React from 'react'

export default function Emoji(props) {
    const anEmoji = props.isFilled ? 'C' : 'Not an emoji';
    return (
        <div>
            <h1
                onClick={props.handleClick2}
            >{anEmoji}</h1>
        </div>
    )
}
