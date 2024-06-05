export default function Order({ localHour }) {
  return (
    <>
      <p>{localHour} We're currently Open! 🟢</p>
      <button className="btn">Order</button>
    </>
  );
}
