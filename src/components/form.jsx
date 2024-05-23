import { useState } from "react";

export default function Form({ onAdditems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = {
      description: description,
      quantity: quantity,
      packed: false,
      id: crypto.randomUUID(), // this where we put all our selecte item in an object
    };

    onAdditems(newItem);

    setDescription("");
    setQuantity(1); // we set our states back to default
    //console.log(newItem);
  }

  function handleChange(e) {
    setDescription(e.target.value);
    //console.log(e.target.value);
  }

  function handleSelect(e) {
    setQuantity(Number(e.target.value));
    //console.log(e.target.value);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 Trip</h3>
      <select onChange={handleSelect} value={quantity}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="input your Item..."
        value={description}
        onChange={handleChange}
      />
      <button>add</button>
    </form>
  );
}
