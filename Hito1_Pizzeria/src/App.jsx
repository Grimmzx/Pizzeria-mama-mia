import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Cart from './components/Cart';
import { pizzaCart } from './components/pizzas';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [cart, setCart] = useState(pizzaCart);
  const [total, setTotal] = useState(0);

  //total
  const calculateTotal = (cart) => {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };


  useEffect(() => {
    setTotal(calculateTotal(cart));
  }, [cart]);

  //añadir pizzas
  const handleAddToCart = (pizza) => {
    const existingPizza = cart.find(item => item.id === pizza.id);
    if (existingPizza) {
      setCart(cart.map(item => 
        item.id === pizza.id 
          ? { ...item, quantity: item.quantity + 1 } 
          : item
      ));
    } else {
      setCart([...cart, { ...pizza, quantity: 1 }]);
    }
  };

  //incrementar cantidasdes en el cart
  const handleIncrement = (id) => {
    setCart(cart.map(item => 
      item.id === id 
        ? { ...item, quantity: item.quantity + 1 } 
        : item
    ));
  };

  //disminuir cantidades en el cart
  const handleDecrement = (id) => {
    setCart(cart => 
      cart
        .map(item => 
          item.id === id 
            ? { ...item, quantity: item.quantity - 1 } 
            : item
        )
        .filter(item => item.quantity > 0) 
    );
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home handleAddToCart={handleAddToCart} />;
      case 'login':
        return <Login />;
      case 'register':
        return <Register />;
      case 'cart':
        return <Cart cart={cart} handleIncrement={handleIncrement} handleDecrement={handleDecrement} />;
      default:
        return <Home handleAddToCart={handleAddToCart} />;
    }
  };

  return (
    <div className="App">
      <Navbar onNavigate={setCurrentPage} total={total} />
      {renderPage()}
      <Footer />
    </div>
  );
};

export default App;
