export default function Stats({ items }) {
  if (items.length === 0) {
    return (
      <footer className="stats">
        Start Adding some item in your packing list 🚀
      </footer>
    );
  }
  const packedItems = items.length;
  const comfiredItem = items.filter((item) => item.packed).length;
  const percentage = Math.round((comfiredItem / packedItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? `You are ready to go ✈`
          : `👝 You have ${packedItems} item on your list, and you have packed
        ${comfiredItem} (${comfiredItem === 0 ? 0 : percentage}%)`}
      </em>
    </footer>
  );
}
