import { NavLink, useNavigate } from "react-router";

import { PackagePlus, User } from "./Icons";

import { CartIcon } from "@/features/cart/components/CartIcons";
import { useCart } from "@/features/cart/hooks/use-cart";
import { cartReducer } from "@/features/cart/utils/cart-reducer";
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
    <nav className="p-2.5 text-white">
      <ul className="m-0 flex list-none items-center justify-around space-x-4">
        <li>
          <NavLink
            to="/user"
            aria-label="Ir a panel de usuario"
            className={({ isActive }) =>
              `${isActive ? "text-black" : "text-gray-400"} p-2 transition-colors duration-200 hover:text-gray-500`
            }
          >
            <User />
          </NavLink>
        </li>
        {!isAdmin && (
          <li>
            <button
              type="button"
              aria-label="Abrir carrito"
              className="relative flex cursor-pointer p-2 text-gray-400 transition-colors duration-200 hover:text-gray-500"
              onClick={onClickCart}
            >
              <CartIcon />
              {cart.length > 0 && (
                <small className="absolute -top-1.5 -right-1.5 z-10 inline-flex size-4.5 animate-pulse items-center justify-center rounded-full bg-sky-500 text-xs font-semibold text-white">
                  {cartReducer(cart, "totalProducts").toString()}
                </small>
              )}
            </button>
          </li>
        )}
        {isAdmin && (
          <li>
            <NavLink
              to="/admin"
              aria-label="Ir a panel de administrador"
              className={({ isActive }) =>
                `${isActive ? "text-black" : "text-gray-400"} p-2 transition-colors duration-200 hover:text-gray-500`
              }
            >
              <PackagePlus />
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};
