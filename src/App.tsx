import "./App.css";
import { useState } from "react";
import ShoppingListForm from "./components/ShoppingListForm";
import Item from "./models/Item";
import ShoppingList from "./components/ShoppingList";
import { v4 } from "uuid";

function App() {
  const [items, setItems] = useState<Item[]>([]);
  const onAddItem = (product: string, quantity: number) => {
    const id = v4();
    console.log("Made to the app component");
    setItems([...items, { id, product, quantity }]);
    console.log(id);
  };
  return (
    <div>
      <ShoppingList items={items} />
      <ShoppingListForm onAddItem={onAddItem} />
    </div>
  );
}

export default App;
