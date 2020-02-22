import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = () => {
    const [isDark, setIsDark] = useLocalStorage('true');

    useEffect(() => {
        isDark === true ? document.body.classList.add('dark-mode') : document.body.classList.remove('dark-mode');
    });

    const toggle = (event) => {
        event.preventDefault();
        setIsDark(!isDark);
    };

    return [isDark, setIsDark, toggle];

};
 