import { useState } from "react";
import Drinks from "./components/Drinks/Drinks";
import NewDrink from "./components/NewDrink/NewDrink";

const DAMB_DATA = [
  {
    id: 'e1',
    text: 'Glass od 250ml',
    amount: 0.25
  },
  {
    id: 'e1',
    text: 'Glass od 500ml',
    amount: 0.5
  },
  {
    id: 'e1',
    text: 'Glass od 700ml',
    amount: 0.7
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
      <Drinks />
    </div>
  );
}

export default App;
