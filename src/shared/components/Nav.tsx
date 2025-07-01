import { NavLink, useNavigate } from "react-router";

import { CartIcon } from "@/features/cart/components/CartIcons";
import { useCart } from "@/features/cart/hooks/use-cart";
import { useUser } from "@/features/user/hooks/use-user";

export const Nav = () => {
  const { user } = useUser();
  const { cart, openCart } = useCart();

  const navigate = useNavigate();

  const isAdmin = user?.includes("ADMIN");

  const onClickCart = () => {
    if (user) {
      openCart();
    } else {
      navigate("user");
    }
  };

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
            to="/user"
            className={({ isActive }) => (isActive ? "font-bold" : "")}
          >
            Usuario
          </NavLink>
        </li>
        {!isAdmin && (
          <li>
            <button
              type="button"
              className="relative flex cursor-pointer items-center"
              onClick={onClickCart}
            >
              <CartIcon />
              {cart.length > 0 && (
                <small className="absolute -top-1.5 -right-1.5 z-10 flex size-4.5 items-center justify-center rounded-full bg-sky-500 font-semibold">
                  {cart.length}
                </small>
              )}
            </button>
          </li>
        )}
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
