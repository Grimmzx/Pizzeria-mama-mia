import React, { useState } from 'react';
import { useCart } from '../components/CartContext';  
import { useUser } from '../components/UserContext';

const Cart = () => {
  const { cartItems, incrementItemQuantity, decrementItemQuantity, totalPrice } = useCart();
  const { token } = useUser();  
  const [successMessage, setSuccessMessage] = useState(''); 
  const handleCheckout = async () => {
    if (!token) {
      alert('Debes iniciar sesión para realizar la compra.');
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/checkouts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ cart: cartItems }), 
      });

      if (response.ok) {
        setSuccessMessage('Compra realizada con éxito!');
      
      } else {
        setSuccessMessage('Error al realizar la compra.');
      }
    } catch (error) {
      console.error('Error:', error);
      setSuccessMessage('Error al realizar la compra.');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Carrito de Compras</h2>
      <ul className="list-group mb-3">
        {cartItems.map(pizza => (
          <li key={pizza.id} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <img src={pizza.img} alt={pizza.name} style={{ width: '50px', marginRight: '10px' }} />
              <strong>{pizza.name}</strong>
              <p className="mb-1">Cantidad: {pizza.quantity}</p>
              <p className="mb-1">Precio: ${pizza.price.toLocaleString()}</p>
            </div>
            <div className="d-flex align-items-center">
              <button onClick={() => decrementItemQuantity(pizza.id)} className="btn btn-danger btn-sm mx-2">-</button>
              <button onClick={() => incrementItemQuantity(pizza.id)} className="btn btn-success btn-sm">+</button>
            </div>
          </li>
        ))}
      </ul>
      <h3>Total de la compra: ${totalPrice.toLocaleString()}</h3>
      <button className="btn btn-primary" onClick={handleCheckout} disabled={!token}>Pagar</button>
      {successMessage && <div className="alert alert-success mt-3">{successMessage}</div>} 
    </div>
  );
};

export default Cart;
