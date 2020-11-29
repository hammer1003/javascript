import React, { useEffect, useState } from "react";
import "./styles.css";

const DarkMode = () => {
  const [darkMode, setDarkMode] = useState<boolean>();
  useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(darkMode));
    console.log("localStorage", localStorage.getItem("dark"));
  }, [darkMode]);
  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <nav>
        <div className="toggle-container">
          <span style={{ color: darkMode ? "grey" : "yellow" }}>☀︎</span>
          <span className="toggle">
            <input
              checked={darkMode}
              onChange={() => setDarkMode(prevMode => !prevMode)}
              id="checkbox"
              className="checkbox"
              type="checkbox"
            />
            <label htmlFor="checkbox" />
          </span>
          <span style={{ color: darkMode ? "slateblue" : "grey" }}>☾</span>
          {/* <button onClick={() => setDarkMode(prevMode => !prevMode)}>
          Toggle
        </button> */}
        </div>
      </nav>
      <main>
        <h1>{darkMode ? "Dark Mode" : "Light Mode"}</h1>
        <h2>Toggle the switch to see some magic happen!</h2>
      </main>
    </div>
  );
};

export default DarkMode;
