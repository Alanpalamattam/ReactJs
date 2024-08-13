export default function Fruit({ name, price }) {
  return (
    <div>
      {price > 30 ? (
        <h3>
          {name}
          {price}
        </h3>
      ) : (
        ""
      )}
    </div>
  );
}
