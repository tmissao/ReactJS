import React from 'react';
import css from './DrawerToggle.css'

const toggle = (props) => (
    <div className={css.DrawerToggle} onClick={props.clicked}> 
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default toggle;