import React from 'react';
import css from './Burger.css';
import BurgerIngredient from './BurgerIngredients/BurgerIngredient';

const burger = (props) => {

    let ingredients = Object.keys(props.ingredients)
        .map(key => {
            return [...Array(props.ingredients[key])].map((_, i) => {
                return <BurgerIngredient key={key + i} type={key} />
            })
        })
        .reduce((acc, value) => {
            return acc.concat(value);
        }, [])

        if (!ingredients.length) {
            ingredients = <p> Please start adding ingredients! </p>
        }

    console.log(ingredients)

    return (
        <div className={css.Burger}>
            <BurgerIngredient type="bread-top" />
            {ingredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;