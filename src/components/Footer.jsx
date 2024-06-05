import Order from "./Order";

export default function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  const localHour = new Date().toLocaleTimeString();

  return (
    <footer className="footer">
      <div className="order">
        {isOpen ? (
          <Order localHour={localHour} />
        ) : (
          <p>{localHour} Sorry we're currently Closed! 🔴</p>
        )}
      </div>
    </footer>
  );
}
