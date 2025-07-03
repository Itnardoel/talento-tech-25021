import { NavLink, useNavigate } from "react-router";

import { PackagePlus, User } from "./Icons";

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
    <nav className="p-2.5 text-white">
      <ul className="m-0 flex list-none items-center justify-around space-x-4">
        <li>
          <NavLink
            to="/user"
            className={({ isActive }) =>
              `${isActive ? "text-white" : "text-gray-400"} p-2 transition-colors duration-200 hover:text-gray-500`
            }
          >
            <User />
          </NavLink>
        </li>
        {!isAdmin && (
          <li>
            <button
              type="button"
              className="relative flex cursor-pointer p-2 text-gray-400 transition-colors duration-200 hover:text-gray-500"
              onClick={onClickCart}
            >
              <CartIcon />
              {cart.length > 0 && (
                <small className="absolute -top-1.5 -right-1.5 z-10 flex size-4.5 justify-center rounded-full bg-sky-500 font-semibold">
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
              className={({ isActive }) =>
                `${isActive ? "text-white" : "text-gray-400"} p-2 transition-colors duration-200 hover:text-gray-500`
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
