import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

class BurguerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        purchaseable: false,
        purchasing: false
    }

    purchasingHandler = () => {
        this.setState({purchasing: true});
    }

    purchasingCancelHandler = () => {
        this.setState({purchasing: false});
    }

    purchasingContinueHandler = () => {
        alert('You continue!');
    }

    updatePurchaseState = (ingredients) => {
        const sum = Object.keys(ingredients).map(key => ingredients[key]).reduce((acc, value) => acc + value, 0);
        console.log(sum)
        this.setState({purchaseable: sum > 0})  
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updateCount = oldCount + 1;
        const newIngredients = { ...this.state.ingredients};
        newIngredients[type] = updateCount;

        const priceAdd = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAdd

        this.setState({ ingredients: newIngredients, totalPrice: newPrice });

        this.updatePurchaseState(newIngredients);
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];

        if (oldCount <= 0) {
            return;
        }

        const updateCount = oldCount - 1;
        const newIngredients = { ...this.state.ingredients};
        newIngredients[type] = updateCount;

        const priceRemove = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceRemove

        this.setState({ ingredients: newIngredients, totalPrice: newPrice });

        this.updatePurchaseState(newIngredients);
    }

    render() {
        const disabledInfo = { ...this.state.ingredients }
        for(let key in disabledInfo) { disabledInfo[key] = disabledInfo[key] <= 0 }

        return (
            <Aux>
                <Modal 
                    show={this.state.purchasing}
                    modalClosed={this.purchasingCancelHandler}
                >
                    <OrderSummary 
                        ingredients={this.state.ingredients}
                        price={this.state.totalPrice}
                        purchaseCanceled={this.purchasingCancelHandler}
                        purchaseContinued={this.purchasingContinueHandler}
                    />
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    purchase={this.purchasingHandler}
                    purchaseable={this.state.purchaseable}
                    price={this.state.totalPrice}
                    disabled={disabledInfo}
                    ingredientAdd={this.addIngredientHandler}
                    ingredientRemove={this.removeIngredientHandler} 
                />
            </Aux>
        );
    }
}

export default BurguerBuilder;