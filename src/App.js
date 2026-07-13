import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter ,Routes , Route } from 'react-router-dom';
import Shop from './components/pages/Shop'
import ShopCategory from './components/pages/ShopCategory';
import Prodcut from './components/pages/Prodcut'
import Cart from './components/pages/Cart'
import LoginSignUp from './components/pages/LoginSignUp'
import Footer from './components/Footer/Footer';
import banner_men from './components/Assets/banner_mens.png'
import banner_women from './components/Assets/banner_women.png'
import banner_kids from './components/Assets/banner_kids.png'
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  return (
      <BrowserRouter>
            <Navbar/>
            <Routes>
              <Route path='/' element ={<Shop/>}/>
              <Route path='/fruits' element={<ShopCategory category="fruits" banner={banner_men}/>}/>
              <Route path='/vegetables' element={<ShopCategory category="vegetables" banner={banner_women}/>}/>
              <Route path='/Extras' element={<ShopCategory category="Extras" banner={banner_kids}/>}/>
              <Route path='/prodcut' element={<Prodcut/>}>
              <Route path=':prdocutId' element={<Prodcut/>}/>
              </Route>
              <Route path='/cart' element={<Cart/>}/>
              <Route path='/login' element={<LoginSignUp/>}/>
            </Routes>
            <Footer/>
      </BrowserRouter>

  );
}

export default App;
