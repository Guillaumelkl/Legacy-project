import { useState,useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Nav from "./components/freeComponents/Navbar/Nav";
import LandingPage from "./components/freeComponents/LandingPage/LandingPage";
import RegistrationForm from "./components/freeComponents/RegistrationForm/RegistrationForm";
import LoginForm from "./components/freeComponents/LoginForm/LoginForm";
import HomePage from "./components/protectedComponents/HomePage/Home";
import GalleryForm from "./components/protectedComponents/GalleryForm/GalleryForm";
import Favorites from "./components/protectedComponents/Favorites/Favorites";
import Logout from "./components/protectedComponents/logout/logout";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleUserState = (state) => {
    setIsLoggedIn(state)
  }

  return (
      <div>
        <Nav userState= {isLoggedIn}/>
        <div className='container'>
          <Routes>
            <Route path='/' element={<LandingPage/>} />
            <Route path='/homePage' element={<HomePage />} />
            <Route path='/register' element={<RegistrationForm />} />
            <Route path='/login' element={<LoginForm onLogin = {handleUserState} />} />
            <Route path='/postPhotos' element={<GalleryForm />} />
            <Route path='/favourites' element={<Favorites />} />
            <Route path='/logout' element={<Logout onLogout = {handleUserState}/>} />
          </Routes>
        </div>
      </div>
  );
}

export default App;
