import './App.css';
import NavBar from './components/NavBar/NavBar';
import Carousel from './components/Carousel/Carousel'
import CategoryCard from './components/Category-Card/Card'
import Brand from './components/Brand/Brand'  
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="main">      
        <NavBar />
        <Carousel/>
        <CategoryCard/>
        <Brand/>
        <Footer/>
    </div>
  );
}

export default App;
