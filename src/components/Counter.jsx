import { useState } from "react";

export default function Counter() {
  const [count, setcount] = useState(0);
  function Increment() {
    setcount(count + 1);
  }
  function Decrement() {
    setcount(count - 1);
  }
  return (
    <div>
      <h1>Count value is:{count}</h1>
      
      <button onClick={Decrement}>Decrement</button>
    </div>
  );
}
