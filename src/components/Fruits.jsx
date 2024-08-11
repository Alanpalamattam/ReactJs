export default function Fruits() {
  //const fruits = ["Apple", "Orange", "Banana", "Mango"];
  const fruits = [
    { name: "Apple", price: 20 },
    { name: "Orange", price: 30 },
    { name: "Banana", price: 40 },
    { name: "Mango", price: 50 },
  ];
  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit.name}>
            {fruit.name} ${fruit.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
