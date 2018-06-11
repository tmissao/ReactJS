import React from 'react';
import css from './Buildcontrols.css'
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
]

const buildControls = (props) => (
    <div className={css.BuildControls}>
        <p> Current Price: <strong>$ {props.price.toFixed(2)}</strong></p>
        {controls.map((e) =>
            <BuildControl
                key={e.label}
                label={e.label}
                addIngredient={() => props.ingredientAdd(e.type)}
                removeIngredient={() => props.ingredientRemove(e.type)}
                disabled={props.disabled[e.type]}
            />
        )}
        <button 
            className={css.OrderButton}
            disabled={!props.purchaseable}
            onClick={props.purchase}>
                ORDER NOW 
        </button>
    </div>
);

export default buildControls;