import { useState } from "react";

const useDarkMode = (initialDark) => {
  const [darkMode, setDarkMode] = useState(initialDark);
  return [darkMode, setDarkMode]
}

export default useDarkMode