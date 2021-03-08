import { useState } from "react";

import NavBar from '../components/NavBar/NavBar';
import Carousel from '../components/Carousel/Carousel'
import CategoryCard from '../components/Category-Card/Card'
import Brand from '../components/Brand/Brand'  
import Footer from '../components/Footer/Footer'
import {IntlContextProvider} from "../context/IntlContext";
import PopUp from "../components/PopUp";
import Login from "../components/Login/Login";

function LandingPage() {
  const [showLogin, setShowLogin] = useState(true);

  const showLoginScreen = () => {
    setShowLogin(true);
  };
  return (
    <>      
    <IntlContextProvider>
    <NavBar showLoginScreen={showLoginScreen} />
    <Carousel />
    <CategoryCard />
    <Brand />
    <Footer />
    {showLogin ? (
      <PopUp>
        <Login />
      </PopUp>
    ) : (
      ""
    )}
  </IntlContextProvider>
      </>
  );
}

export default LandingPage;
