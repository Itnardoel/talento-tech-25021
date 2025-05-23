import { Nav } from "./Nav";

export const Header = () => {
  return (
    <header>
      <h1 className="bg-green-500 p-2.5 text-center text-white">
        Bienvenidos a mi App React
      </h1>
      <Nav />
    </header>
  );
};
