import './App.css';
import NavBar from './components/NavBar/NavBar';
import Carousel from './components/Carousel/Carousel'
import CategoryCard from './components/Category-Card/Card'
import Brand from './components/Brand/Brand'  
function App() {
  return (
    <div className="main">      
        <NavBar />
        <Carousel/>
        <CategoryCard/>
        <Brand/>
    </div>
  );
}

export default App;
