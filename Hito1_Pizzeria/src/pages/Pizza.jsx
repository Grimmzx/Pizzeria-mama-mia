import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Pizza = () => {
  const { id } = useParams(); 
  const [pizza, setPizza] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPizza = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/pizzas/${id}`);
        if (!response.ok) {
          throw new Error("Error al obtener la pizza");
        }
        const data = await response.json();
        setPizza(data);
      } catch (error) {
        console.error("Error fetching pizza:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPizza();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleAddToCart = () => {
   
    console.log('Pizza añadida al carrito:', pizza);
  
  };

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
      <h2>Precio: ${pizza.price.toLocaleString()}</h2>
      <button onClick={handleAddToCart}>Añadir al carrito</button>
    </div>
  );
};

export default Pizza;
