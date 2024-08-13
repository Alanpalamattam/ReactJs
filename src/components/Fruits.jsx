import Fruit from "./Fruit";

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
        {Fruits.map((fruit) => (
          <Fruit key={fruit.name} name={fruit.name} price={fruit.price} />
        ))}
      </ul>
    </div>
  );
}
