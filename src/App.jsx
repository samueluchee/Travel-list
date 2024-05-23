import { useState } from "react";
import Logo from "./components/Logo";
import Form from "./components/form";
import ParkingList from "./components/parkingList";
import Stats from "./components/statistics";

function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((prev) => [...prev, item]);
  }

  function handleDeleteItem(id) {
    setItems((prev) => prev.filter((item) => item.id !== id));
  }

  function handleToggleItems(id) {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearItem() {
    const confirm = window.confirm(
      "Are you sure you want to clear the whole list?"
    );

    if (confirm) {
      setItems([]);
    }
  }

  return (
    <div className="app">
      <Logo />
      <Form onAdditems={handleAddItems} />
      <ParkingList
        items={items}
        onAddDeleteItem={handleDeleteItem}
        onToggleItems={handleToggleItems}
        onClearItem={handleClearItem}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
