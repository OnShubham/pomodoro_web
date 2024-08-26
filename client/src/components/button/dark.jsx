import React from "react";
import { useState, useEffect } from "react";

function DarkMode() {
  const [theme, setTheme] = useState("light");

  // Function to toggle between dark and light modes
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    const root = document.documentElement;
    const storedTheme = localStorage.getItem("theme");

    if (storedTheme) {
      setTheme(storedTheme);
    } else {
      localStorage.setItem("theme", theme);
    }

    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <header className="p-4 text-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          React Dark/Light Mode
        </h1>
        <button
          onClick={toggleTheme}
          className="mt-4 px-4 py-2 bg-blue-500 text-white dark:bg-gray-700 dark:text-gray-300 rounded-lg focus:outline-none transition-colors duration-300"
        >
          {theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>
      </header>
    </div>
  );
}

export default DarkMode;
