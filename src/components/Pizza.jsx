export default function Pizza({ pizzaData }) {
  const { name, ingredients, price, photoName, soldOut } = pizzaData;

  return (
    <li className={`pizza ${soldOut && "sold-out"}`}>
      <img src={photoName} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{soldOut ? "SOLD OUT" : price}</span>
      </div>
    </li>
  );
}
