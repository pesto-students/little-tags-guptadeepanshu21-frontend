import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Carousel from "./components/Carousel/Carousel";
import CategoryCard from "./components/Category-Card/Card";
import Brand from "./components/Brand/Brand";
import Footer from "./components/Footer/Footer";
import PopUp from "./components/PopUp";
import Login from "./components/Login/Login";
import {IntlContextProvider} from "./context/IntlContext";

function App() {
  const [showLogin, setShowLogin] = useState(true);

  const showLoginScreen = () => {
    setShowLogin(true);
  };
  return (
    <div className="main">
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
    </div>
  );
}

export default App;
