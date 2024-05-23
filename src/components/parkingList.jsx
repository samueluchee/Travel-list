// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
//   { id: 3, description: "Shoes", quantity: 6, packed: true },
//   { id: 4, description: "Snacks", quantity: 10, packed: false },
//   { id: 5, description: "Shirt", quantity: 15, packed: true },
// ];

import { useState } from "react";

export default function ParkingList({
  items,
  onAddDeleteItem,
  onToggleItems,
  onClearItem,
}) {
  const [sort, setSort] = useState("input");

  function handleChange(e) {
    setSort(e.target.value);
  }

  let sortedItems;

  if (sort === "input") sortedItems = items;

  if (sort === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sort === "packed") {
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <List
            item={item}
            key={crypto.randomUUID()}
            onAddDeleteItem={onAddDeleteItem}
            onToggleItems={onToggleItems}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={sort} onChange={handleChange}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onClearItem}>Clear list</button>
      </div>
    </div>
  );
}

function List({ item, onAddDeleteItem, onToggleItems }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onToggleItems(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onAddDeleteItem(item.id)}>❌</button>
    </li>
  );
}
