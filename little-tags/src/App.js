import "./App.css";
import {Route, Switch} from 'react-router-dom'
import LandingPage from './Pages/LandingPage'
import ProductListPage from './Pages/ProductListPage'
import {IntlContextProvider} from "./context/IntlContext";

function App() {
  
  return (
    <div className="main">
      <IntlContextProvider>

       <Switch>
          <Route exact path ='/' component = {LandingPage} />
          <Route path ='/products' component = {ProductListPage} />
        </Switch>
      </IntlContextProvider>
    
    </div>
  );
}

export default App;
