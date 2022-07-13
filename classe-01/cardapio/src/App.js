import Dish from './components/dish'
import { useState } from 'react';

function App() {
  const dishes = [
    {
      name: "Dobradinha",
      price: 25
    },
    {
      name: "Feijoada",
      price: 20
    },
    {
      name: "Moqueca",
      price: 73.25
    }
  ];

  const [quantities, setQuantities] = useState({});
  dishes.sort((dish1, dish2) => (quantities[dish2.name] || 0) - (quantities[dish1.name] || 0));

  return (
    <>
      <h1>Cardápio</h1>
      <ul>
        {dishes.map(dish =>
          <li key={dish.name}>
            <Dish
              name={dish.name}
              price={dish.price}
              qty={quantities[dish.name] || 0}
              setQuantities={(qty) =>
                setQuantities((quantities) => ({ ...quantities, [dish.name]: qty }))
              }
            />
          </li>
        )
        }
      </ul>
    </>
  );
}

export default App;