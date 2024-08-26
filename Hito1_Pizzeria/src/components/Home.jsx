import React, { useEffect, useState } from 'react';
import '../assets/styles/Home.css'

const Home = () => {
    const [pizzas, setPizzas] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/pizzas')
            .then(response => response.json())
            .then(data => setPizzas(data))
            .catch(error => console.error('Error fetching pizzas:', error));
    }, []);

    return (
        <div>
            <h1>Lista de Pizzas</h1>
            <div className="pizza-list">
                {pizzas.map(pizza => (
                    <div key={pizza.id} className="pizza-card">
                        <img src={pizza.img} alt={pizza.name} />
                        <h2>{pizza.name}</h2>
                        <p>{pizza.desc}</p>
                        <p><strong>Precio:</strong> ${pizza.price}</p>
                        <p><strong>Ingredientes:</strong> {pizza.ingredients.join(', ')}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
