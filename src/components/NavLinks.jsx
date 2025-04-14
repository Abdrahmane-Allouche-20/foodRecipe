import { NavLink } from 'react-router-dom';

function Nav({ menuOpen, setMenuOpen }) {
  return (
    <ul
      className={`${
        menuOpen ? "block" : "hidden"
      } z-50 w-[90%] absolute left-1/2 -translate-x-1/2 sm:fixed top-[76px] rounded-xl bg-white lg:bg-transparent lg:static lg:flex lg:w-auto lg:p-0 p-4 lg:space-x-6`}
    >
      {[
        { name: "Home", path: "/" },
        { name: "About Us", path: "/About" },
        { name: "Favorites", path: "/Favorites" },
      ].map(({ name, path }) => (
        <li
          key={name}
          className="lg:border-0 border-b border-b-green-100"
        >
          <NavLink
            to={path}
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              `block lg:inline-block py-2 lg:py-0 text-sm  sm:text-xl
             font-bold duration-300 transform hover:text-green-400  ${
                isActive ? "text-green-500" : "text-green-900 lg:hover:-translate-y-1 hover:translate-x-2"
              }`
            }
          >
            {name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

export default Nav;
