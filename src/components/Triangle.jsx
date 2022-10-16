import React from 'react'

const Triangle = ({color="#111" , rotate="rotate(0)", className}) => {
    return (
        <div className={className}>
            <svg style={{width: "1em", height: "1em", verticalAlign: "middle", fill: color }} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" transform={rotate}><path d="M63.333 63.333h896v896z" /></svg>
        </div>
    )
}

export default Triangle