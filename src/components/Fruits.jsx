import Fruit from "./Fruit";

export default function Fruits() {
  //const fruits = ["Apple", "Orange", "Banana", "Mango"];
  const fruits = [
    { name: "Apple", price: 20, soldout: true },
    { name: "Orange", price: 30, soldout: false },
    { name: "Banana", price: 40, soldout: false },
    { name: "Mango", price: 50, soldout: true },
    { name: "Jackfruit", price: 50, soldout: true },
  ];
  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          <Fruit
            key={fruit.name}
            name={fruit.name}
            price={fruit.price}
            soldout={fruit.soldout}
          />
        ))}
      </ul>
    </div>
  );
}
