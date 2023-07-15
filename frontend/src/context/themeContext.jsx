import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [darkMode, setdarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode") || false)
  );

  const toggle = () => {
    setdarkMode(!darkMode);
  };

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};
