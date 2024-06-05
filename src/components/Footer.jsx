export default function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  const localHour = new Date().toLocaleTimeString();

  if (isOpen) {
    return (
      <footer className="footer"> {localHour} We're currently Open!</footer>
    );
  }

  return (
    <footer className="footer">{localHour} We're currently Closed!</footer>
  );
}
