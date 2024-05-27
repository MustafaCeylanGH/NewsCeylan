import styles from "./Header.module.css";
import { TiThMenu } from "react-icons/ti";
import { CgSearch } from "react-icons/cg";
import { MdClose } from "react-icons/md";
import { useContext } from "react";
import GlobalContext from "../context/GlobalContext";

function Header() {
  const { sidebarOpen, setSidebarOpen, setSidebarInputText, sidebarInputRef } =
    useContext(GlobalContext);

  const handleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
    setSidebarInputText("");
  };

  const handleOverlay = () => {
    setSidebarOpen(false);
  };

  const handleSearchIconClick = () => {
    setSidebarOpen(true);
    setTimeout(() => {
      if (sidebarInputRef.current) {
        sidebarInputRef.current.focus();
        sidebarInputRef.current.value = "";
      }
    }, 250);
  };
  return (
    <>
      <div className={styles.header}>
        <div className={styles.icon}>
          {!sidebarOpen ? (
            <>
              <TiThMenu
                className={styles["icon-menu"]}
                onClick={handleSidebar}
              />
              <CgSearch
                className={styles["icon-search"]}
                onClick={handleSearchIconClick}
              />
            </>
          ) : (
            <MdClose className={styles["icon-close"]} onClick={handleSidebar} />
          )}
        </div>
        <h1>
          <a
            href="/"
            className={styles.logo}
            onClick={() => window.location.reload()}
          >
            NewsCeylan
          </a>
        </h1>
        <div>
          <h3>Register</h3>
          <h3>Sign In</h3>
        </div>
      </div>
      {sidebarOpen && (
        <div className={styles.overlay} onClick={handleOverlay}></div>
      )}
    </>
  );
}

export default Header;
