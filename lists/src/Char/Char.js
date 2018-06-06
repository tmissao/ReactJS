import React from 'react';

const char = (props) => {
    const charStyle = { display: 'inline-block', padding: 16, textAlign: 'center', margin: 16, border: '1px solid black' }
    return (<p onClick={props.onClick} style={charStyle} > {props.character} </p>)
}

export default char;