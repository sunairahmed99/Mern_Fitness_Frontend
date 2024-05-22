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
import FprogressPage from "./Pages/FprogressPage";
import NutritionEditPage from "./Pages/NutritionEditPage";
import FprogresseditPage from "./Pages/FprogresseditPage";
import SupportPage from "./Pages/SupportPage";


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
        <Route path='/nutrition/edit/page/:id' element={<NutritionEditPage/>}/>
        <Route path='/fitness/progress/page' element={<FprogressPage/>}/>
        <Route path='/fitness/progress/edit/page/:id' element={<FprogresseditPage/>}/>
        <Route path='/support/page' element={<SupportPage/>}/>
      </Routes>
  );
}

export default App;
