import React from 'react';
import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';

const order = (props) => {
    const summary = Object.keys(props.ingredients).map((key) => {
        return <li key={key} > <span style={{ textTransform: 'capitalize' }}>{key}</span>: {props.ingredients[key]} </li>
    });

    return (
        <Aux>
            <h3> Your Order: </h3>
            <p> A delicious burger with the following ingredients: </p>
            <ul>
                {summary}
            </ul>
            <p><strong> Total Price: ${props.price.toFixed(2)} </strong></p>
            <p> Continue to Checkout ? </p>
            <Button btnType='Danger' clicked={props.purchaseCanceled}> CANCEL </Button>
            <Button btnType='Success' clicked={props.purchaseContinued}> CONTINUE </Button>
        </Aux>
    )
};

export default order;