import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../contexts/ThemeProvider";
import { Switch } from "@headlessui/react";
import { classNamesHelper } from "../../utils";
import { FaMoon, FaSun } from "react-icons/fa";

const DarkModeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);
  const isLight = theme === "light";

  useEffect(() => {
    setMounted(true);
  }, []);

  const onChange = () => {
    setTheme(isLight ? "dark" : "light");
  };

  return (
    mounted && (
      <Switch
        checked={isLight}
        onChange={onChange}
        className={classNamesHelper(
          isLight ? "bg-gray-200" : "bg-gray-700",
          "relative inline-flex flex-shrink-0 h-7 w-14 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none items-center"
        )}
      >
        <span
          className={classNamesHelper(
            isLight
              ? "translate-x-7 bg-orange-500"
              : "translate-x-1 bg-indigo-600",
            "pointer-events-none relative inline-block h-5 w-5 rounded-full shadow transform ring-0 transition ease-in-out duration-200"
          )}
        >
          <SwitchIcons isLight={isLight} />
        </span>
      </Switch>
    )
  );
};

const SwitchIcons = ({ isLight }) => {
  return (
    <>
      <span
        className={classNamesHelper(
          isLight
            ? "opacity-100 ease-in duration-200"
            : "opacity-0 ease-out duration-100",
          "absolute inset-0 h-full w-full flex items-center justify-center transition-opacity "
        )}
        aria-hidden="true"
      >
        <FaSun className="text-xs text-white " />
      </span>
      <span
        className={classNamesHelper(
          isLight
            ? "opacity-0 ease-out duration-100"
            : "opacity-100 ease-in duration-200",
          "absolute inset-0 h-full w-full flex items-center justify-center transition-opacity "
        )}
        aria-hidden="true"
      >
        <FaMoon className="text-xs text-white " />
      </span>
    </>
  );
};

export default DarkModeSwitch;
