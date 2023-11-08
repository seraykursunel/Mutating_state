import { useState } from "react";
import ShoppingList from "./ShoppingList";
import NewItemForm from "./NewItemForm";

function App() {
  const [items, setItems] = useState(["elma", "muz"]);

  function handleAddItem(value) {
    const newItems = [...items, value];
    setItems(newItems);
  }

  return (
    <div>
      {items.length > 0 && <ShoppingList items={items} />}
      <NewItemForm handleAddItem={handleAddItem} />
    </div>
  );
}

export default App;
