import Counter from "./Counter";

export function Greet() {
  const cart: any = [];
  const showCart = () => (cart.length === 0 ? "empty cart" : cart);
  return (
    <div>
      <p>{showCart()}</p>
      <Counter />
    </div>
  );
}
