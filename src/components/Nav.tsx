import { Link } from "react-router";

export const Nav = () => {
  return (
    <nav className="bg-gray-600 p-2.5 text-white">
      <ul className="m-0 flex list-none justify-around">
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="#">Acerca de</Link>
        </li>
        <li>
          <Link to="#">Contacto</Link>
        </li>
        <li>
          <Link to="/cart">Carrito</Link>
        </li>
      </ul>
    </nav>
  );
};
