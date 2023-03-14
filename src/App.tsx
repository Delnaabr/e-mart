import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Products from './components/Products';
// import Product from './components/product';
import { Switch, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Register from './components/Register';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
       <Route path="/home" element={<Home />} />
        {/* <Route path="/products" element={<Products />} /> */}
        <Route path="/login" element={ <Login />}/>
          <Route path="/register" element={<Register />} /> 
          <Route path='/products' Component={Products}/>
        {/* <Route path="/products/:id" element={<Product />} /> */}
      </Switch>
    </>
  );
}

export default App;
