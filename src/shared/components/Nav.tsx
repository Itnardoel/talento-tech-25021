import { NavLink } from "react-router";

import { useCart } from "@/features/cart/hooks/use-cart";
import { useUser } from "@/features/user/hooks/use-user";

export const Nav = () => {
  const { user } = useUser();
  const { cart } = useCart();

  const isAdmin = user?.includes("ADMIN");

  return (
    <nav className="bg-gray-600 p-2.5 text-white">
      <ul className="m-0 flex list-none justify-around">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "font-bold" : "")}
          >
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/cart"
            className={({ isActive }) => (isActive ? "font-bold" : "")}
          >
            Carrito {cart.length === 0 ? "" : cart.length}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/user"
            className={({ isActive }) => (isActive ? "font-bold" : "")}
          >
            Usuario
          </NavLink>
        </li>
        {isAdmin && (
          <li>
            <NavLink
              to="/admin"
              className={({ isActive }) => (isActive ? "font-bold" : "")}
            >
              Admin
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};
