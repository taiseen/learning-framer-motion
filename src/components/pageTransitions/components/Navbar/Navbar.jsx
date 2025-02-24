import pageTransitionsRoutes from "../../routes";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {

  return (
    <nav className="navbar">
      <ul>
        {
          pageTransitionsRoutes.map((route, index) => (
            <li key={index}>

              <Link to={`${route.path}`}>
                {route.title}
              </Link>

            </li>
          ))
        }
      </ul>
    </nav>
  );
};

export default Navbar;
