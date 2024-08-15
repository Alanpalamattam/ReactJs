export default function Fruit({ name, price, soldout }) {
  return (
    <div>
      {price > 20 ? (
        <h3>
          {name} <br />
          {price}
          {soldout ? "Soldout" : "Available"}
        </h3>
      ) : (
        ""
      )}
    </div>
  );
}
