//ONLY setups a boolean state value. This value governs if dark mode is on or off.
import { useState } from 'react';

const useDarkMode = (initialDark) => {
    const [isDark, setIsDark] = useState(initialDark);
    return [isDark, setIsDark]
}

export default useDarkMode