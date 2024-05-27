import { NavLink, useNavigate } from "react-router-dom";
import styles from "./Sidebar.module.css";
import { useContext } from "react";
import GlobalContext from "../context/GlobalContext";
import { CgSearch } from "react-icons/cg";
import useOverflowControl from "../helpers/useOverflowControl";

function SideBar() {
  const {
    activeItem,
    setActiveItem,
    sidebarOpen,
    setSidebarOpen,
    sidebarInputText,
    setSidebarInputText,
    sidebarInputRef,
    setSearchTerm,
    setCurrentSearchPage,
  } = useContext(GlobalContext);

  const navigate = useNavigate();

  useOverflowControl(sidebarOpen);

  const handleClickNav = (itemName) => {
    setActiveItem(itemName);
    setSidebarOpen(false);
  };

  const handleClickSearch = () => {
    setCurrentSearchPage(1);
    setSearchTerm(sidebarInputText);
    setSidebarOpen(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setCurrentSearchPage(1);
      setSearchTerm(sidebarInputText);
      setSidebarOpen(false);
      navigate("/search");
    }
  };

  return (
    <div
      className={`${styles.sidebar} ${sidebarOpen ? styles.sidebarOpen : ""}`}
    >
      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search news, topics and more"
          className={styles.searchInput}
          value={sidebarInputText}
          onChange={(e) => setSidebarInputText(e.target.value)}
          onKeyDown={handleKeyDown}
          ref={sidebarInputRef}
        />
        <NavLink to="/search" onClick={handleClickSearch}>
          <CgSearch className={styles["icon-search"]} />
        </NavLink>
      </div>
      <nav className={styles.nav}>
        <ul>
          <NavLink
            to="/"
            className={`${styles.navLink} ${
              activeItem === "Home" ? styles.active : ""
            }`}
            onClick={() => handleClickNav("Home")}
          >
            <li>Home</li>
          </NavLink>
          <NavLink
            to="/business"
            className={`${styles.navLink} ${
              activeItem === "Business" ? styles.active : ""
            }`}
            onClick={() => handleClickNav("Business")}
          >
            <li>Business</li>
          </NavLink>
          <NavLink
            to="/sport"
            className={`${styles.navLink} ${
              activeItem === "Sport" ? styles.active : ""
            }`}
            onClick={() => handleClickNav("Sport")}
          >
            <li>Sport</li>
          </NavLink>
          <NavLink
            to="/health"
            className={`${styles.navLink} ${
              activeItem === "Health" ? styles.active : ""
            }`}
            onClick={() => handleClickNav("Health")}
          >
            <li>Health</li>
          </NavLink>
          <NavLink
            to="/science"
            className={`${styles.navLink} ${
              activeItem === "Science" ? styles.active : ""
            }`}
            onClick={() => handleClickNav("Science")}
          >
            <li>Science</li>
          </NavLink>
          <NavLink
            to="/technology"
            className={`${styles.navLink} ${
              activeItem === "Technology" ? styles.active : ""
            }`}
            onClick={() => handleClickNav("Technology")}
          >
            <li>Technology</li>
          </NavLink>
          <NavLink
            to="/entertainment"
            className={`${styles.navLink} ${
              activeItem === "Entertainment" ? styles.active : ""
            }`}
            onClick={() => handleClickNav("Entertainment")}
          >
            <li>Entertainment</li>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
}

export default SideBar;
