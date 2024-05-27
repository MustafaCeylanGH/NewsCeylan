import { createContext, useRef, useState } from "react";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [sidebarInputText, setSidebarInputText] = useState("");
  const sidebarInputRef = useRef(null);
  const [currentSearchPage, setCurrentSearchPage] = useState(1);
  const [searchArticles, setSearchArticles] = useState([]);

  return (
    <GlobalContext.Provider
      value={{
        loading,
        setLoading,
        activeItem,
        setActiveItem,
        sidebarOpen,
        setSidebarOpen,
        searchTerm,
        setSearchTerm,
        sidebarInputText,
        setSidebarInputText,
        sidebarInputRef,
        currentSearchPage,
        setCurrentSearchPage,
        searchArticles,
        setSearchArticles,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
