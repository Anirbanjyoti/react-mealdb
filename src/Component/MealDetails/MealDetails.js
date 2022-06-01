import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ShowMeal from '../ShowMeal/ShowMeal';

const MealDetails = () => {

    const {mealId} = useParams();
    const [meal, setMeals] = useState([]);
    useEffect(()=>{
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setMeals(data.meals));
        // console.log(meal);
        // console.log(meal[0]);
        
    }, [mealId])
    return (
        <div>
            <h3>Meal Details of : {mealId}</h3>
            {
               meal.map(mealdetails =><ShowMeal key={mealdetails.idMeal} mealdetails={mealdetails}></ShowMeal>)
            }
            
        </div>
    );
};

export default MealDetails;