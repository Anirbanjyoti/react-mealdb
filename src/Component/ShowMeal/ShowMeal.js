import React from 'react';

const ShowMeal = (props) => {
    const {strMeal, strMealThumb, strArea, strIngredient1, strInstructions} = props.mealdetails;
    return (
        <div>
            <img src={strMealThumb} alt=''></img>
            <h3>Meal Name: {strMeal}</h3>
            <h4>Available Area: {strArea}</h4>
            <p>Ingredient: {strIngredient1}</p>
            <p>Instructions: {strInstructions}</p>
        </div>
    );
};

export default ShowMeal;