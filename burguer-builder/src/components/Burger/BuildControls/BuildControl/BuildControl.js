import  React from 'react';
import css from './BuildControl.css'

const buildControl = (props) => (
    <div className={css.BuildControl}>
        <div className={css.Label}> {props.label} </div>
        <button onClick={props.removeIngredient} className={css.Less} disabled={props.disabled}> Less </ button>
        <button onClick={props.addIngredient} className={css.More}> More </ button>
    </div>
);

export default buildControl;