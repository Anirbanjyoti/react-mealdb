import React from 'react';
import { Link } from 'react-router-dom';

const Meal = (props) => {
    const {idMeal, strMeal, strMealThumb} = props.meal;
    return (
        <div>
            <img src={strMealThumb} alt=''></img>
            <h3>Meal name: {strMeal}</h3>
            <button > <Link to={'/Meals/'+idMeal}>Click to Details</Link></button>
        </div>
    );
};

export default Meal;