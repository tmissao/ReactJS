import React, { Component } from 'react';

const output = (props) => {
    const resultStyle = {fontWeight: 'bold'}
    return (
        <div>
            <p> The username is: </p>
            <p style={resultStyle}> {props.username}</p>
        </div>
    )
};

export default output;