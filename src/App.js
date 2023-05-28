import { useState } from "react";
import Drinks from "./components/Drinks/Drinks";
import NewDrink from "./components/NewDrink/NewDrink";

const DAMB_DATA = [
  {
    id: 'e1',
    text: 'Glass od 250ml',
    amount: 0.25,
    date: new Date(2020, 7, 14),
  },
  {
    id: 'e1',
    text: 'Glass od 500ml',
    amount: 0.5,
    date: new Date(2020, 1, 16),
  },
  {
    id: 'e1',
    text: 'Glass od 700ml',
    amount: 0.7,
    date: new Date(2020, 2, 20),
  },
]

function App() {

  const [drinks, setDrinks] = useState(DAMB_DATA);

  const addDrinkHandler = (drink) => {
    console.log(drink);
  }

  return (
    <div className="App">
      <NewDrink items={drinks} onAddDrink={addDrinkHandler} />
      <Drinks items={drinks} />
    </div>
  );
}

export default App;
