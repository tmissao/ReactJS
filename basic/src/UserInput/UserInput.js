import React, { Component } from 'react';
import './UserInput.css'

const input = (props) => {
    return (
        <input
            className='UserInput'
            type='text' 
            onChange={props.onChangeHandler}
            value={props.username}
        />
    )
}

export default input;