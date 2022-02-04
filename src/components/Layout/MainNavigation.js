import AuthContext from "../../store/auth_contect";
import { useContext } from "react";

import { Link } from "react-router-dom";

import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  const authCtx = useContext(AuthContext);

  const isLoggedin = authCtx.isLoggedin;

  return (
    <header className={classes.header}>
      <Link to="/">
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          {!isLoggedin && (
            <li>
              <Link to="/auth">Login</Link>
            </li>
          )}
          {isLoggedin && (
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          )}
          {isLoggedin && (
            <li>
              <button>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
