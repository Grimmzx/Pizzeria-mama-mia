import React, { useEffect, useState } from 'react';
import CardPizza from '../pages/CardPizza'; 
import '../assets/styles/Home.css'; 

const Home = () => {
    const [pizzas, setPizzas] = useState([]);

    useEffect(() => {

        fetch('http://localhost:5000/api/pizzas')
            .then(response => response.json())
            .then(data => setPizzas(data))
            .catch(error => console.error('Error fetching pizzas:', error));
    }, []);

    const handleAddToCart = (pizza) => {
        console.log(`${pizza.name} añadido al carrito.`);

    };

    return (
        <div>
            <h1>Lista de Pizzas</h1>
            <div className="pizza-list">
                {pizzas.map(pizza => (
                    <CardPizza 
                        key={pizza.id} 
                        pizza={pizza} 
                        onAddToCart={handleAddToCart} 
                    />
                ))}
            </div>
        </div>
    );
};

export default Home;
