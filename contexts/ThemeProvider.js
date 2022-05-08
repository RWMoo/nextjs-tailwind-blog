import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext(null);

const getTheme = () => {
  // prevents build errors when window isn't defined
  if (typeof windows !== "undefined" && window.localStorage) {
    const storedTheme = window.localStorage.getItem("theme");
    // check it exists
    if (typeof storedTheme === "string") {
      return storedTheme;
    }
    const preferredTheme = window.matchMedia("(prefers-color-scheme: dark");
    if (preferredTheme.matches) {
      return "dark";
    }
  }
  return "dark";
};

const ThemeProvider = ({ initialTheme, children }) => {
  const [theme, setTheme] = useState(getTheme);

  const applyTheme = (theme) => {
    // prevents build errors when window isn't defined
    if (typeof window !== "undefined") {
      const root = window.document.documentElement;
      const isDark = theme === "dark";
      root.classList.remove(isDark ? "light" : "dark");
      root.classList.add(theme);
      localStorage.setItem("theme", theme);
    }
  };

  if (initialTheme) {
    applyTheme(initialTheme);
  }

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
