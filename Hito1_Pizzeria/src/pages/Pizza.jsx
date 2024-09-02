import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Pizza = () => {
  const { id } = useParams(); 
  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    const fetchPizza = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/pizzas/${id}`);
        const data = await response.json();
        console.log("Pizza data:", data); 
        setPizza(data);
      } catch (error) {
        console.error("Error fetching pizza:", error);
      }
    };

    fetchPizza();
  }, [id]);

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
