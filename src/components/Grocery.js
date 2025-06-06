import { use, useContext } from "react";
import ThemeContext from "../Utils/ThemeContext";

const Grocery = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div className="p-2">
      <label>
        Theme:
        <input
          type="radio"
          className="mx-2"
          checked={theme === "light"}
          onChange={() => {
            setTheme("light");
            document.documentElement.setAttribute("theme", "light");
          }}
        />
        Light
        <input
          type="radio"
          className="mx-2"
          checked={theme === "dark"}
          onChange={() => {
            setTheme("dark");
            document.documentElement.setAttribute("theme", "dark");
          }}
        />
        Dark
      </label>
    </div>
  );
};

export default Grocery;
