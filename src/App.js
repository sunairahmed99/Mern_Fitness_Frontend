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
import Logout from "./components/Logout/Logout";
import Protect from "./components/Protect";
import PasswordUpdatePage from "./Pages/PasswordUpdatePage";
import AdminProtect from "./components/AdminProtect";
import Admincheck from "./components/Admincheck";
import AllUserPage from "./Pages/AllUserPage";
import AllNutritionPage from "./Pages/AllNutritionPage";
import AllFitnessPage from "./Pages/AllFitnessPage";
import AllSupportPage from "./Pages/AllSupportPage";
import NutritionChartPage from "./Pages/NutritionChartPage";
import FprogressChartPage from "./Pages/FprogressChartPage";


function App() {
  return (
      <Routes>
 
        {/* All Admin Routes Starts Here */}
        <Route path='/admin/check/page' element={<AdminProtect children={<Admincheck/>}></AdminProtect>}/>
        <Route path='/all/user/page' element={<AdminProtect children={<AllUserPage/>}></AdminProtect>}/>
        <Route path='/all/nutrition/page' element={<AdminProtect children={<AllNutritionPage/>}></AdminProtect>}/>
        <Route path='/all/progress/page' element={<AdminProtect children={<AllFitnessPage/>}></AdminProtect>}/>
        <Route path='/all/support/page' element={<AdminProtect children={<AllSupportPage/>}></AdminProtect>}/>
        {/* All Admin Routes Starts Here */}



        {/* ALL ACCESS ROUTES STARTS HERE */}
        <Route path='/' element={<HomePage/>}/>
        <Route path='/register/page' element={<RegisterPage/>}/>
        <Route path='/login/page' element={<LoginPage/>}/>
        <Route path='/forgot/page/' element={<ForgotPage/>}/>
        <Route path='/reset/page/:tokenn' element={<ResetPage/>}/>
        
        
        {/* ALL ACCESS ROUTES Ends HERE */}

        {/* ALL AUTHENTICATE USER ROUTES STARTS HERE */}
        <Route path='/logout/page' element={<Protect children={<Logout/>}></Protect>}/>
        <Route path='/profile/page' element={<Protect children={<UserProfilePage/>}></Protect> }/>
        <Route path='/edit/profile/page/:id' element={<Protect children={<UserProfileEditPage/>}></Protect>}/>
        <Route path='/password/update/page/' element={<Protect children={<PasswordUpdatePage/>}></Protect>}/>
        <Route path='/nutrition/page' element={<Protect children={<NutritionPage/>}></Protect>}/>
        <Route path='/nutrition/chart' element={<Protect children={<NutritionChartPage/>}></Protect>}/>
        <Route path='/nutrition/edit/page/:id' element={<Protect children={<NutritionEditPage/>}></Protect>}/>
        <Route path='/fitness/progress/page' element={<Protect children={<FprogressPage/>}></Protect>}/>
        <Route path='/fitness/progress/edit/page/:id' element={<Protect children={<FprogresseditPage/>}></Protect>}/>
        <Route path='/fitness/progress/chart' element={<Protect children={<FprogressChartPage/>}></Protect>}/>
        <Route path='/support/page' element={<Protect children={<SupportPage/>}></Protect>}/>
        {/* ALL AUTHENTICATE USER ROUTES Ends HERE */}
      </Routes>
  );
}

export default App;
