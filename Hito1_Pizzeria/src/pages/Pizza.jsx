import React, { useState, useEffect } from 'react';

const Pizza = () => {
  const [pizza, setPizza] = useState(null);
  const pizzaId = "p001"; // ID fijo por ahora

  useEffect(() => {
    const fetchPizza = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/pizzas/${pizzaId}`);
        const data = await response.json();
        setPizza(data);
      } catch (error) {
        console.error("Error fetching pizza:", error);
      }
    };

    fetchPizza();
  }, []);

  if (!pizza) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>{pizza.name}</h1>
      <img src={pizza.img} alt={pizza.name} style={{ width: '300px', height: 'auto' }} />
      <p>{pizza.desc}</p>
      <h3>Ingredientes</h3>
      <ul>
        {pizza.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h2>Precio: ${pizza.price}</h2>
      <button>Añadir al carrito</button>
    </div>
  );
};

export default Pizza;
