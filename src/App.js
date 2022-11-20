import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Brands from "./components/Brands";
import Products from "./components/Products";
import Cart from "./components/Cart";
import './App.css'


function App() {
  return (
    <div className='brand-page-container'>
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Brands />} />
        <Route path="/products" element={<Products/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
