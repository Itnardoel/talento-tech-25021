import { Link, useLocation } from "react-router";

import { useCart } from "@/hooks/use-cart";
import { useUser } from "@/hooks/use-user";

export const Nav = () => {
  const location = useLocation();

  const { user } = useUser();
  const { cart } = useCart();

  const isAdmin = user?.includes("ADMIN");

  return (
    <nav className="bg-gray-600 p-2.5 text-white">
      <ul className="m-0 flex list-none justify-around">
        <li>
          <Link to="/" className={location.pathname === "/" ? "font-bold" : ""}>
            Inicio
          </Link>
        </li>
        <li>
          <Link
            to="/cart"
            className={location.pathname === "/cart" ? "font-bold" : ""}
          >
            Carrito {cart.length === 0 ? "" : cart.length}
          </Link>
        </li>
        <li>
          <Link
            to="/user"
            className={location.pathname === "/user" ? "font-bold" : ""}
          >
            Usuario
          </Link>
        </li>
        {isAdmin && (
          <li>
            <Link
              to="/admin"
              className={location.pathname === "/admin" ? "font-bold" : ""}
            >
              Admin
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};
