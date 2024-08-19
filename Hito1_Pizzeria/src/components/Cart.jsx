import React from 'react';

const Cart = ({ cart, handleIncrement, handleDecrement }) => {
  
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="container mt-5">
      <h2>Carrito de Compras</h2>
      <ul className="list-group mb-3">
        {cart.map(pizza => (
          <li key={pizza.id} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <img src={pizza.img} alt={pizza.name} style={{ width: '50px', marginRight: '10px' }} />
              <strong>{pizza.name}</strong>
              <p className="mb-1">Cantidad: {pizza.quantity}</p>
              <p className="mb-1">Precio: ${pizza.price.toLocaleString()}</p>
            </div>
            <div className="d-flex align-items-center">
              <button onClick={() => handleDecrement(pizza.id)} className="btn btn-danger btn-sm mx-2">-</button>
              <button onClick={() => handleIncrement(pizza.id)} className="btn btn-success btn-sm">+</button>
            </div>
          </li>
        ))}
      </ul>
      <h3>Total de la compra: ${total.toLocaleString()}</h3>
      <button className="btn btn-primary">Pagar</button>
    </div>
  );
};

export default Cart;
