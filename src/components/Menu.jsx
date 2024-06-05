import Pizza from "./Pizza";
import { pizzaData } from "../data/data";

export default function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>

      <ul className="pizzas">
        {pizzaData.map((pizza) => (
          <Pizza pizzaData={pizza} key={pizza.name} />
        ))}
      </ul>
    </main>
  );
}
