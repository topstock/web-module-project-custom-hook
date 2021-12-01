import useLocalStorage from "./useLocalStorage";

const useDarkMode = (initialDark) => {
  const [darkMode, setDarkMode] = useLocalStorage(initialDark);
  return [darkMode, setDarkMode]
}

export default useDarkMode