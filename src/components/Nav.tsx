import { useCart } from "@/hooks/use-cart";
import { Link } from "react-router";

export const Nav = () => {
  const { cart } = useCart();

  return (
    <nav className="bg-gray-600 p-2.5 text-white">
      <ul className="m-0 flex list-none justify-around">
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/cart">Carrito {cart.length === 0 ? "" : cart.length}</Link>
        </li>
      </ul>
    </nav>
  );
};
