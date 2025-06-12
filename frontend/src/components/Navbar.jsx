import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light navbar-light">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          TODO
        </Link>
        <button
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#nav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
      <ul className="navbar-nav navbar-collapse collapse ms-auto" id="nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/signin" className="nav-link">
            SignUp
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
