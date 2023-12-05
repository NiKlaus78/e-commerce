import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ProductList from './Component/ProductList';
import ProductItem from './Component/ProductItem';
import Cart from './Component/Cart';
import Checkout from './Component/Checkout';


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductList/>}/>
          <Route path="/product/:id" element={<ProductItem/>}/>
          <Route path="/checkout" element={<Checkout/>}/>
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
