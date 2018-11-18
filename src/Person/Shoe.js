import React from 'react';

const Shoe = ()=>{
    let stinks = ['awful','moderate','flowery'];
    let stinkFactor = stinks[Math.min(2,Math.floor(Math.random()*(stinks.length)))];
    return (
        <span>My shoes are: {stinkFactor}</span>
    )



}

export default Shoe;