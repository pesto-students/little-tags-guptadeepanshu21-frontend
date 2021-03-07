import './App.css';
// import NavBar from './components/NavBar/NavBar';
// import Carousel from './components/Carousel/Carousel'
// import CategoryCard from './components/Category-Card/Card'
// import Brand from './components/Brand/Brand'  
// import Footer from './components/Footer/Footer'

import {Route, Switch} from 'react-router-dom'
import LandingPage from './Pages/LandingPage'
import ProductListPage from './Pages/ProductListPage'

function App() {
  return (
    <div className="main">      
        <Switch>
          <Route exact path ='/' component = {LandingPage} />
          <Route path ='/products' component = {ProductListPage} />
        </Switch>
    </div>
  );
}

export default App;
