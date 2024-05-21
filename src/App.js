import React from "react";
import {Routes,Route} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import RegisterPage from "./Pages/RegisterPage";
import LoginPage from "./Pages/LoginPage";
import UserProfilePage from "./Pages/UserProfilePage";
import UserProfileEditPage from "./Pages/UserProfileEditPage";
import ForgotPage from "./Pages/ForgotPage";
import ResetPage from "./Pages/ResetPage";
import NutritionPage from "./Pages/NutritionPage";


function App() {
  return (
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/register/page' element={<RegisterPage/>}/>
        <Route path='/login/page' element={<LoginPage/>}/>
        <Route path='/profile/page' element={<UserProfilePage/>}/>
        <Route path='/edit/profile/page/:id' element={<UserProfileEditPage/>}/>
        <Route path='/forgot/page/' element={<ForgotPage/>}/>
        <Route path='/reset/page/:tokenn' element={<ResetPage/>}/>
        <Route path='/nutrition/page' element={<NutritionPage/>}/>
      </Routes>
  );
}

export default App;
