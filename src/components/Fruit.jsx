export default function Fruit({ name, price }) {
  return (
    <div>
      {price > 30 ? (
        <li>
          {name}
          {price}
        </li>
      ) : (
        ""
      )}
    </div>
  );
}
