import React from 'react';

const validator = (props) => {

    let layout = null;

    if (props.text.length) {
        layout = (
            <div>
                <p> The current text contains {props.text.length} characters. And must contain at least {props.textMinimumCharacters} characters </p>
                <p> Result: {props.text.length < props.textMinimumCharacters ? 'Text Too Short' : 'Text Long Enough'} </p>
            </div>
        );
    }

    return (layout)
};

export default validator
