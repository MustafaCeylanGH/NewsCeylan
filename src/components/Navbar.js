import { NavLink, useLocation } from "react-router-dom";
import { useContext, useEffect } from "react";
import GlobalContext from "../context/GlobalContext";
import styles from "./Navbar.module.css";

function Navbar() {
  const { activeItem, setActiveItem } = useContext(GlobalContext);
  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname;
    const lastPathSegment = pathname.substring(pathname.lastIndexOf("/") + 1);

    if (lastPathSegment === "") {
      setActiveItem("Home");
    } else {
      setActiveItem(
        lastPathSegment.charAt(0).toUpperCase() + lastPathSegment.slice(1)
      );
    }
  }, [location, setActiveItem]);

  const handleClick = (itemName) => {
    setActiveItem(itemName);
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.navbarInner}>
        <ul className={styles.navMenu}>
          <li>
            <NavLink
              to="/"
              className={`${styles.navLink} ${
                activeItem === "Home" ? styles.active : ""
              }`}
              onClick={() => handleClick("Home")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/business"
              className={`${styles.navLink} ${
                activeItem === "Business" ? styles.active : ""
              }`}
              onClick={() => handleClick("Business")}
            >
              Business
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/sport"
              className={`${styles.navLink} ${
                activeItem === "Sport" ? styles.active : ""
              }`}
              onClick={() => handleClick("Sport")}
            >
              Sport
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/health"
              className={`${styles.navLink} ${
                activeItem === "Health" ? styles.active : ""
              }`}
              onClick={() => handleClick("Health")}
            >
              Health
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/science"
              className={`${styles.navLink} ${
                activeItem === "Science" ? styles.active : ""
              }`}
              onClick={() => handleClick("Science")}
            >
              Science
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/technology"
              className={`${styles.navLink} ${
                activeItem === "Technology" ? styles.active : ""
              }`}
              onClick={() => handleClick("Technology")}
            >
              Technology
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/entertainment"
              className={`${styles.navLink} ${
                activeItem === "Entertainment" ? styles.active : ""
              }`}
              onClick={() => handleClick("Entertainment")}
            >
              Entertainment
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
