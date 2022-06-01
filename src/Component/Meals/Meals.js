import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';
import './Meals.css';

const Meals = () => {
    const [searchText, setSearchText] = useState(' ');
    const [meals, setMeals] = useState([])
    useEffect(()=>{
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
      
        fetch(url)
        .then(res => res.json())
        .then(data => setMeals(data.meals));
    }, [searchText])
    const searchFood = e =>{
        setSearchText(e.target.value);
    }
    return (
        <div>
           Search Meal : <input onChange={searchFood} type="text" />
           <br />
               <p><b><i> Result Found: {meals.length}</i></b></p>
           <div className='meal-container'>
           {
               meals.map(meal => <Meal key={meal.idMeal} meal={meal}></Meal>)
           }
           </div>
        </div>
    );
};

export default Meals;