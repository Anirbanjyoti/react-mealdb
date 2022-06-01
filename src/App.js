// import logo from './logo.svg';

import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Component/Header/Header';
import Meals from './Component/Meals/Meals';
import MealDetails from './Component/MealDetails/MealDetails';
import NotFound from './Component/NotFound/NotFound';
import Home from './Component/Home/Home';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/Meals' element={<Meals></Meals>}></Route>
        <Route path='/Meals/:mealId' element={<MealDetails></MealDetails>}></Route>
        
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
